import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SearchX } from "lucide-react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex justify-center mt-80 h-screen">
      <Card className="h-[200px] w-[700px] flex flex-col justify-center items-center py-3">
        <CardContent>
          <div className="flex justify-center items-center">
            <SearchX height={60} width={60} className="text-red-600" />
            <h3 className="text-2xl text-primary">
              Oops - we could not find what you are looking for
            </h3>
          </div>

          <div className="ml-15 mt-2">
            <Link to="/activities">
              <Button>Return to the activities page</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default NotFound;
