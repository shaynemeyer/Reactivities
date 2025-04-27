import Map from "@/components/Maps/Map";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "@/lib/types";
import { formatDateForDisplay } from "@/lib/utils";
import { Calendar, Info, MapPin } from "lucide-react";
import { useState } from "react";

type Props = {
  activity: Activity;
};

function ActivityDetailsInfo({ activity }: Props) {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <Card className="mb-2">
      <CardContent className="flex gap-3">
        <Info className="text-primary" />
        <span>{activity.description}</span>
      </CardContent>
      <CardContent className="flex gap-3 items-center">
        <Calendar className="text-primary" />
        <span>{formatDateForDisplay(activity.date.toString())}</span>
      </CardContent>
      <CardContent className="flex gap-3 justify-between items-center">
        <div className="flex flex-row gap-3">
          <MapPin className="text-primary" />

          <span>
            {activity.venue}, {activity.city}
          </span>
        </div>
        <Button onClick={() => setMapOpen(!mapOpen)} className="">
          {mapOpen ? "Hide map" : "Show map"}
        </Button>
      </CardContent>
      {mapOpen && (
        <div className="h-[400px] z-1000 block">
          <Map
            venue={activity.venue}
            position={[activity.latitude, activity.longitude]}
          />
        </div>
      )}
    </Card>
  );
}

export default ActivityDetailsInfo;
