import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useAccount } from "@/lib/hooks/useAccount";
import { useStore } from "@/lib/hooks/useStore";
import { LoaderPinwheel, Users } from "lucide-react";
import { Observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router";
import UserMenu from "./UserMenu";

function NavBar() {
  const { uiStore } = useStore();
  const { currentUser } = useAccount();

  return (
    <div className="fixed w-screen z-50">
      <div className="bg-gradient-to-r from-blue-700 from-10% via-sky-500 via-30% to-emerald-600 to-90% text-white h-16 align-middle flex flex-row justify-between items-center px-4 gap-2">
        <div className="flex flex-row items-center gap-3">
          <NavLink to="/" className="flex flex-row gap-4 items-center">
            <Users className="h-10" />
            <h2 className="text-2xl">Reactivities</h2>
          </NavLink>
          <Observer>
            {() =>
              uiStore.isLoading ? (
                <LoaderPinwheel className="mr-2 h-8 w-8 animate-spin" />
              ) : null
            }
          </Observer>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavLink to="/activities" className="navLink">
                  Activities
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          {currentUser ? (
            <UserMenu />
          ) : (
            <>
              <Link to="/login">
                <Button variant="link" className="text-secondary text-xl">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="link" className="text-secondary text-xl">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
