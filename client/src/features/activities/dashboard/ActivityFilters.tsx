import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar1, ListFilter } from "lucide-react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function ActivityFilters() {
  return (
    <div className="flex flex-col gap-3 rounded-xl">
      <Card>
        <CardContent>
          <h6 className="flex items-center mb-1 font-bold text-primary">
            <ListFilter className="mr-2" />
            Filters
          </h6>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All events">All events</SelectItem>
              <SelectItem value="I'm going">I'm going</SelectItem>
              <SelectItem value="I'm hosting">I'm hosting</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h6 className="flex items-center mb-2 font-bold text-primary">
            <Calendar1 className="mr-2" />
            Select date
          </h6>
          <Calendar />
        </CardContent>
      </Card>
    </div>
  );
}

export default ActivityFilters;
