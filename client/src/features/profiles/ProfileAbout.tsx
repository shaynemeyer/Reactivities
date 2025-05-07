import { Button } from "@/components/ui/button";
import { useProfile } from "@/lib/hooks/useProfile";
import { useParams } from "react-router";

function ProfileAbout() {
  const { id } = useParams();
  const { profile } = useProfile(id);

  return (
    <div>
      <div className="flex justify-between">
        <h5 className="text-3xl">About {profile?.displayName}</h5>
        <Button>Edit profile</Button>
      </div>
      <hr className="my-2" />
      <div className="overflow-auto m-h-[350px]">
        <p className="whitespace-pre-wrap">
          {profile?.bio || "No description added yet."}
        </p>
      </div>
    </div>
  );
}

export default ProfileAbout;
