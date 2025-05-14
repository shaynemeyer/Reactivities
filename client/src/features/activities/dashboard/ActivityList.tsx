import { useActivities } from "@/lib/hooks/useActivities";
import ActivityCard from "./ActivityCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const ActivityList = observer(function ActivityList() {
  const { activitiesGroup, isLoading, hasNextPage, fetchNextPage } =
    useActivities();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  if (isLoading) <h5>Loading...</h5>;

  if (!activitiesGroup) return <h4>No activities found.</h4>;

  return (
    <div>
      {activitiesGroup.pages.map((activities, index) => (
        <div
          key={index}
          ref={index === activitiesGroup.pages.length - 1 ? ref : null}
          className="flex flex-col gap-3"
        >
          {activities?.items.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      ))}
    </div>
  );
});

export default ActivityList;
