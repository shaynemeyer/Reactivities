import { useProfile } from "@/lib/hooks/useProfile";
import { useParams } from "react-router";
import ProfileCard from "./ProfileCard";

type Props = {
  activeTab: number;
};
function ProfileFollowings({ activeTab }: Props) {
  const { id } = useParams();
  const predicate = activeTab === 3 ? "followers" : "followings";
  const { profile, followings, loadingFollowings } = useProfile(id, predicate);

  return (
    <div>
      <div className="flex">
        <h5>
          {activeTab === 3
            ? `People following ${profile?.displayName}`
            : `People ${profile?.displayName} is following`}
        </h5>
        <hr className="my-2" />
        {loadingFollowings ? (
          <p>Loading...</p>
        ) : (
          <div className="flex mt-3 gap-3">
            {followings?.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileFollowings;
