
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const navList = [
    {
       item: 'Home',
       link: '/' 
    },
    {
        item: 'Profile',
        link:'/'
    },
];

const Navrbar = () => {

  return (
    <div className="flex justify-evenly">
        
            {navList.map((ni) => (
      <NavigationMenu>
        <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger
                >{ni.item}</NavigationMenuTrigger>
                {/* <NavigationMenuContent> */}
              <NavigationMenuLink>{ni.link}</NavigationMenuLink>
            {/* </NavigationMenuContent> */}

          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
            ))}

    </div>
  );
};

export default Navrbar;
