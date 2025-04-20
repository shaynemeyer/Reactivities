import { useActivities } from '@/lib/hooks/useActivities';
import { useParams } from 'react-router';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivityDetailsInfo from './ActivityDetailsInfo';
import ActivityDetailsChat from './ActivityDetailsChat';
import ActivityDetailsSidebar from './ActivityDetailsSidebar';

function ActivityDetailPage() {
  const { id } = useParams();

  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <h5>Loading...</h5>;

  if (!activity) return <h5>Activity not found</h5>;

  return (
    <div className="grid grid-flow-col gap-2">
      <div className="col-span-6">
        <ActivityDetailsHeader activity={activity} />
        <ActivityDetailsInfo activity={activity} />
        <ActivityDetailsChat />
      </div>
      <div className="col-span-3">
        <ActivityDetailsSidebar />
      </div>
    </div>
  );
}
export default ActivityDetailPage;
