import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const MenuList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Profile",
    link: "/",
  },
  {
    name: "Cart",
    link: "/",
  },
];

const MenuBar = () => {
  return (
    <div>
      <Menubar>
        <div className="w-full inset-0 flex justify-center space-x-36 bg-black text-white">
          {MenuList.map((item) => (
            <MenubarMenu>
              <>
                <MenubarTrigger className='text-[19px] h-[3rem] hover:bg-white hover:text-black'>{item.name}</MenubarTrigger>
                {/* <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent> */}
              </>
            </MenubarMenu>
          ))}
        </div>
      </Menubar>
    </div>
  );
};

export default MenuBar;
