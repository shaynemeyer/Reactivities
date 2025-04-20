import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Info, MapPin } from 'lucide-react';

function ActivityDetailsInfo() {
  return (
    <Card className="mb-2">
      <CardContent className="flex gap-3">
        <Info className="text-primary" />
        <span>Activity description</span>
      </CardContent>
      <CardContent className="flex gap-3">
        <Calendar className="text-primary" />
        <span>1 Jan 2025 at 1:40pm</span>
      </CardContent>
      <CardContent className="flex gap-3">
        <MapPin className="text-primary" />
        <span> Venue, City</span>
      </CardContent>
    </Card>
  );
}

export default ActivityDetailsInfo;
