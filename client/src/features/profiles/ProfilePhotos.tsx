import { useProfile } from "@/lib/hooks/useProfile";
import { useParams } from "react-router";

function ProfilePhotos() {
  const { id } = useParams();
  const { photos, loadingPhotos } = useProfile(id);

  if (loadingPhotos) return <h1>Loading photos...</h1>;

  if (!photos || photos.length === 0)
    return <h1>No photos found for this user.</h1>;

  return <div>ProfilePhotos</div>;
}
export default ProfilePhotos;
