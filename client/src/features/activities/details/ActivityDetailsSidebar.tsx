import { Card, CardContent } from '@/components/ui/card';

function ActivityDetailsSidebar() {
  const following = true;
  const isHost = true;
  return (
    <>
      <Card className="mb-2 py-2">
        <CardContent className="py-0">
          <h6>2 people going</h6>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div>
            <div></div>
            <div></div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default ActivityDetailsSidebar;
