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
import { formateDateForInput } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2).max(100),
  description: z.string().max(250),
  category: z.string().min(2).max(50),
  date: z.string().min(2),
  city: z.string().min(2).max(75),
  venue: z.string().optional(),
});

type Props = {
  activity?: Activity;
  closeForm: () => void;
};

function ActivityForm({ activity, closeForm }: Props) {
  const { updateActivity } = useActivities();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: activity?.id || "",
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (activity) {
      values.id = activity.id;
      await updateActivity.mutate(values as unknown as Activity);
      closeForm();
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Create activity</CardTitle>
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
                      <SelectContent className="w-full">
                        <SelectGroup>
                          <SelectLabel>Categories</SelectLabel>
                          <SelectItem value="culture">Culture</SelectItem>
                          <SelectItem value="drinks">Drinks</SelectItem>
                          <SelectItem value="film">Film</SelectItem>
                          <SelectItem value="food">Food</SelectItem>
                          <SelectItem value="music">Music</SelectItem>
                          <SelectItem value="travel">Travel</SelectItem>
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
                disabled={updateActivity.isPending}
              >
                Submit
              </Button>
              <Button variant="ghost" onClick={closeForm}>
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
