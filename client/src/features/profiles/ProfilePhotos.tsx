import { useProfile } from "@/lib/hooks/useProfile";
import { useParams } from "react-router";

function ProfilePhotos() {
  const { id } = useParams();
  const { photos, loadingPhotos } = useProfile(id);

  if (loadingPhotos) return <h1>Loading photos...</h1>;

  if (!photos || photos.length === 0)
    return <h1>No photos found for this user.</h1>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <div
          className="flex flex-col items-center w-[164px] h-[164px]"
          key={photo.id}
        >
          <img
            src={photo.url.replace("/upload/", "/upload/w_164,h_164,f_auto/")}
            alt={`Photo ${id}`}
            className="aspect-square object-cover rounded-lg overflow-hidden w-full"
          />
        </div>
      ))}
    </div>
  );
}
export default ProfilePhotos;
