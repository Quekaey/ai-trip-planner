import { Textarea } from "@/components/ui/textarea";
import React from "react";

function Hero() {
  return (
    <div className="mt-24 w-full flex justify-center">
      {/* Content */}
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-5xl font-bold">
          Hey, I'm your personal{" "}
          <span className="text-primary">Trip Planner</span>
        </h1>
        <p className="text-lg">
          Tell me what you want, and i'll handle the rest: Flights, Hotels, trip
          Planner - all in seconds{" "}
        </p>
        {/* Input Box */}
        <div>
          <div>
            <Textarea
              placeholder="Create a trip for Paris from New York"
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0"
            />
          </div>
        </div>
        {/* Suggestion list */}
        {/* Video Section */}
      </div>
    </div>
  );
}

export default Hero;
