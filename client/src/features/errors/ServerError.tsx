import { Card, CardContent } from "@/components/ui/card";
import { ServerCrash } from "lucide-react";
import { useLocation } from "react-router";

function ServerError() {
  const { state } = useLocation();

  return (
    <Card>
      <CardContent>
        {state?.error ? (
          <>
            <h3 className="pt-2 px-4 text-secondary">
              {state?.error?.message || "There has been an error"}
            </h3>
            <hr />
            <p className="p-4">
              {state?.error?.details || "Internal server error"}
            </p>
          </>
        ) : (
          <div className="flex  items-center gap-2 text-red-500 font-bold">
            <ServerCrash height={40} width={40} className="text-red-500" />
            <h5 className="text-4xl">Server error</h5>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ServerError;
