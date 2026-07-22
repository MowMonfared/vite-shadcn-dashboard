import { useState } from 'react';
import { MoreHorizontalIcon, SearchIcon } from 'lucide-react';

import { AppSidebar } from '@/components/app-sidebar';
import { AddDevice } from '@/components/add-device';
import { SectionCards } from '@/components/section-cards';

import { Button } from '@/components/ui/button';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Field, FieldLabel } from '@/components/ui/field';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';

import { TooltipProvider } from '@/components/ui/tooltip';

import { devices } from './data/devices';

type Device = (typeof devices)[number];

function DeviceDetail({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value || '—'}</p>
    </div>
  );
}

function App() {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [search, setSearch] = useState('');

  function openDeviceDrawer(device: Device) {
    setSelectedDevice(device);
    setDrawerOpen(true);
  }

  function handleDrawerOpenChange(open: boolean) {
    setDrawerOpen(open);

    if (!open) {
      setSelectedDevice(null);
    }
  }

  function clearFilters() {
    setSearch('');
    setSelectedStatus('all');
    setSelectedType('all');
  }

  const hasActiveFilters =
    search.trim() !== '' || selectedStatus !== 'all' || selectedType !== 'all';

  const filteredDevices = devices.filter((device) => {
    const matchesStatus =
      selectedStatus === 'all' || device.status === selectedStatus;

    const matchesType =
      selectedType === 'all' || device.device === selectedType;

    const matchesSearch =
      device.device.toLowerCase().includes(search.toLowerCase()) ||
      device.model.toLowerCase().includes(search.toLowerCase()) ||
      device.assignee.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesType && matchesSearch;
  });

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

            <div className="flex w-full items-end pb-3">
              <div className="flex w-full items-end gap-3">
                <InputGroup className="w-48">
                  <InputGroupInput
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <InputGroupAddon>
                    <SearchIcon />
                  </InputGroupAddon>
                </InputGroup>
                <Field className="w-full max-w-48">
                  <FieldLabel>Status</FieldLabel>

                  <Select
                    value={selectedStatus}
                    onValueChange={setSelectedStatus}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All</SelectItem>
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
                <Field className="w-full max-w-48">
                  <FieldLabel>Device</FieldLabel>

                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="Laptop">Laptop</SelectItem>
                        <SelectItem value="Mobile">Mobile</SelectItem>
                        <SelectItem value="Tablet">Tablet</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                {hasActiveFilters && (
                  <Button variant="default" onClick={clearFilters}>
                    Clear
                  </Button>
                )}
              </div>
              <AddDevice />
            </div>

            {/* Table content */}
            <div className="overflow-hidden rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Device</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Employee</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Return Date</TableHead>
                    <TableHead>Department</TableHead>

                    <TableHead className="sticky right-0 z-20 bg-olive-50 text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filteredDevices.map((filtered) => (
                    <TableRow key={filtered.id}>
                      <TableCell className="font-medium">
                        {filtered.device}
                      </TableCell>

                      <TableCell className="p-0">
                        <button
                          type="button"
                          onClick={() => openDeviceDrawer(filtered)}
                          className="flex w-full items-center px-4 py-3 text-left font-medium underline-offset-4 hover:bg-muted/50 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                        >
                          {filtered.model}
                        </button>
                      </TableCell>

                      <TableCell>{filtered.assignee}</TableCell>
                      <TableCell>{filtered.status}</TableCell>
                      <TableCell>{filtered.dueDate}</TableCell>
                      <TableCell>{filtered.department}</TableCell>

                      <TableCell className="sticky right-0 z-10 bg-background text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8"
                            >
                              <MoreHorizontalIcon />

                              <span className="sr-only">
                                Open actions for {filtered.model}
                              </span>
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onSelect={() => openDeviceDrawer(filtered)}
                            >
                              Edit
                            </DropdownMenuItem>

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
            </div>
          </main>
        </SidebarInset>

        <Drawer
          open={drawerOpen}
          onOpenChange={handleDrawerOpenChange}
          direction="right"
        >
          <DrawerContent className="h-full w-[480px] max-w-[90vw] rounded-none">
            {selectedDevice && (
              <>
                <DrawerHeader className="border-b text-left">
                  <DrawerTitle>{selectedDevice.model}</DrawerTitle>

                  <DrawerDescription>
                    Device assignment and status information.
                  </DrawerDescription>
                </DrawerHeader>

                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <DeviceDetail
                      label="Device"
                      value={selectedDevice.device}
                    />

                    <DeviceDetail label="Model" value={selectedDevice.model} />

                    <DeviceDetail
                      label="Employee"
                      value={selectedDevice.assignee}
                    />

                    <DeviceDetail
                      label="Status"
                      value={selectedDevice.status}
                    />

                    <DeviceDetail
                      label="Return date"
                      value={selectedDevice.dueDate}
                    />

                    <DeviceDetail
                      label="Department"
                      value={selectedDevice.department}
                    />
                  </div>
                </div>

                <DrawerFooter className="border-t">
                  <Button type="button">Edit device</Button>

                  <DrawerClose asChild>
                    <Button type="button" variant="outline">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default App;
