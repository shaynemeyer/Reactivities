import { Card, CardContent } from '@/components/ui/card';
import { Activity } from '@/lib/types';
import { formatDateForDisplay } from '@/lib/utils';
import { Calendar, Info, MapPin } from 'lucide-react';

type Props = {
  activity: Activity;
};

function ActivityDetailsInfo({ activity }: Props) {
  return (
    <Card className="mb-2">
      <CardContent className="flex gap-3">
        <Info className="text-primary" />
        <span>{activity.description}</span>
      </CardContent>
      <CardContent className="flex gap-3">
        <Calendar className="text-primary" />
        <span>{formatDateForDisplay(activity.date.toString())}</span>
      </CardContent>
      <CardContent className="flex gap-3">
        <MapPin className="text-primary" />
        <span>
          {activity.venue}, {activity.city}
        </span>
      </CardContent>
    </Card>
  );
}

export default ActivityDetailsInfo;
