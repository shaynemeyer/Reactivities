import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ProfileCard from "./ProfileCard";

type Props = {
  profile: Profile;
  children: React.ReactNode;
};

function ProfilePopover({ profile, children }: Props) {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent side="bottom" className="ml-3">
        <ProfileCard profile={profile} />
      </HoverCardContent>
    </HoverCard>
  );
}

export default ProfilePopover;
