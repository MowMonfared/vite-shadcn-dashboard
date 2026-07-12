'use client';

import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  GalleryVerticalEndIcon,
  AudioLinesIcon,
  TerminalIcon,
  Building2,
  BotIcon,
  BookOpenIcon,
  Settings2Icon,
  Users,
  Package,
  MapIcon,
} from 'lucide-react';

// This is sample data.
const data = {
  user: {
    name: 'Momo',
    email: 'monfared.m@assetgrid.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: <GalleryVerticalEndIcon />,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: <AudioLinesIcon />,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: <TerminalIcon />,
      plan: 'Free',
    },
  ],
  projects: [
    {
      name: 'Employees',
      url: '#',
      icon: <Users />,
    },
    {
      name: 'Inventory',
      url: '#',
      icon: <Package />,
    },
  ],
  navMain: [
    {
      title: 'Departments',
      url: '#',
      icon: <Building2 />,
      isActive: true,
      items: [
        {
          title: 'All Departments',
          url: '#',
        },
        {
          title: 'Engineering',
          url: '#',
        },
        {
          title: 'Design',
          url: '#',
        },
        {
          title: 'Finance',
          url: '#',
        },
        {
          title: 'HR',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <img src="/logo.svg" alt="IT Portal" className="size-32 h-8" />
        <div className="flex items-center pl-8 text-sm text-gray-500">
          Every Asset. One Grid.
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
