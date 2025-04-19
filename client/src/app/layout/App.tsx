import { Outlet } from "react-router";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <section className="mx-4 mt-4">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
