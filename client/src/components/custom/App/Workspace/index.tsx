import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Models from "./Models";

export interface WorkspaceProps {
  className?: string;
}

export default function Workspace({ className }: WorkspaceProps) {
  return (
    <div className={`p-5 md:p-10 text-white ${className}`}>
      <h1 className="text-5xl font-extrabold">Your Models</h1>
      <Tabs defaultValue="all" className="mt-4 h-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="running">Running</TabsTrigger>
          <TabsTrigger value="deployed">Deployed</TabsTrigger>
        </TabsList>

        <Models value="all" />
        <Models value="running" />
        <Models value="deployed" />
      </Tabs>
    </div>
  );
}
