import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type Props = {
  activity: Activity;
  cancelSelectActivity: () => void;
};

function ActivityDetail({ activity, cancelSelectActivity }: Props) {
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
        {" "}
        <CardAction>
          <Button>Edit</Button>
          <Button variant="ghost" onClick={cancelSelectActivity}>
            Cancel
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
export default ActivityDetail;
