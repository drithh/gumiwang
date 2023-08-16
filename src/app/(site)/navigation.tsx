"use client";
import { ModeToggle } from "~/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import React from "react";
import { cn } from "~/lib/utils";

export default function Navigation() {
  return (
    <nav className="mx-auto flex max-w-5xl place-content-between px-4 py-4 ">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-9 w-9 sm:h-12 sm:w-12">
          <Image
            src="/images/logo.png"
            fill
            alt="logo desa gumiwang lor"
          ></Image>
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="text-justify text-base font-bold text-foreground sm:text-lg ">
            Gumiwang Lor
          </h2>
          <p className=" text-justify text-xs text-muted-foreground sm:text-sm ">
            Wonogiri
          </p>
        </div>
      </Link>
      {/*  hamburger menu, shown when the screen is small */}
      <div className="flex gap-2 sm:hidden">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-[11px] w-screen rounded-t-none border-0 bg-background py-4 shadow-2xl ">
            <DropdownMenuGroup className="flex flex-col gap-2">
              <DropdownMenuItem>
                <Link
                  className="w-full text-center font-semibold"
                  href="/profil"
                >
                  Profil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="w-full text-center font-medium"
                  href="/pembangunan-desa"
                >
                  Pembangunan Desa
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="w-full text-center font-medium"
                  href="/dana-desa"
                >
                  Dana Desa
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="w-full text-center font-medium"
                  href="/demografi"
                >
                  Demografi
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/*  when the screen is small, the navigation menu will be hidden */}
      <div
        className=" hidden place-items-center 
      gap-2 sm:flex"
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/profil" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Profil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Publikasi</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-56 p-1 ">
                  <ListItem
                    title={"Pembangunan Desa"}
                    href={"/pembangunan-desa"}
                  ></ListItem>
                  <ListItem title={"Dana Desa"} href={"/dana-desa"}></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/demografi" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Demografi
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
