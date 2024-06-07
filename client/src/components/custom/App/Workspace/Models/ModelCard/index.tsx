import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface ModelCardProps {
  className?: string;
}

export default function ModelCard({ className }: ModelCardProps) {
  return (
    <Card className="border-none rounded-md transition hover:scale-[1.01]">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-lg my-auto">
          <p>Model name</p>
        </CardTitle>
        <Badge
          variant="outline"
          className="text-amber-600 border border-amber-600"
        >
          Training
        </Badge>
      </CardHeader>
      <CardContent className="min-h-40">
        <p className="underline underline-offset-4">Parameters</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={"link"} className="">
          Settings
        </Button>

        {/* <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">
              <Badge
                variant="outline"
                className="text-amber-600 border border-amber-600"
              >
                Training
              </Badge>
            </SelectItem>
            <SelectItem value="dark">
              <Badge
                variant="outline"
                className="text-amber-600 border border-amber-600"
              >
                Deploy
              </Badge>
            </SelectItem>
            <SelectItem value="system">
              <Badge
                variant="outline"
                className="text-amber-600 border border-amber-600"
              >
                Training
              </Badge>
            </SelectItem>
          </SelectContent>
        </Select> */}

        <Button>Fine tune</Button>

        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
