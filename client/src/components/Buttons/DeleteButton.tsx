import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

function DeleteButton() {
  return (
    <Button variant="ghost">
      <Trash2 size={64} fill="red" className="text-white" />
    </Button>
  );
}

export default DeleteButton;
