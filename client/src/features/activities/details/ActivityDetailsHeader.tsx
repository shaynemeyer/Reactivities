import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

function ActivityDetailsHeader() {
  const isCancelled = false;
  const isHost = true;
  const isGoing = true;
  const loading = false;

  return (
    <Card className="pt-0 bg-transparent pb-0 mb-0">
      <CardContent className="p-0 mt-0">
        <img
          className="rounded-xl w-full"
          src="/images/categoryImages/travel.jpg"
          alt="travel image"
        />
        <div className="flex absolute">
          {/* Text Section */}
          <div className="flex flex-col">
            <h4>Activity title goes here</h4>
            <h5>1 Jan 2025 at 1:40pm</h5>
            <h5>
              Hosted by{" "}
              <Link
                to={`/profiles/username`}
                style={{ color: "white", fontWeight: "bold" }}
              >
                Bob
              </Link>
            </h5>
          </div>
          {/* Buttons aligned to the right */}
          <div>
            {isHost ? (
              <>
                <Button
                  color={isCancelled ? "success" : "error"}
                  onClick={() => {}}
                >
                  {isCancelled ? "Re-activate Activity" : "Cancel Activity"}
                </Button>
                <Link to={`/manage/activityId`}>
                  <Button color="primary" disabled={isCancelled}>
                    Manage Event
                  </Button>
                </Link>
              </>
            ) : (
              <Button
                color={isGoing ? "primary" : "info"}
                onClick={() => {}}
                disabled={isCancelled || loading}
              >
                {isGoing ? "Cancel Attendance" : "Join Activity"}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ActivityDetailsHeader;
