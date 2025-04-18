import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "@/features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));

    return () => {};
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) {
      handleSelectActivity(id);
    } else {
      handleCancelSelectActivity();
    }
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(
        activities.map((x) => (x.id === activity.id ? activity : x))
      );
    } else {
      const newActivity = {
        ...activity,
        id: activities.length.toString(),
      };
      setSelectedActivity(newActivity);

      setActivities([...activities, newActivity]);
    }

    setEditMode(false);
  };

  return (
    <div className="bg-gray-100">
      <NavBar openForm={handleOpenForm} />

      <section className="mx-4 mt-2">
        <h1>Reactivities</h1>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
        />
      </section>
    </div>
  );
}

export default App;
