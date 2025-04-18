import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useActivities } from "@/lib/hooks/useActivities";

type Props = {
  selectedActivity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
};

function ActivityDetail({
  selectedActivity,
  cancelSelectActivity,
  openForm,
}: Props) {
  const { activities } = useActivities();
  const activity = activities?.find((x) => x.id === selectedActivity.id);

  if (!activity) return <h5>Loading...</h5>;

  return (
    <Card className="rounded-md">
      <CardHeader>
        <img
          src={`/images/categoryImages/${activity.category}.jpg`}
          alt="Category"
        />
      </CardHeader>
      <CardContent>
        <h5>{activity.title}</h5>
        <h6>{activity.date}</h6>
        <p>{activity.description}</p>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button onClick={() => openForm(activity.id)}>Edit</Button>
          <Button variant="ghost" onClick={cancelSelectActivity}>
            Cancel
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
export default ActivityDetail;
