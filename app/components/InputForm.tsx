"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "../components/ui/button";
import Autocomplete from "react-google-autocomplete";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { toast } from "../components/ui/use-toast";

const FormSchema = z.object({
  starting_point: z.string().min(2, {
    message: "Starting point must be at least 2 characters.",
  }),
  destination: z.string().min(2, {
    message: "Destination must be at least 2 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      starting_point: "",
      destination: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="starting_point"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Starting Point</FormLabel>
              <FormControl>
                <Input placeholder="Enter starting point" {...field} />
              </FormControl>
              {/* <FormDescription>This could be address</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Autocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          >
             */}

        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <Input placeholder="Enter destination" {...field} />
              </FormControl>
              {/* <FormDescription>This could be address</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Find routes</Button>
      </form>
    </Form>
  );
}
