import { TabsContent } from "@/components/ui/tabs";
import ModelCard from "./ModelCard";

export interface ModelsProps {
  className?: string;
  value: string;
}

export default function Models({ className, value }: ModelsProps) {
  //depending on value, display all, running or deployed models

  if (value === "all") {
    return (
      <TabsContent
        value={value}
        className="w-full mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
      >
        <ModelCard />
        <ModelCard />
        <ModelCard />
        <ModelCard />
        <ModelCard />
      </TabsContent>
    );
  } else if (value === "running") {
    return (
      <TabsContent value={value} className="w-full bg-slate-500">
        Make changes to your account here. Make changes to your account here.
      </TabsContent>
    );
  } else if (value === "deployed") {
    return (
      <TabsContent value={value} className="w-full bg-slate-500">
        Make changes to your account here. Make changes to your account here.
        Make changes to your account here. Make changes to your account here.
        Make changes to your account here. Make changes to your account here.
      </TabsContent>
    );
  }
}
