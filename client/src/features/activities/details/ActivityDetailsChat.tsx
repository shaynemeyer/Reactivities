import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useComments } from "@/lib/hooks/useComments";
import { timeAgo } from "@/lib/utils";
import { observer } from "mobx-react-lite";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useParams } from "react-router";

const ActivityDetailsChat = observer(function ActivityDetailsChat() {
  const { id } = useParams();
  const { commentStore } = useComments(id);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const addComment = async (data: FieldValues) => {
    try {
      await commentStore.hubConnection?.invoke("SendComment", {
        activityId: id,
        body: data.body,
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(addComment)();
    }
  };

  return (
    <>
      <Card className="py-0 rounded-t-xl pb-2">
        <div className="text-center bg-primary p-2 text-white rounded-t-xl">
          <h3>Chat about this event</h3>
        </div>
        <CardContent>
          <div>
            <form>
              <Textarea
                {...register("body", { required: true })}
                className="w-full outline"
                placeholder="Enter your comment (Enter to submit, SHIFT + Enter for new line)"
                rows={2}
                onKeyDown={handleKeyPress}
                disabled={isSubmitting}
              />
            </form>
          </div>
          <div className="h-[400px] overflow-auto">
            {commentStore.comments.map((comment) => (
              <div className="flex my-2" key={comment.id}>
                <Avatar className="mr-2">
                  <AvatarImage src={comment.imageUrl} />
                  <AvatarFallback>
                    <img src="/images/user.png" alt="user image" />
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <div className="flex text-center gap-3">
                    <Link
                      className="font-bold decoration-none"
                      to={`/profiles/${comment.userId}`}
                    >
                      {comment.displayName}
                    </Link>
                    <p className="secondary">{timeAgo(comment.createdAt)}</p>
                  </div>

                  <p className="whitespace-pre-wrap">{comment.body}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
});

export default ActivityDetailsChat;
