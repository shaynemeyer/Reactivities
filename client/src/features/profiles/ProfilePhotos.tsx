import PhotoUploadWidget from "@/components/Photos/PhotoUploadWidget";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/lib/hooks/useProfile";
import { CirclePlus, CircleX } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";

function ProfilePhotos() {
  const { id } = useParams();
  const { photos, loadingPhotos, isCurrentUser, uploadPhoto } = useProfile(id);
  const [editMode, setEditMode] = useState(false);

  const handlePhotoUpload = (file: Blob) => {
    uploadPhoto.mutate(file, {
      onSuccess: () => {
        setEditMode(false);
      },
    });
  };

  if (loadingPhotos) return <h1>Loading photos...</h1>;

  if (!photos || photos.length === 0)
    return <h3>No photos found for this user.</h3>;

  return (
    <>
      <div>
        {isCurrentUser && (
          <div>
            <Button onClick={() => setEditMode(!editMode)} variant="ghost">
              {editMode ? (
                <div className="flex gap-1 items-center">
                  <CircleX /> Cancel
                </div>
              ) : (
                <div className="flex gap-1 items-center">
                  <CirclePlus />
                  Add photo
                </div>
              )}
            </Button>
          </div>
        )}
        {editMode ? (
          <PhotoUploadWidget
            uploadPhoto={handlePhotoUpload}
            loading={uploadPhoto.isPending}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                className="flex flex-col items-center w-[164px] h-[164px]"
                key={photo.id}
              >
                <img
                  src={photo.url.replace(
                    "/upload/",
                    "/upload/w_164,h_164,f_auto/"
                  )}
                  alt={`Photo ${id}`}
                  className="aspect-square object-cover rounded-lg overflow-hidden w-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default ProfilePhotos;
