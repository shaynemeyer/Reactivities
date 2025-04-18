import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  selectedActivity?: Activity;
};

function ActivityDashboard({
  activities,
  selectActivity,
  cancelSelectActivity,
  selectedActivity,
}: Props) {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </div>
      <div className="col-span-2">
        {selectedActivity && (
          <ActivityDetail
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
          />
        )}
        <ActivityForm />
      </div>
    </div>
  );
}
export default ActivityDashboard;
