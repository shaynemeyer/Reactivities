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

type Props = {
  activity: Activity;
  key?: string;
};

function ActivityCard({ activity }: Props) {
  return (
    <Card className="rounded-md mb-4" key={activity.id}>
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
        <CardDescription>{activity.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{activity.description}</p>
        <p>
          {activity.city} / {activity.venue}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="outline">{activity.category}</Badge>
        <Button size="sm">View</Button>
      </CardFooter>
    </Card>
  );
}
export default ActivityCard;
