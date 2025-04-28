import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAccount } from "@/lib/hooks/useAccount";
import { LogOut, Plus, User, UserRoundPen } from "lucide-react";
import { useNavigate } from "react-router";

function UserMenu() {
  const { currentUser, logoutUser } = useAccount();
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-row items-center gap-2 mr-4 bg-transparent">
          <Avatar>
            <AvatarFallback className="text-white bg-green-500">
              <User />
            </AvatarFallback>
          </Avatar>{" "}
          {currentUser?.displayName}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button
            size="sm"
            onClick={() => navigate("/createActivity")}
            variant="link"
            className="hover:no-underline hover: cursor-pointer text-black"
          >
            <Plus /> Create activity
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            size="sm"
            onClick={() => navigate("/profile")}
            variant="link"
            className="hover:no-underline hover: cursor-pointer text-black"
          >
            <UserRoundPen /> My profile
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            size="sm"
            onClick={() => {
              logoutUser.mutate();
              navigate("/");
            }}
            variant="link"
            className="hover:no-underline hover: cursor-pointer text-black"
          >
            <LogOut /> Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
