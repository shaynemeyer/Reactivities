import DeleteButton from "@/components/Buttons/DeleteButton";
import PhotoUploadWidget from "@/components/Photos/PhotoUploadWidget";
import StarButton from "@/components/Photos/StarButton";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/lib/hooks/useProfile";
import { CirclePlus, CircleX } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";

function ProfilePhotos() {
  const { id } = useParams();
  const {
    photos,
    loadingPhotos,
    isCurrentUser,
    uploadPhoto,
    profile,
    setMainPhoto,
    deletePhoto,
  } = useProfile(id);
  const [editMode, setEditMode] = useState(false);

  const handlePhotoUpload = (file: Blob) => {
    uploadPhoto.mutate(file, {
      onSuccess: () => {
        setEditMode(false);
      },
    });
  };

  if (loadingPhotos) return <h1>Loading photos...</h1>;

  if (!photos) return <h3>No photos found for this user.</h3>;

  return (
    <>
      <div>
        <div className="flex justify-between">
          <h5 className="text-2xl">Photos</h5>
          {isCurrentUser && (
            <Button
              title={editMode ? "Cancel" : "Add photo"}
              onClick={() => setEditMode(!editMode)}
              variant={editMode ? "ghost" : "default"}
            >
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
          )}
        </div>

        {editMode ? (
          <PhotoUploadWidget
            uploadPhoto={handlePhotoUpload}
            loading={uploadPhoto.isPending}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                className="relative flex flex-col items-center w-[164px] h-[164px]"
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
                {isCurrentUser && (
                  <div>
                    <div
                      className="absolute start-0 top-0"
                      onClick={() => setMainPhoto.mutate(photo)}
                    >
                      <StarButton selected={photo.url === profile?.imageUrl} />
                    </div>
                    {profile?.imageUrl !== photo.url && (
                      <div
                        className="absolute end-0 top-0"
                        onClick={() => deletePhoto.mutate(photo.id)}
                      >
                        <DeleteButton />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default ProfilePhotos;
