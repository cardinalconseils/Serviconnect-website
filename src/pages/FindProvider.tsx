import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { AlertTriangle, LayoutGrid, List, MapPin, Clock, Star } from "lucide-react";

const mockProviders = [
  {
    id: 1,
    name: "Emergency Plumbing Experts",
    rating: 4.8,
    reviews: 156,
    location: "Montreal",
    responseTime: "Within 1 hour",
    services: ["Burst pipe emergency repair", "Major water leak containment", "Sewage system backup resolution"],
    tags: ["Emergency", "Urgent", "Planned"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Montreal Fire & Water Restoration",
    rating: 4.9,
    reviews: 203,
    location: "Montreal",
    responseTime: "Within 1 hour",
    services: ["Emergency fire damage assessment", "Immediate water extraction", "Smoke damage mitigation"],
    tags: ["Emergency", "Urgent"],
    image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "24/7 Electrical Services",
    rating: 4.7,
    reviews: 128,
    location: "Montreal",
    responseTime: "Within 30 minutes",
    services: ["Power outage resolution", "Electrical fire prevention", "Emergency wiring repair"],
    tags: ["Emergency", "Urgent", "Planned"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function FindProvider() {
  const [isGridView, setIsGridView] = useState(true);
  const [emergencyOnly, setEmergencyOnly] = useState(false);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Emergency Service Providers</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsGridView(true)}
            className={isGridView ? "bg-muted" : ""}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsGridView(false)}
            className={!isGridView ? "bg-muted" : ""}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <p className="text-muted-foreground">
        Find verified emergency service providers in your area
      </p>

      <div className="space-y-4">
        <Input
          placeholder="Search by provider name or service..."
          className="max-w-full"
        />
        
        <div className="flex flex-wrap gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="fire">Fire & Water</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Areas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Areas</SelectItem>
              <SelectItem value="montreal">Montreal</SelectItem>
              <SelectItem value="toronto">Toronto</SelectItem>
              <SelectItem value="vancouver">Vancouver</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="emergency"
              checked={emergencyOnly}
              onCheckedChange={setEmergencyOnly}
            />
            <label
              htmlFor="emergency"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Emergency Only
            </label>
          </div>
        </div>
      </div>

      <div className={`grid gap-4 ${isGridView ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
        {mockProviders.map((provider) => (
          <Card key={provider.id}>
            <CardContent className="p-6">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <img
                    src={provider.image}
                    alt=""
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{provider.name}</h3>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{provider.rating}</span>
                      <span className="text-muted-foreground ml-1">({provider.reviews})</span>
                    </div>
                  </div>
                </div>
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {provider.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  Response: {provider.responseTime}
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                {provider.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={
                      tag === "Emergency" ? "destructive" : 
                      tag === "Urgent" ? "default" : "secondary"
                    }
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-4">
                {provider.services.map((service) => (
                  <div
                    key={service}
                    className="text-sm py-1 px-2 bg-gray-50 rounded-sm mt-1"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white">
                Request Emergency Service
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}