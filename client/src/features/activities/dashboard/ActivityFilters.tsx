import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/lib/hooks/useStore";
import { Calendar1, ListFilter } from "lucide-react";
import { observer } from "mobx-react-lite";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ActivityFilters = observer(function ActivityFilters() {
  const {
    activityStore: { setFilter, setStartDate, filter, startDate },
  } = useStore();

  const handleChangeFilter = (value: string) => {
    setFilter(value);
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl">
      <Card>
        <CardContent>
          <h6 className="flex items-center mb-1 font-bold text-primary">
            <ListFilter className="mr-2" />
            Filters
          </h6>
          <Select
            defaultValue={filter || "all"}
            onValueChange={handleChangeFilter}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All events</SelectItem>
              <SelectItem value="isGoing">I'm going</SelectItem>
              <SelectItem value="isHost">I'm hosting</SelectItem>
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
          <Calendar
            value={startDate}
            onChange={(date) => setStartDate(date as Date)}
          />
        </CardContent>
      </Card>
    </div>
  );
});

export default ActivityFilters;
