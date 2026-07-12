import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { MoreHorizontalIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { SectionCards } from '@/components/section-cards';
import { devices } from './data/devices';

function App() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger />
            <h1 className="ml-4 text-xl font-semibold">Departments</h1>
          </header>

          <main className="p-6">
            <SectionCards />
            <div className="pb-3 flex w-full items-end justify-between">
              <Button variant="outline" size="lg">
                Test
              </Button>
              <div className="flex gap-3 items-end">
                <Field className="w-full max-w-48 ">
                  <FieldLabel>Status</FieldLabel>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="">All</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="In Repair">In Repair</SelectItem>
                        <SelectItem value="Retired">Retired</SelectItem>
                        <SelectItem value="Return Overdue">
                          Return Overdue
                        </SelectItem>
                        <SelectItem value="To be Returned soon">
                          To be Returned soon
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field className="w-full max-w-48 ">
                  <FieldLabel>Device</FieldLabel>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="">All</SelectItem>
                        <SelectItem value="LapTop">LapTop</SelectItem>
                        <SelectItem value="Mobile">Mobile</SelectItem>
                        <SelectItem value="Tablet">Tablet</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Button size="lg">
                  <Plus />
                  Add
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Employee</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Return Date</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead className="sticky right-0 bg-olive-50 text-right z-20">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.map((device) => (
                  <TableRow key={device.id}>
                    <TableCell className="font-medium">
                      {device.device}
                    </TableCell>
                    <TableCell>{device.model}</TableCell>
                    <TableCell>{device.assignee}</TableCell>
                    <TableCell>{device.status}</TableCell>
                    <TableCell>{device.dueDate}</TableCell>
                    <TableCell>{device.department}</TableCell>
                    <TableCell className="sticky right-0 bg-white text-right z-10">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8"
                          >
                            <MoreHorizontalIcon />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default App;
