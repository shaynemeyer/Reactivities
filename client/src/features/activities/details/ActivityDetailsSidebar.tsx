import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { Link } from "react-router";

type Props = {
  activity: Activity;
};

function ActivityDetailsSidebar({ activity }: Props) {
  const following = true;

  return (
    <>
      <Card className="pt-0">
        <div className="text-center bg-primary p-2 text-white rounded-t-xl">
          {activity.attendees.length} people going
        </div>

        <CardContent>
          {activity.attendees.map((attendee) => (
            <div className="flex gap-4 justify-between" key={attendee.id}>
              <div className="flex content-center align-middle items-center">
                <Avatar className="mr-2 w-[50px] h-[50px] rounded-md my-1">
                  <AvatarImage
                    src={attendee.imageUrl}
                    alt={attendee.displayName}
                    className="w-[100px] rounded-2xl"
                  />
                  <AvatarFallback>
                    <img
                      src="/images/user.png"
                      alt="user default"
                      className="w-[100px] rounded"
                    />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p>
                    <Link to={`/profiles/${attendee.id}`} className="font-bold">
                      {attendee.displayName}
                    </Link>
                  </p>
                  {following && <p className="text-orange-500">Following</p>}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                {activity.hostId === attendee.id && (
                  <Badge className="py-1  text-md bg-orange-500 text-white">
                    Host
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}

export default ActivityDetailsSidebar;
