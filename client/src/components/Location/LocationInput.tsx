import { Input } from '../ui/input';
import { useState } from 'react';
import { LocationIQSuggestion } from '@/lib/types';

function LocationInput() {
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<LocationIQSuggestion[]>([]);

  const locationUrl = `https://api.locationiq.com/v1/autocomplete?key=${
    import.meta.env.VITE_LOCATIONIQ_ACCESS_TOKEN
  }&limit=5&dedupe=1&`;

  return <Input />;
}
export default LocationInput;
