"use client";

import { Button } from "@/components/ui/button";

import SideBar from "@/components/custom/App/SideBar";
import Workspace from "@/components/custom/App/Workspace";

interface AppProps {
  className?: string;
}

// export const metadata: Metadata = {
//   title: "Forms",
//   description: "Advanced form example using react-hook-form and Zod.",
// };

export default function App({ className }: AppProps) {
  return (
    <section className={`min-h-screen ${className}`}>
      <div className="flex">
        <SideBar className="bg-zinc-900 hidden md:block md:w-96 min-h-screen px-4 py-10" />
        <Workspace className="bg-zinc-800 w-full  min-h-screen" />
      </div>
    </section>
  );
}
