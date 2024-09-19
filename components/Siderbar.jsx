"use client";
import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import UserInfo from "./UserInfo";
import Link from "next/link";

const menuList = [
  {
    group: "General",
    items: [
      {
        link: "/",
        text: "Profile",
      },
      {
        link: "/post",
        text: "Post",
      },
      {
        link: "/picture",
        text: "Picture",
      },
    ],
  },
  {
    group: "settings",
    items: [
      {
        link: "/",
        text: "General Settings",
      },
      {
        link: "/",
        text: "Privacy",
      },
      {
        link: "/",
        text: "Logs",
      },
    ],
  },
];

const Siderbar = () => {

  return (
    <div className=" mt-4 w-[24rem] w-min-[24rem] min-h-screen border-r border-2 ">
      <UserInfo />
      <Command>
        <CommandList>
          {menuList.map((menu) => (
            <CommandGroup heading={menu.group}>
              {menu.items.map((option) => (
                <CommandItem>
                    <Link href={`${option.link}`}>
                        {option.text}
                    </Link>
                </CommandItem>
              ))}

              <CommandSeparator />
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  );
};

export default Siderbar;
