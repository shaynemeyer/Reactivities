import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfilePhotos from "./ProfilePhotos";
import ProfileAbout from "./ProfileAbout";
import { useState } from "react";
import ProfileFollowings from "./ProfileFollowings";

function ProfileContent() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabContent = [
    { label: "About", content: <ProfileAbout /> },
    { label: "Photos", content: <ProfilePhotos /> },
    { label: "Events", content: <div>Events</div> },
    {
      label: "Followers",
      content: <ProfileFollowings activeTab={selectedTab} />,
    },
    {
      label: "Following",
      content: <ProfileFollowings activeTab={selectedTab} />,
    },
  ];

  return (
    <Card className="mt-4">
      <CardContent>
        <Tabs
          orientation="vertical"
          defaultValue="About"
          className="w-full flex items-start flex-row gap-4"
        >
          <TabsList className="shrink-0 grid grid-cols-1 h-auto gap-1 w-[130px]">
            {tabContent.map((item, idx) => (
              <TabsTrigger
                value={item.label}
                key={item.label}
                className="py-1.5"
                onClick={() => setSelectedTab(idx)}
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="h-full w-full flex items-center justify-center mt-2  font-medium text-muted-foreground">
            {tabContent.map((item) => (
              <TabsContent
                key={item.label}
                value={item.label}
                className="w-full"
              >
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
