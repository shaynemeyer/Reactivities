import { Button } from "@/components/ui/button";
import { useProfile } from "@/lib/hooks/useProfile";
import { useState } from "react";
import { useParams } from "react-router";
import ProfileEditForm from "./form/ProfileEditForm";
import { CircleX, Pencil } from "lucide-react";

function ProfileAbout() {
  const { id } = useParams();
  const { profile } = useProfile(id);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <h5 className="text-3xl">About {profile?.displayName}</h5>
        <Button
          onClick={() => setEditMode(!editMode)}
          variant={editMode ? "outline" : "default"}
        >
          {!editMode ? (
            <div className="flex flex-row gap-2 items-center">
              <Pencil />
              Edit profile
            </div>
          ) : (
            <div className="flex flex-row gap-2 items-center">
              <CircleX />
              Cancel
            </div>
          )}
        </Button>
      </div>
      <hr className="my-2" />
      <div className="overflow-auto m-h-[350px]">
        <p className="whitespace-pre-wrap">
          {editMode ? (
            <ProfileEditForm setEditMode={setEditMode} />
          ) : (
            profile?.bio || "No description added yet."
          )}
        </p>
      </div>
    </div>
  );
}

export default ProfileAbout;
