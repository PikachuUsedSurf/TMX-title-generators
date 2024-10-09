"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckIcon } from "lucide-react";

export default function FacebookTitleGenerator() {
  const [regions, setRegions] = useState([]);
  const [crop, setCrop] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");

  const availableRegions = [
    "Arusha",
    "Dar es Salaam",
    "Dodoma",
    "Geita",
    "Iringa",
    "Kagera",
    "Katavi",
    "Kigoma",
    "Kilimanjaro",
    "Lindi",
    "Manyara",
    "Mara",
    "Mbeya",
    "Morogoro",
    "Mtwara",
    "Mwanza",
    "Njombe",
    "Pemba",
    "Pwani",
    "Rukwa",
    "Ruvuma",
    "Shinyanga",
    "Simiyu",
    "Singida",
    "Songwe",
    "Tabora",
    "Tanga",
    "Zanzibar",
  ];

  const crops = [
    "Ufuta",
    "Korosho",
    "Kahawa",
    "Pamba",
    "Alizeti",
    "Cocoa",
    "Maharage",
    "Karanga",
    "Mbaazi",
  ];

  const handleRegionChange = (selectedRegion) => {
    setRegions((prevRegions) => {
      if (prevRegions.includes(selectedRegion)) {
        return prevRegions.filter((reg) => reg !== selectedRegion);
      } else {
        return [...prevRegions, selectedRegion];
      }
    });
  };

  const generateMessage = () => {
    if (regions.length === 0 || !crop) {
      alert("Please select at least one region and a crop");
      return;
    }

    const regionsText = regions.join(", ");
    const swahiliCrop = crop.toLowerCase();
    const englishCrop =
      crop.toLowerCase() === "ufuta" ? "sesame seeds" : crop.toLowerCase();
    crop.toLowerCase() === "korosho" ? "cashew nuts" : crop.toLowerCase();

    const message = `Karibuni kushiriki kwenye mauzo wa zao la ${swahiliCrop} mkoa wa ${regionsText} kupitia Mfumo wa Mauzo wa Kieletroniki wa TMX kwa kushirikiana na WRRB, TCDC na COPRA.

We welcome you all to participate in ${englishCrop} trading through TMX Online Trading System in collaboration with WRRB, TCDC and COPRA in ${regionsText} Region${
      regions.length > 1 ? "s" : ""
    }.

@urtmof @capitalmarketsecurityauthority @ofisi_ya_msajili_wa_hazina @msemajimkuuwaserikali @ikulu_mawasiliano @wizarayakilimo @tumedamaendeleoyaushirika @ushirika_tcdc @wizarayaviwandanabiashara @bodiusimamiziwastakabadhi_ghala_wrrb

#oilseeds #buyers #trading #${englishCrop.replace(
      " ",
      ""
    )} #commodityexchangemarkets #commoditiesexchange #agriculture #commoditiestrading #seller #commoditytraders #agriculturalcommodityexhange #farmersmarket #onlinetradingsystem #agriculturalcommodityexchange #onlinetrading #commoditytrader #traders #tradingcommodities #OnlineTradingPlatform #buyer #commoditiesmarket #commodities #buyersmarket #TradingCommodities #trader #SellersMarket #online #agriculturalcommodities #farmer`;

    setGeneratedMessage(message);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Facebook Message Generator for TMX
      </h1>
      <div className="space-y-4">
        <div>
          <Label htmlFor="regions">Regions</Label>
          <Select onValueChange={handleRegionChange} multiple>
            <SelectTrigger className="h-auto">
              <SelectValue placeholder="Select regions" />
            </SelectTrigger>
            <SelectContent>
              {availableRegions.map((reg) => (
                <SelectItem key={reg} value={reg}>
                  <div className="flex items-center">
                    <span className="mr-2">{reg}</span>
                    {regions.includes(reg) && <CheckIcon size={16} />}
                  </div>
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
              {crops.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={generateMessage} className="w-full">
          Generate Message
        </Button>
        {generatedMessage && (
          <div className="mt-4">
            <Label htmlFor="generated-message">Generated Message</Label>
            <Textarea
              id="generated-message"
              value={generatedMessage}
              readOnly
              className="h-64"
            />
          </div>
        )}
      </div>
    </div>
  );
}
