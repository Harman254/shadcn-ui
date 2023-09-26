"use client"

import * as React from "react"
import Link from "next/link"
import { DarkModeButton } from "./DarkMode"
import { Airplay } from "lucide-react"

import { cn } from "@/lib/utils"
import { Backpack } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Profile from "./Profile"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <Airplay />
    <NavigationMenu className="m-10 w-full h-full flex items-center justify-center gap-3">
      <NavigationMenuList className="w-full flex justify-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold text-xl  ">Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Backpack className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg   font-medium">
                      GeRichCode Academy
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Training and Mentoring the Future Talents of our World
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Why Join us?">
                Timely Enrollment for Beginners
              </ListItem>
              <ListItem href="/docs/installation" title="Innovation">
                Cost effective and value for your money
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Certified by Google and Microsoft
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold text-xl ">Our Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-slate-700 font-semibold"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="font-bold text-xl">Documentation</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="font-bold  text-xl">Careers </span>
            </NavigationMenuLink>

        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="m-4">
        <DarkModeButton />
      </NavigationMenuItem>
      </NavigationMenuList>

     <Profile />
    </NavigationMenu>
    </nav>
  )
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
            className
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
  )
})
ListItem.displayName = "ListItem"
