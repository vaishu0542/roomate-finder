
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Upload, User, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CreateProfile = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    profession: "",
    location: "",
    budget: "",
    bio: "",
    lifestyle: "",
    moveInDate: "",
    preferences: [] as string[],
    contactInfo: ""
  });

  const preferencesList = [
    "Non-smoker", "Pet-friendly", "Quiet", "Social", "Clean", "Study-friendly",
    "Gym enthusiast", "Vegetarian", "Night owl", "Early bird", "Cooking", "Gaming"
  ];

  const handlePreferenceChange = (preference: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferences: checked 
        ? [...prev.preferences, preference]
        : prev.preferences.filter(p => p !== preference)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Created Successfully!",
      description: "Your roommate profile is now live and visible to others looking for rooms.",
    });
    console.log("Profile created:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                RoomieMatch
              </h1>
            </Link>
            <nav className="flex space-x-6">
              <Link to="/rooms" className="text-gray-700 hover:text-orange-600 transition-colors">
                Browse Rooms
              </Link>
              <Link to="/roommates" className="text-gray-700 hover:text-orange-600 transition-colors">
                Find Roommates
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Create Your Profile</h2>
          <p className="text-xl text-gray-600">Let potential roommates get to know you better</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Create a detailed profile to help others understand your lifestyle and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Photo */}
                <div className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback className="text-2xl">
                      {formData.name ? formData.name.split(' ').map(n => n[0]).join('') : 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-orange-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
                        Upload profile photo
                      </span>
                    </p>
                  </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="profession">Profession *</Label>
                    <Input
                      id="profession"
                      placeholder="Software Developer"
                      value={formData.profession}
                      onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Preferred Location *</Label>
                    <Input
                      id="location"
                      placeholder="Downtown, University District"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Monthly Budget ($) *</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="budget"
                        type="number"
                        placeholder="800"
                        value={formData.budget}
                        onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="lifestyle">Lifestyle *</Label>
                    <Select value={formData.lifestyle} onValueChange={(value) => setFormData(prev => ({ ...prev, lifestyle: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select lifestyle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Professional">Professional</SelectItem>
                        <SelectItem value="Creative">Creative</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Relaxed">Relaxed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="moveInDate">Preferred Move-in Date *</Label>
                  <Input
                    id="moveInDate"
                    type="date"
                    value={formData.moveInDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, moveInDate: e.target.value }))}
                    required
                  />
                </div>

                {/* Bio */}
                <div>
                  <Label htmlFor="bio">About Me *</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell potential roommates about yourself, your interests, habits, and what you're looking for in a living situation..."
                    value={formData.bio}
                    onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                    rows={4}
                    required
                  />
                </div>

                {/* Preferences */}
                <div>
                  <Label className="text-base font-semibold">Preferences & Lifestyle</Label>
                  <p className="text-sm text-gray-600 mb-3">Select what describes you or what you prefer</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {preferencesList.map((preference) => (
                      <div key={preference} className="flex items-center space-x-2">
                        <Checkbox
                          id={preference}
                          checked={formData.preferences.includes(preference)}
                          onCheckedChange={(checked) => handlePreferenceChange(preference, checked as boolean)}
                        />
                        <Label htmlFor={preference} className="text-sm">
                          {preference}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <Label htmlFor="contactInfo">Contact Information *</Label>
                  <Input
                    id="contactInfo"
                    placeholder="Email or phone number for potential roommates"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactInfo: e.target.value }))}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-6">
                  Create Profile
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
