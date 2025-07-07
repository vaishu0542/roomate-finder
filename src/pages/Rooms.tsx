
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Home, MapPin, DollarSign, Users, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced mock data for rooms with 15+ listings
const mockRooms = [
  {
    id: 1,
    title: "Spacious Room in Downtown Apartment",
    location: "Downtown, City Center",
    rent: 800,
    type: "Private Room",
    amenities: ["Wi-Fi", "Parking", "Gym", "Pool"],
    description: "Beautiful room in a modern apartment with all amenities. Close to public transport.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    availableFrom: "March 1, 2024",
    roommates: 2
  },
  {
    id: 2,
    title: "Cozy Room Near University",
    location: "University District",
    rent: 600,
    type: "Shared Room",
    amenities: ["Wi-Fi", "Study Area", "Kitchen"],
    description: "Perfect for students! Walking distance to campus with a great study environment.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
    availableFrom: "February 15, 2024",
    roommates: 3
  },
  {
    id: 3,
    title: "Luxury Room with City View",
    location: "Uptown, Financial District",
    rent: 1200,
    type: "Private Room",
    amenities: ["Wi-Fi", "Balcony", "Gym", "Concierge", "Pool"],
    description: "High-end apartment with stunning city views and premium amenities.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    availableFrom: "March 15, 2024",
    roommates: 1
  },
  {
    id: 4,
    title: "Modern Studio Apartment",
    location: "Arts District",
    rent: 950,
    type: "Studio",
    amenities: ["Wi-Fi", "Kitchen", "Laundry", "Parking"],
    description: "Stylish studio perfect for creative professionals in the heart of arts district.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    availableFrom: "April 1, 2024",
    roommates: 0
  },
  {
    id: 5,
    title: "Bright Room in Family Home",
    location: "Suburbs, Quiet Neighborhood",
    rent: 550,
    type: "Private Room",
    amenities: ["Wi-Fi", "Garden", "Parking", "Kitchen"],
    description: "Peaceful room in a family home with garden access and quiet surroundings.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    availableFrom: "March 10, 2024",
    roommates: 2
  },
  {
    id: 6,
    title: "Loft Room with Exposed Brick",
    location: "Industrial District",
    rent: 850,
    type: "Private Room",
    amenities: ["Wi-Fi", "High Ceilings", "Kitchen", "Storage"],
    description: "Unique loft space with character, exposed brick walls and industrial charm.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    availableFrom: "February 20, 2024",
    roommates: 1
  },
  {
    id: 7,
    title: "Beachside Room with Ocean View",
    location: "Coastal Area",
    rent: 1100,
    type: "Private Room",
    amenities: ["Wi-Fi", "Ocean View", "Beach Access", "Balcony"],
    description: "Wake up to ocean views every day in this beautiful beachside location.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    availableFrom: "March 5, 2024",
    roommates: 2
  },
  {
    id: 8,
    title: "Minimalist Room in Tech Hub",
    location: "Tech District",
    rent: 900,
    type: "Private Room",
    amenities: ["Wi-Fi", "Desk Space", "Meeting Room", "Coffee Bar"],
    description: "Clean, modern room perfect for tech professionals with workspace amenities.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop",
    availableFrom: "April 10, 2024",
    roommates: 3
  },
  {
    id: 9,
    title: "Vintage Room in Historic Building",
    location: "Old Town",
    rent: 700,
    type: "Private Room",
    amenities: ["Wi-Fi", "Historic Features", "Courtyard", "Kitchen"],
    description: "Charming room in a historic building with original architectural features.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop",
    availableFrom: "March 20, 2024",
    roommates: 2
  },
  {
    id: 10,
    title: "Garden Room with Private Entrance",
    location: "Green District",
    rent: 750,
    type: "Private Room",
    amenities: ["Wi-Fi", "Private Entrance", "Garden", "Kitchenette"],
    description: "Independent room with private entrance and access to beautiful garden.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=300&fit=crop",
    availableFrom: "February 25, 2024",
    roommates: 1
  },
  {
    id: 11,
    title: "Penthouse Room with Terrace",
    location: "Downtown Skyline",
    rent: 1400,
    type: "Private Room",
    amenities: ["Wi-Fi", "Terrace", "City Views", "Elevator", "Gym"],
    description: "Luxurious penthouse room with private terrace and panoramic city views.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    availableFrom: "April 5, 2024",
    roommates: 1
  },
  {
    id: 12,
    title: "Cozy Attic Room",
    location: "Historic District",
    rent: 650,
    type: "Private Room",
    amenities: ["Wi-Fi", "Skylight", "Storage", "Kitchen"],
    description: "Charming attic room with skylights and cozy atmosphere in historic area.",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=300&fit=crop",
    availableFrom: "March 12, 2024",
    roommates: 2
  },
  {
    id: 13,
    title: "Room in Eco-Friendly House",
    location: "Green Valley",
    rent: 680,
    type: "Private Room",
    amenities: ["Wi-Fi", "Solar Power", "Garden", "Composting"],
    description: "Sustainable living in an eco-friendly house with green technologies.",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop",
    availableFrom: "February 28, 2024",
    roommates: 3
  },
  {
    id: 14,
    title: "Artist's Room in Creative Space",
    location: "Arts Quarter",
    rent: 800,
    type: "Private Room",
    amenities: ["Wi-Fi", "Art Studio", "Natural Light", "Gallery Access"],
    description: "Perfect for artists! Room in a creative hub with studio space and gallery.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop",
    availableFrom: "March 8, 2024",
    roommates: 4
  },
  {
    id: 15,
    title: "Room Near Shopping Center",
    location: "Commercial District",
    rent: 720,
    type: "Shared Room",
    amenities: ["Wi-Fi", "Shopping Access", "Food Court", "Parking"],
    description: "Convenient location next to major shopping center with easy access to amenities.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    availableFrom: "April 15, 2024",
    roommates: 2
  },
  {
    id: 16,
    title: "Room in Student Co-op",
    location: "University Area",
    rent: 500,
    type: "Shared Room",
    amenities: ["Wi-Fi", "Study Rooms", "Common Kitchen", "Library"],
    description: "Affordable student housing with cooperative living and study facilities.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    availableFrom: "February 18, 2024",
    roommates: 5
  },
  {
    id: 17,
    title: "Executive Room in Business District",
    location: "Financial Center",
    rent: 1300,
    type: "Private Room",
    amenities: ["Wi-Fi", "Business Center", "Concierge", "Gym", "Spa"],
    description: "Premium accommodation for business professionals with executive amenities.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    availableFrom: "March 25, 2024",
    roommates: 1
  },
  {
    id: 18,
    title: "Room in Converted Warehouse",
    location: "Creative District",
    rent: 880,
    type: "Private Room",
    amenities: ["Wi-Fi", "High Ceilings", "Industrial Design", "Workspace"],
    description: "Unique living space in converted warehouse with industrial aesthetic.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    availableFrom: "April 8, 2024",
    roommates: 3
  }
];

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [roomType, setRoomType] = useState("");
  const [location, setLocation] = useState("");

  const filteredRooms = mockRooms.filter(room => {
    const matchesSearch = room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = !priceRange || priceRange === "all" ||
                        (priceRange === "low" && room.rent < 700) ||
                        (priceRange === "medium" && room.rent >= 700 && room.rent < 1000) ||
                        (priceRange === "high" && room.rent >= 1000);
    const matchesType = !roomType || roomType === "all" || room.type === roomType;
    const matchesLocation = !location || location === "all" || room.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesPrice && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RoomieMatch
              </h1>
            </Link>
            <nav className="flex space-x-6">
              <Link to="/roommates" className="text-gray-700 hover:text-blue-600 transition-colors">
                Find Roommates
              </Link>
              <Link to="/post-room" className="text-gray-700 hover:text-blue-600 transition-colors">
                Post Room
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Room</h2>
          <p className="text-xl text-gray-600">Browse available rooms and apartments for sharing</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search rooms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="university">University District</SelectItem>
                  <SelectItem value="uptown">Uptown</SelectItem>
                  <SelectItem value="coastal">Coastal Area</SelectItem>
                  <SelectItem value="tech">Tech District</SelectItem>
                  <SelectItem value="arts">Arts District</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $700</SelectItem>
                  <SelectItem value="medium">$700 - $1000</SelectItem>
                  <SelectItem value="high">$1000+</SelectItem>
                </SelectContent>
              </Select>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger>
                  <SelectValue placeholder="Room Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Private Room">Private Room</SelectItem>
                  <SelectItem value="Shared Room">Shared Room</SelectItem>
                  <SelectItem value="Studio">Studio</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredRooms.length} rooms found</p>
        </div>

        {/* Room Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <Card key={room.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">{room.type}</Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-sm font-semibold text-green-600">${room.rent}/mo</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{room.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {room.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.slice(0, 3).map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                  {room.amenities.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{room.amenities.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {room.roommates} roommate{room.roommates !== 1 ? 's' : ''}
                  </div>
                  <div>Available {room.availableFrom}</div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <Home className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No rooms found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;
