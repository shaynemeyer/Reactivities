import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";

function ActivityDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-9">
        <ActivityList />
      </div>
      <div className="col-span-3 sticky top-20 self-start">
        <ActivityFilters />
      </div>
    </div>
  );
}
export default ActivityDashboard;
