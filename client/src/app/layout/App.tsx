import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  return (
    <div>
      <NavBar />

      <section className="mx-4 mt-2">
        <h1>Reactivities</h1>
        <ul>
          {activities.map((activity) => (
            <li key={activity?.id}>{activity.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
