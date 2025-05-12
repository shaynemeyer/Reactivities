import { useActivities } from "@/lib/hooks/useActivities";
import ActivityCard from "./ActivityCard";
import { Fragment } from "react/jsx-runtime";

function ActivityList() {
  const { activitiesGroup, isLoading } = useActivities();

  if (isLoading) <h5>Loading...</h5>;

  if (!activitiesGroup) return <h4>No activities found.</h4>;

  return (
    <div className="flex flex-col gap-3">
      {activitiesGroup.pages.map((activities, index) => (
        <Fragment key={index}>
          {activities?.items.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
export default ActivityList;
