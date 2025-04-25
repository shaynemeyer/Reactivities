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
import { formateDateForInput, generateUUID } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { categoryOptions } from "./categoryOptions";

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
      date: activity?.date
        ? formateDateForInput(activity?.date)
        : formateDateForInput(new Date().toString()),
      city: activity?.city || "",
      venue: activity?.venue || "",
    },
  });

  async function onSubmit(values: ActivitySchema) {
    if (activity) {
      values.id = activity.id;
      await updateActivity.mutateAsync(values as unknown as Activity);
      navigate(`/activities/${activity.id}`);
    } else {
      createActivity.mutate(values as unknown as Activity, {
        onSuccess: (id) => {
          navigate(`/activities/${id}`);
        },
      });
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
                    <Input placeholder="Date" type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="venue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue</FormLabel>
                  <FormControl>
                    <Input placeholder="Venue" {...field} />
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
              <Button variant="ghost">Cancel</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default ActivityForm;
