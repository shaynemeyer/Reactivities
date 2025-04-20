import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router';

function ActivityDetailsSidebar() {
  const following = true;
  const isHost = true;
  return (
    <>
      <Card className="pt-0">
        <div className="text-center bg-primary p-2 text-white rounded-t-xl">
          2 people going
        </div>

        <CardContent>
          <div className="flex gap-4 justify-between">
            <div className="flex content-center align-middle ">
              <Avatar className="mr-2">
                <AvatarImage src={'/images/user.png'} alt={'user image'} />
              </Avatar>
              <Link to={`/profiles/username`} className="font-bold">
                Bob
              </Link>
            </div>
            <div className="flex flex-col items-end gap-1">
              {isHost && (
                <Badge className="py-1  text-md bg-orange-500 text-white">
                  Host
                </Badge>
              )}
              {following && <p className="text-orange-500">Following</p>}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default ActivityDetailsSidebar;
