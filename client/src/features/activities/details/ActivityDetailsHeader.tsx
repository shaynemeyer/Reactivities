import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn, formatDateForDisplay } from '@/lib/utils';
import { Link } from 'react-router';

type Props = {
  activity: Activity;
};

function ActivityDetailsHeader({ activity }: Props) {
  const isCancelled = false;
  const isHost = true;
  const isGoing = true;
  const loading = false;

  return (
    <Card className="pt-0 bg-transparent pb-0 relative overflow-hidden mb-2">
      <CardContent className="p-0 mt-0 container">
        {isCancelled && (
          <Badge className="absolute left-5 top-4 z-1000" variant="destructive">
            Cancelled
          </Badge>
        )}
        <img
          className="rounded-xl w-full h-[300px]"
          src={`/images/categoryImages/${activity.category}.jpg`}
          alt={`${activity.category} image`}
        />
        <div className="flex absolute bottom-0 w-full text-white flex-row justify-between content-end box-border p-5">
          {/* Text Section */}
          <div className="flex flex-col bg-black/50 rounded-2xl p-3">
            <h2 className="font-bold">{activity.title}</h2>
            <h5>{formatDateForDisplay(activity.date)}</h5>
            <h5>
              Hosted by{' '}
              <Link
                to={`/profiles/username`}
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                Bob
              </Link>
            </h5>
          </div>
          {/* Buttons aligned to the right */}
          <div className="flex gap-2  absolute bottom-5 right-10">
            {isHost ? (
              <>
                <Button
                  variant={isCancelled ? 'secondary' : 'destructive'}
                  onClick={() => {}}
                >
                  {isCancelled ? 'Re-activate Activity' : 'Cancel Activity'}
                </Button>
                <Link to={`/manage/activityId`}>
                  <Button color="primary" disabled={isCancelled}>
                    Manage Event
                  </Button>
                </Link>
              </>
            ) : (
              <Button
                className={cn()}
                variant={isGoing ? 'default' : 'outline'}
                onClick={() => {}}
                disabled={isCancelled || loading}
              >
                {isGoing ? 'Cancel Attendance' : 'Join Activity'}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ActivityDetailsHeader;
