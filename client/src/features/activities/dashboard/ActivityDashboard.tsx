import ActivityList from "./ActivityList";

function ActivityDashboard() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <ActivityList />
      </div>
      <div className="col-span-2">Activity filters go here</div>
    </div>
  );
}
export default ActivityDashboard;
