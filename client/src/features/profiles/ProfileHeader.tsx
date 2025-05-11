import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  profile: Profile;
};

function ProfileHeader({ profile }: Props) {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9 flex flex-row gap-4 items-center">
            <Avatar className="w-[150px] h-[150px]">
              <AvatarImage
                src={profile.imageUrl}
                alt={`${profile.displayName} image`}
              />
              <AvatarFallback>
                <img src="/images/user.png" alt="some placeholder" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-4xl">{profile.displayName}</h4>
              {profile.following && (
                <Badge
                  variant="outline"
                  className="w-full rounded-xl py-1 mt-3"
                >
                  Following
                </Badge>
              )}
            </div>
          </div>
          <div className="col-span-3">
            <div className="items-center p-2">
              <div className="flex justify-around w-[100%]">
                <div className="text-center text-3xl">
                  <h6>Followers</h6>
                  <h3>{profile.followersCount}</h3>
                </div>
                <div className="text-center text-3xl">
                  <h6>Following</h6>
                  <h3>{profile.followingCount}</h3>
                </div>
              </div>
              <hr className="my-2" />
              <Button className="w-full" variant="outline">
                {profile.following ? "Unfollow" : "Follow"}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileHeader;
