import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Users } from "lucide-react";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <div className="bg-gradient-to-r from-blue-900 from-10% via-sky-500 via-30% to-emerald-600 to-90% text-white h-16 align-middle flex flex-row justify-between items-center px-4 gap-2">
      <div>
        <NavLink to="/" className="flex flex-row gap-4 items-center">
          <Users className="h-10" />
          <h2 className="text-2xl">Reactivities</h2>
        </NavLink>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <NavLink to="/activities" className="navLink">
                Activities
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/createActivity" className="navLink">
                Create activity
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>User Menu</div>
    </div>
  );
}

export default NavBar;
