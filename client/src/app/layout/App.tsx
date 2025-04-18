import { useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "@/features/activities/dashboard/ActivityDashboard";
import { useActivities } from "@/lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  const { activities, isPending } = useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((x) => x.id === id));
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

  const handleDelete = (id: string) => {
    console.log(`Deleting activity with id: ${id}`);
    // setActivities(activities.filter((x) => x.id !== id));
  };

  return (
    <div>
      <NavBar openForm={handleOpenForm} />

      <section className="mx-4 mt-4">
        {!activities || isPending ? (
          <h5>Loading...</h5>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
            deleteActivity={handleDelete}
          />
        )}
      </section>
    </div>
  );
}

export default App;
