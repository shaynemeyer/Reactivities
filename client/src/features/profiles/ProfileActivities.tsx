import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProfile } from "@/lib/hooks/useProfile";
import { format } from "date-fns";
import { useEffect } from "react";
import { Link, useParams } from "react-router";

function ProfileActivities() {
  const { id } = useParams();
  const { userActivities, setFilter, loadingUserActivities, filter } =
    useProfile(id);

  useEffect(() => {
    setFilter("future");
  }, [setFilter]);

  const handleChange = async (value: string) => {
    setFilter(value);
  };

  return (
    <Tabs defaultValue="future" onValueChange={handleChange}>
      <TabsList>
        <TabsTrigger value="future">Future Events</TabsTrigger>
        <TabsTrigger value="past">Past Events</TabsTrigger>
        <TabsTrigger value="hosting">Hosting</TabsTrigger>
      </TabsList>
      {(!userActivities || userActivities.length === 0) &&
      !loadingUserActivities ? (
        <h2>No activities to show</h2>
      ) : null}
      {userActivities &&
        userActivities.map((activity: Activity) => (
          <TabsContent value={filter || "future"}>
            <Link to={`/activities/${activity.id}`} className="no-underline">
              <Card>
                <img
                  src={`/images/categoryImages/${activity.category}.jpg`}
                  alt={activity.title}
                  className="object-cover"
                />
                <CardContent>
                  <h6 className="text-center mb-1">{activity.title}</h6>
                  <p className="text-center flex flex-col">
                    <span>{format(activity.date, "do LLL yyyy")}</span>
                    <span>{format(activity.date, "h:mm a")}</span>
                  </p>
                </CardContent>
              </Card>
            </Link>
          </TabsContent>
        ))}
      {/* <TabsContent value="future">Future Events go here...</TabsContent>
      <TabsContent value="past">Past events go here...</TabsContent>
      <TabsContent value="hosting">Hosting events go here...</TabsContent> */}
    </Tabs>
  );
}

export default ProfileActivities;
