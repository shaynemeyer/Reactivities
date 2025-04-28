import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAccount } from "@/lib/hooks/useAccount";
import { loginSchema, LoginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockOpen } from "lucide-react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";

function LoginForm() {
  const { loginUser } = useAccount();
  const navigate = useNavigate();
  const location = useLocation();

  const form = useForm<LoginSchema>({
    mode: "onTouched",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    await loginUser.mutateAsync(data, {
      onSuccess: () => {
        navigate(location.state?.from || "/activities");
      },
    });
  };

  return (
    <div className="flex items-center justify-center mt-60">
      <Card className="w-[400px]">
        <CardContent>
          <div className="justify-center items-center mb-4 flex">
            <LockOpen className="mr-3" />
            <h1>Sign in</h1>
          </div>

          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={loginUser.isPending}
              >
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
