"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function YoutubeTitleGenerator() {
  const [location, setLocation] = useState("");
  const [crop, setCrop] = useState("");
  const [date, setDate] = useState("");
  const [generatedTitle, setGeneratedTitle] = useState("");

  const locations = [
    "SINGIDA",
    "MANYARA",
    "SONGEA",
    "RUVUMA",
    "MTWARA",
    "DODOMA",
    "LINDI",
    "MOROGORO",
    "PWANI",
  ];

  const crops = [
    "COFEE",
    "SESAME",
    "SOYA",
    "BEAN",
    "COCOA",
    "CHICK PEA",
    "PIGEON PEA",
  ];

  const generateTitle = () => {
    if (!location || !date) {
      alert("Please fill in all fields");
      return;
    }

    const swahiliLocation = location.toLowerCase();
    const formattedDate = new Date(date)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
      .toUpperCase();

    const title = `[LIVE] ${crop} TRADE SESSION ${location} (MNADA WA MBAAZI ${location} MBASHARA -TMX OTS | ${formattedDate})`;
    setGeneratedTitle(title);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Youtube TMX Title Generator
      </h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="location">Location</Label>
          <Select onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Crop</Label>
          <Select onValueChange={setCrop}>
            <SelectTrigger>
              <SelectValue placeholder="Select Crop" />
            </SelectTrigger>
            <SelectContent>
              {crops.map((crop) => (
                <SelectItem key={crop} value={crop}>
                  {crop}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <Button onClick={generateTitle} className="w-full">
          Generate Title
        </Button>
        {generatedTitle && (
          <div className="mt-4">
            <Label htmlFor="generated-title">Generated Title</Label>
            <Textarea
              id="generated-title"
              value={generatedTitle}
              readOnly
              className="h-24"
            />
          </div>
        )}
      </div>
      <p className="text-muted text-center py-12">
        yes, i am truly that lazy lol
      </p>
    </div>
  );
}
