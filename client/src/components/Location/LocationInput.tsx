import { Input } from "../ui/input";
import { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import axios from "axios";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  label: string;
} & UseControllerProps<T>;

function LocationInput<T extends FieldValues>(props: Props<T>) {
  const { field } = useController({ ...props });
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<LocationIQSuggestion[]>([]);
  const [inputValue, setInputValue] = useState(field.value || "");

  useEffect(() => {
    if (field.value && typeof field.value === "object") {
      setInputValue(field.value.venue || "");
    } else {
      setInputValue(field.value || "");
    }
  }, [field.value]);

  const locationUrl = `https://api.locationiq.com/v1/autocomplete?key=${
    import.meta.env.VITE_LOCATIONIQ_ACCESS_TOKEN
  }&limit=5&dedupe=1&`;

  const fetchSuggestions = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query || query.length < 3) {
          setSuggestions([]);
          return;
        }

        setLoading(true);

        try {
          const res = await axios.get<LocationIQSuggestion[]>(
            `${locationUrl}q=${query}`
          );
          setSuggestions(res.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }, 500),
    [locationUrl]
  );

  const handleChange = async (value: string) => {
    field.onChange(value);
    await fetchSuggestions(value);
  };

  const handleSelect = (location: LocationIQSuggestion) => {
    const city =
      location.address?.city ||
      location.address?.town ||
      location.address?.village;
    const venue = location.display_name;
    const latitude = location.lat;
    const longitude = location.lon;

    setInputValue(venue);
    field.onChange({ city, venue, latitude, longitude });
    setSuggestions([]);
  };

  return (
    <div>
      <Input
        {...props}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full"
        value={inputValue}
      />
      {loading && <p>Loading...</p>}
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              className="py-1 ml-2 border-b-gray-500"
              key={suggestion.place_id}
              onClick={() => {
                handleSelect(suggestion);
              }}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default LocationInput;
