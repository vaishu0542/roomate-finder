
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, Search, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                RoomieMatch
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/rooms" className="text-gray-700 hover:text-purple-600 transition-colors">
                Browse Rooms
              </Link>
              <Link to="/roommates" className="text-gray-700 hover:text-purple-600 transition-colors">
                Find Roommates
              </Link>
              <Link to="/post-room" className="text-gray-700 hover:text-purple-600 transition-colors">
                Post Room
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Living Situation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with compatible roommates and discover amazing rooms in your area. 
            Your ideal living arrangement is just a click away.
          </p>
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-500 to-purple-600 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10">
              <Search className="h-12 w-12 mb-4" />
              <CardTitle className="text-2xl">Find Roommates</CardTitle>
              <CardDescription className="text-purple-100">
                Browse profiles and connect with potential roommates who match your lifestyle
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <Link to="/roommates">
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 transition-colors">
                  Start Searching
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-500 to-indigo-600 border-0 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10">
              <Home className="h-12 w-12 mb-4" />
              <CardTitle className="text-2xl">Browse Rooms</CardTitle>
              <CardDescription className="text-blue-100">
                Discover available rooms and apartments perfect for sharing
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <Link to="/rooms">
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 transition-colors">
                  View Rooms
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Actions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <PlusCircle className="h-10 w-10 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Post a Room</CardTitle>
              <CardDescription>
                Have a room to share? List it and find the perfect roommate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/post-room">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Post Room
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <Users className="h-10 w-10 text-orange-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Create Profile</CardTitle>
              <CardDescription>
                Let others know about you and your preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/create-profile">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Create Profile
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/60 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose RoomieMatch?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Smart Matching</h4>
              <p className="text-gray-600">Advanced filters to find compatible roommates and rooms</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Verified Profiles</h4>
              <p className="text-gray-600">Connect with real people through detailed profiles</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Easy Listing</h4>
              <p className="text-gray-600">Simple tools to post and manage your room listings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
