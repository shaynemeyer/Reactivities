import { useActivities } from "@/lib/hooks/useActivities";
import ActivityCard from "./ActivityCard";

function ActivityList() {
  const { activities, isPending } = useActivities();

  if (!activities || isPending) <h5>Loading...</h5>;

  return (
    <>
      {activities?.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </>
  );
}
export default ActivityList;
