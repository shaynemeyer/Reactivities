import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "@/features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  return (
    <div className="bg-gray-100">
      <NavBar />

      <section className="mx-4 mt-2">
        <h1>Reactivities</h1>
        <ActivityDashboard activities={activities} />
      </section>
    </div>
  );
}

export default App;
