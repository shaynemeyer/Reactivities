import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useActivities } from "@/lib/hooks/useActivities";
import { formatDateForDisplay } from "@/lib/utils";
import { useNavigate } from "react-router";

type Props = {
  activity: Activity;
  key?: string;
};

function ActivityCard({ activity }: Props) {
  const navigate = useNavigate();
  const { deleteActivity } = useActivities();

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
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => navigate(`/activities/${activity.id}`)}
          >
            View
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => deleteActivity.mutate(activity.id)}
            disabled={deleteActivity.isPending}
          >
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
export default ActivityCard;
