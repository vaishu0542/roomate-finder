
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Users, Search, Filter, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for roommates
const mockRoommates = [
  {
    id: 1,
    name: "Alex Johnson",
    age: 24,
    profession: "Software Developer",
    location: "Downtown",
    budget: 800,
    preferences: ["Non-smoker", "Pet-friendly", "Quiet"],
    bio: "Easy-going professional looking for a clean and friendly living environment. Love cooking and weekend hiking.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    moveInDate: "March 2024",
    lifestyle: "Active"
  },
  {
    id: 2,
    name: "Sarah Chen",
    age: 22,
    profession: "Graduate Student",
    location: "University District",
    budget: 600,
    preferences: ["Non-smoker", "Study-friendly", "Social"],
    bio: "Psychology grad student seeking a supportive roommate for shared study sessions and occasional movie nights.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b5b2a5e0?w=150&h=150&fit=crop&crop=face",
    moveInDate: "February 2024",
    lifestyle: "Student"
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    age: 28,
    profession: "Marketing Manager",
    location: "Uptown",
    budget: 1200,
    preferences: ["Gym enthusiast", "Social", "Clean"],
    bio: "Marketing professional who enjoys fitness, cooking, and hosting friends. Looking for someone with similar interests.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    moveInDate: "March 2024",
    lifestyle: "Professional"
  },
  {
    id: 4,
    name: "Emma Davis",
    age: 26,
    profession: "Graphic Designer",
    location: "Arts District",
    budget: 900,
    preferences: ["Creative", "Pet-friendly", "Flexible"],
    bio: "Creative freelancer with a love for art, music, and good coffee. I have a friendly cat and work from home occasionally.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    moveInDate: "April 2024",
    lifestyle: "Creative"
  }
];

const Roommates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [location, setLocation] = useState("");

  const filteredRoommates = mockRoommates.filter(roommate => {
    const matchesSearch = roommate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         roommate.profession.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBudget = !budgetRange || 
                         (budgetRange === "low" && roommate.budget < 700) ||
                         (budgetRange === "medium" && roommate.budget >= 700 && roommate.budget < 1000) ||
                         (budgetRange === "high" && roommate.budget >= 1000);
    const matchesLifestyle = !lifestyle || roommate.lifestyle === lifestyle;
    const matchesLocation = !location || roommate.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesBudget && matchesLifestyle && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                RoomieMatch
              </h1>
            </Link>
            <nav className="flex space-x-6">
              <Link to="/rooms" className="text-gray-700 hover:text-purple-600 transition-colors">
                Browse Rooms
              </Link>
              <Link to="/post-room" className="text-gray-700 hover:text-purple-600 transition-colors">
                Post Room
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Roommate</h2>
          <p className="text-xl text-gray-600">Connect with compatible people looking for shared living</p>
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
                  placeholder="Search roommates..."
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
                  <SelectItem value="">All Locations</SelectItem>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="university">University District</SelectItem>
                  <SelectItem value="uptown">Uptown</SelectItem>
                  <SelectItem value="arts">Arts District</SelectItem>
                </SelectContent>
              </Select>
              <Select value={budgetRange} onValueChange={setBudgetRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Budgets</SelectItem>
                  <SelectItem value="low">Under $700</SelectItem>
                  <SelectItem value="medium">$700 - $1000</SelectItem>
                  <SelectItem value="high">$1000+</SelectItem>
                </SelectContent>
              </Select>
              <Select value={lifestyle} onValueChange={setLifestyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Lifestyle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Lifestyles</SelectItem>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Professional">Professional</SelectItem>
                  <SelectItem value="Creative">Creative</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredRoommates.length} roommates found</p>
        </div>

        {/* Roommate Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoommates.map((roommate) => (
            <Card key={roommate.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={roommate.avatar} alt={roommate.name} />
                  <AvatarFallback>{roommate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{roommate.name}</CardTitle>
                <CardDescription>
                  {roommate.age} years old • {roommate.profession}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {roommate.location}
                    </div>
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      ${roommate.budget}/mo budget
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm">{roommate.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {roommate.preferences.slice(0, 3).map((pref) => (
                      <Badge key={pref} variant="secondary" className="text-xs">
                        {pref}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Available {roommate.moveInDate}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {roommate.lifestyle}
                    </Badge>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRoommates.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No roommates found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roommates;
