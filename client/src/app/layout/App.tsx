import { Outlet, useLocation } from "react-router";
import NavBar from "./NavBar";
import HomePage from "@/features/home/HomePage";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <section className="mx-4 mt-4">
            <Outlet />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
