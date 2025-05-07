import { Star } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  selected: boolean;
};

function StarButton({ selected }: Props) {
  return (
    <div>
      <Button
        variant="ghost"
        className="bg-transparent border-transparent hover:bg-transparent opacity-[0.8] transition-opacity cursor-pointer"
      >
        <Star size={64} fill={selected ? "yellow" : "rgba(0,0,0,0.5"} />
      </Button>
    </div>
  );
}

export default StarButton;
