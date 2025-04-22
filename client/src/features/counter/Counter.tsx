import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useStore } from "@/lib/hooks/useStore";
import { Minus, Plus } from "lucide-react";
import { observer } from "mobx-react-lite";

const Counter = observer(function Counter() {
  const { counterStore } = useStore();
  return (
    <div className="flex flex-row">
      <div className="w-[60%]">
        <h4>{counterStore.title}</h4>
        <h6>The count is: {counterStore.count}</h6>

        <div>
          <Button
            variant="destructive"
            onClick={() => counterStore.decrement()}
          >
            <Minus className="mr-2" />
            decrement
          </Button>
          <Button variant="default" onClick={() => counterStore.increment()}>
            <Plus className="mr-2" />
            increment
          </Button>
          <Button variant="secondary" onClick={() => counterStore.increment(5)}>
            <Plus className="mr-2" />
            increment by 5
          </Button>
        </div>
      </div>
      <div className="w-[40%] p-4">
        <Card>
          <CardContent>
            <h5 className="font-bold text-2xl mb-2">
              Counter events ({counterStore.eventCount})
            </h5>
            <ul>
              {counterStore.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default Counter;
