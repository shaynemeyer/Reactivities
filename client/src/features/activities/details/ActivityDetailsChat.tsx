import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router';

function ActivityDetailsChat() {
  return (
    <>
      <Card>
        <div className="text-center primary p-2">
          <h3>Chat about this event</h3>
        </div>
        <CardContent>
          <div>
            <form>
              <Textarea
                className="w-full outline"
                placeholder="Enter your comment (Enter to submit, SHIFT + Enter for new line)"
                rows={2}
              />
            </form>
          </div>
          <div>
            <div className="flex my-2">
              <Avatar className="mr-2">
                <AvatarImage src="/images/user.png" />
                <AvatarFallback>FH</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <div className="flex text-center gap-3">
                  <Link
                    className="font-bold decoration-none"
                    to={`/profiles/username`}
                  >
                    Bob
                  </Link>
                  <p className="secondary">2 hours ago</p>
                </div>

                <p className="whitespace-pre-wrap">Comment goes here</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default ActivityDetailsChat;
