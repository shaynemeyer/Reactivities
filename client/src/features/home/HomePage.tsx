import { Button } from "@/components/ui/button";
import { UsersRound } from "lucide-react";
import { Link } from "react-router";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 h-screen text-white bg-gradient-to-r from-blue-800 from-10% via-sky-500 via-30% to-emerald-600 to-90%">
      <div className="flex items-center justify-center text-white gap-3">
        <UsersRound height={110} width={110} />
        <h1>Reactivities</h1>
      </div>
      <h2>Welcome to reactivities</h2>
      <Link to="/activities">
        <Button size="lg">Take me to the activities!</Button>
      </Link>
    </div>
  );
}

export default HomePage;
