import { Input } from "../ui/input";

function LocationInput() {
  const locationUrl = `https://api.locationiq.com/v1/autocomplete?key=${
    import.meta.env.VITE_LOCATIONIQ_ACCESS_TOKEN
  }&limit=5&dedupe=1&`;
  console.log(locationUrl);
  return <Input />;
}
export default LocationInput;
