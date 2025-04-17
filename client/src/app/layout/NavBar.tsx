import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

function NavBar() {
  return (
    <div className="bg-gradient-to-r from-blue-900 from-10% via-sky-500 via-30% to-emerald-600 to-90% text-white h-16 align-middle flex flex-row justify-between items-center px-4 gap-2">
      <div className="flex flex-row gap-6 items-center">
        <Menu className="h-10" />
        <h2 className="text-2xl">Reactivities</h2>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <a href="/activities">Activities</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/about">About</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact">Contact</a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>Login</div>
    </div>
  );
}

export default NavBar;
