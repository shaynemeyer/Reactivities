import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfilePhotos from "./ProfilePhotos";

function ProfileContent() {
  const tabContent = [
    { label: "About", content: <div>About</div> },
    { label: "Photos", content: <ProfilePhotos /> },
    { label: "Events", content: <div>Events</div> },
    { label: "Followers", content: <div>Followers</div> },
    { label: "Following", content: <div>Following</div> },
  ];

  return (
    <Card className="mt-4">
      <CardContent>
        <Tabs
          orientation="vertical"
          defaultValue="About"
          className="max-w-md w-full flex items-start flex-row gap-4 justify-center"
        >
          <TabsList className="shrink-0 grid grid-cols-1 h-auto gap-1 w-[130px]">
            {tabContent.map((item) => (
              <TabsTrigger
                value={item.label}
                key={item.label}
                className="py-1.5"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="h-full w-full flex items-center justify-center max-w-xs mt-2  font-medium text-muted-foreground">
            {tabContent.map((item) => (
              <TabsContent key={item.label} value={item.label}>
                {item.content}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default ProfileContent;
