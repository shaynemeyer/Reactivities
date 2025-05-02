import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfilePopover from "@/features/profiles/ProfilePopover";
import { formatDateForDisplay } from "@/lib/utils";
import { Clock4, MapPin, User, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router";

type Props = {
  activity: Activity;
  key?: string;
};

function ActivityCard({ activity }: Props) {
  const navigate = useNavigate();

  return (
    <Card className="rounded-md mb-4" key={activity.id}>
      <CardHeader>
        <CardTitle className="p-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-2">
              <Avatar className="h-15 w-15">
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3>{activity.title}</h3>
                <span className="text-xs text-gray-400">
                  Hosted by{" "}
                  <Link to={`/profiles/${activity.hostId}`}>
                    {activity.hostDisplayName}
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mr-2">
              {activity.isHost && (
                <Badge
                  variant="outline"
                  className="p-1.5 text-primary border-primary"
                >
                  You are hosting
                </Badge>
              )}
              {activity.isGoing && (
                <Badge variant="outline" className="bg-amber-300 p-1.5">
                  You are going
                </Badge>
              )}
              {activity.isCancelled && (
                <Badge variant="destructive" className="rounded-xl bg-gray-100">
                  Cancelled
                </Badge>
              )}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <hr />
      <CardContent className="flex gap-3 text-sm">
        <div className="flex gap-1">
          <Clock4 />
          <h5 className="text-gray-500 mb-3">
            {formatDateForDisplay(activity.date?.toString())}
          </h5>
        </div>
        <div className="flex gap-1">
          <MapPin />
          {activity.venue}
        </div>
      </CardContent>
      <CardContent className="bg-gray-100 py-3 flex gap-1">
        {activity.attendees.map((att) => (
          <ProfilePopover profile={att} key={att.id}>
            <Avatar>
              <AvatarImage src={att.imageUrl} alt={att.displayName} />
              <AvatarFallback className="bg-gray-600 text-white">
                <UserRound />
              </AvatarFallback>
            </Avatar>
          </ProfilePopover>
        ))}
      </CardContent>
      <CardContent className="flex justify-between">
        <p>{activity.description}</p>
        <Button
          size="sm"
          onClick={() => navigate(`/activities/${activity.id}`)}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
}
export default ActivityCard;
