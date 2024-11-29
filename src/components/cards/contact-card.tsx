import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Home, Inbox } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  }
]

interface ContactCardProps {
  address: string
  schedule:string
  phone:string

}

function ContactCard({ address, schedule, phone  }: ContactCardProps) {
  return (
    <Card className=" w-[316px] border-none ">
      <CardContent className="h-[174px] flex flex-col rounded-lg p-[20px]">
      {items.map((item) => (
                  
                    <a key={item.title} href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                 
              ))}
      </CardContent>
    </Card>
  );
}

export { ContactCard };
