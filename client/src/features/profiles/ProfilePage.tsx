import { useParams } from "react-router";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";
import { useProfile } from "@/lib/hooks/useProfile";

function ProfilePage() {
  const { id } = useParams();
  const { profile, loadingProfile } = useProfile(id);

  if (loadingProfile) return <h1>Loading profile...</h1>;

  if (!profile) return <h1>Profile not found</h1>;

  return (
    <div>
      <div>
        <ProfileHeader profile={profile} />
        <ProfileContent />
      </div>
    </div>
  );
}
export default ProfilePage;
