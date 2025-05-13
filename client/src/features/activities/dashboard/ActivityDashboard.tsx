import { useActivities } from "@/lib/hooks/useActivities";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";
import { Button } from "@/components/ui/button";

function ActivityDashboard() {
  const { isFetchingNextPage, fetchNextPage, hasNextPage } = useActivities();

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-9">
        <ActivityList />
        <Button
          onClick={() => fetchNextPage()}
          className="my-2 float-right"
          variant="ghost"
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Load more
        </Button>
      </div>
      <div className="col-span-3 sticky top-20 self-start">
        <ActivityFilters />
      </div>
    </div>
  );
}
export default ActivityDashboard;
