import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActivities } from "@/lib/hooks/useActivities";
import { activitySchema, ActivitySchema } from "@/lib/schemas/activitySchema";
import { generateUUID } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { categoryOptions } from "./categoryOptions";
import { DateTimePicker } from "@/components/DateTimePicker/DateTimePicker";
import { Activity } from "@/lib/types";
import { router } from "@/app/router/Routes";
import LocationInput from "@/components/Location/LocationInput";

function ActivityForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateActivity, createActivity, activity, isLoadingActivity } =
    useActivities(id);

  const form = useForm<ActivitySchema>({
    mode: "onTouched",
    resolver: zodResolver(activitySchema),
    defaultValues: {
      id: activity?.id || generateUUID(),
      title: activity?.title || "",
      description: activity?.description || "",
      category: activity?.category || "",
      date: activity?.date ? new Date(activity?.date) : new Date(),
      location: {
        venue: activity?.venue || "",
        city: activity?.city || "",
        longitude: activity?.longitude || -74.013029,
        latitude: activity?.latitude || 40.710937,
      },
    },
  });

  async function onSubmit(values: ActivitySchema) {
    const { location, ...rest } = values;
    const flattenedData = { ...rest, ...location };

    try {
      if (activity) {
        flattenedData.id = activity.id;
        await updateActivity.mutateAsync(flattenedData as unknown as Activity, {
          onSuccess: () => navigate(`/activities/${activity.id}`),
        });
      } else {
        createActivity.mutate(flattenedData as unknown as Activity, {
          onSuccess: (id) => navigate(`/activities/${id}`),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoadingActivity) return <h5>Loading activity...</h5>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{`${
          id ? "Edit" : "Create"
        } activity`}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Input type="hidden" name="id" />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Description"></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="max-w-fit">
                          <SelectLabel>Categories</SelectLabel>
                          {categoryOptions.map((category) => (
                            <SelectItem
                              key={category.value}
                              value={category.value}
                            >
                              {category.text}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <DateTimePicker
                      granularity="minute"
                      hourCycle={12}
                      placeholder="Date"
                      value={field.value!}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <LocationInput {...field} label="Enter a location" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end w-full">
              <Button
                type="submit"
                size="sm"
                disabled={updateActivity.isPending || createActivity.isPending}
              >
                Submit
              </Button>
              <Button
                variant="ghost"
                onClick={() => router.navigate("/activities")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default ActivityForm;
