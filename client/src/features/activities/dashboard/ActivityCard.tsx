import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatDateForDisplay } from '@/lib/utils';

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
  key?: string;
};

function ActivityCard({ activity, selectActivity }: Props) {
  return (
    <Card className="rounded-md mb-4" key={activity.id}>
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
        <CardDescription>{formatDateForDisplay(activity.date)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{activity.description}</p>
        <p>
          {activity.city} / {activity.venue}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="outline">{activity.category}</Badge>
        <Button size="sm" onClick={() => selectActivity(activity.id)}>
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
export default ActivityCard;
