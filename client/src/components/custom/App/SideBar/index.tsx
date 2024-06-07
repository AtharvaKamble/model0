import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";

export interface SideBarProps {
  className?: string;
}

export default function SideBar({ className }: SideBarProps) {
  const items = [
    {
      title: "Dashboard",
      href: "/app",
    },
    {
      title: "Create a model",
      href: "/create-model",
    },
    {
      title: "Appearance",
      href: "/examples/forms/appearance",
    },
    {
      title: "Notifications",
      href: "/examples/forms/notifications",
    },
    {
      title: "Model history",
      href: "/examples/forms/display",
    },

    {
      title: "Settings",
      href: "/examples/forms/display",
    },
  ];

  const pathname = usePathname();

  return (
    <div className={`${className}`}>
      <nav
        className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1")}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "default" }),
              pathname === item.href
                ? "bg-zinc-600"
                : "hover:bg-zinc-800 transition hover:scale-[1.02]",
              "justify-start"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
