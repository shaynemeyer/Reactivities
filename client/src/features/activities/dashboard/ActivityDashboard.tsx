import ActivityList from "./ActivityList";

type Props = {
  activities: Activity[];
};

function ActivityDashboard({ activities }: Props) {
  return (
    <div>
      <ActivityList activities={activities} />
    </div>
  );
}
export default ActivityDashboard;
