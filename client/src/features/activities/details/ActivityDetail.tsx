import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useActivities } from "@/lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";

function ActivityDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <h5>Loading...</h5>;

  if (!activity) return <h5>Activity not found</h5>;

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
          <Button onClick={() => navigate(`/manage/${activity.id}`)}>
            Edit
          </Button>
          <Button variant="ghost" onClick={() => navigate("/activities")}>
            Cancel
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
export default ActivityDetail;
