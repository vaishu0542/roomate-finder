
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Home, Upload, MapPin, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PostRoom = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
    roomType: "",
    description: "",
    availableFrom: "",
    amenities: [] as string[],
    contactInfo: ""
  });

  const amenitiesList = [
    "Wi-Fi", "Parking", "Gym", "Pool", "Laundry", "Kitchen", "Balcony", 
    "Air Conditioning", "Heating", "Study Area", "Garden", "Security"
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenity]
        : prev.amenities.filter(a => a !== amenity)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Room Posted Successfully!",
      description: "Your room listing has been published and is now visible to potential roommates.",
    });
    console.log("Room posted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                RoomieMatch
              </h1>
            </Link>
            <nav className="flex space-x-6">
              <Link to="/rooms" className="text-gray-700 hover:text-green-600 transition-colors">
                Browse Rooms
              </Link>
              <Link to="/roommates" className="text-gray-700 hover:text-green-600 transition-colors">
                Find Roommates
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Post Your Room</h2>
          <p className="text-xl text-gray-600">Find the perfect roommate for your available space</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-6 w-6" />
                Room Details
              </CardTitle>
              <CardDescription>
                Provide detailed information about your room to attract the right roommate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Room Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Spacious Room in Downtown Apartment"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="location"
                          placeholder="e.g., Downtown, City Center"
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="rent">Monthly Rent ($) *</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="rent"
                          type="number"
                          placeholder="800"
                          value={formData.rent}
                          onChange={(e) => setFormData(prev => ({ ...prev, rent: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="roomType">Room Type *</Label>
                      <Select value={formData.roomType} onValueChange={(value) => setFormData(prev => ({ ...prev, roomType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Private Room">Private Room</SelectItem>
                          <SelectItem value="Shared Room">Shared Room</SelectItem>
                          <SelectItem value="Master Bedroom">Master Bedroom</SelectItem>
                          <SelectItem value="Studio">Studio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="availableFrom">Available From *</Label>
                      <Input
                        id="availableFrom"
                        type="date"
                        value={formData.availableFrom}
                        onChange={(e) => setFormData(prev => ({ ...prev, availableFrom: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your room, the apartment, neighborhood, and what you're looking for in a roommate..."
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    required
                  />
                </div>

                {/* Amenities */}
                <div>
                  <Label className="text-base font-semibold">Amenities</Label>
                  <p className="text-sm text-gray-600 mb-3">Select all amenities available</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {amenitiesList.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={formData.amenities.includes(amenity)}
                          onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                        />
                        <Label htmlFor={amenity} className="text-sm">
                          {amenity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo Upload */}
                <div>
                  <Label className="text-base font-semibold">Photos</Label>
                  <p className="text-sm text-gray-600 mb-3">Add photos of your room and common areas</p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      <span className="text-green-600 font-semibold cursor-pointer hover:underline">
                        Click to upload
                      </span>
                      {" "}or drag and drop
                    </p>
                    <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB each</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <Label htmlFor="contactInfo">Contact Information *</Label>
                  <Input
                    id="contactInfo"
                    placeholder="Email or phone number for interested roommates"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactInfo: e.target.value }))}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                  Post Room Listing
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PostRoom;
