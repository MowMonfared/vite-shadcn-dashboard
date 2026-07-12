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
    name: 'shadcn',
    email: 'm@example.com',
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
        <TeamSwitcher teams={data.teams} />
        Test
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
