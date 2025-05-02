import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import { Link } from "react-router";

type Props = {
  profile: Profile;
};

function ProfileCard({ profile }: Props) {
  const following = false;

  return (
    <div className="m-w-[200px] mt-0 p-0 items-center justify-center">
      <Link to={`/profiles/${profile.id}`} className="no-underline">
        <div className="max-w-55 items-center">
          <img
            src={profile.imageUrl || "/images/user.png"}
            alt={profile.displayName}
          />

          <div className="flex items-center gap-1 text-black my-2">
            <h5>{profile.displayName}</h5>
            {following && (
              <Badge variant="outline" color="secodary">
                Following
              </Badge>
            )}
          </div>

          <hr className="mb-2" />
          <div className="flex items-center justify-start text-black">
            <User />
            <span className="ml-1">20 followers</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProfileCard;
