import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Plus, Save } from 'lucide-react';

const statuses = [
  {
    value: 'active',
    title: 'Active',
    description: 'Portable computer',
  },
  {
    value: 'in-repair',
    title: 'In Repair',
    description: 'Company phone',
  },
  {
    value: 'overdue',
    title: 'Return Overdue',
    description: 'Portable tablet',
  },
  {
    value: 'overdue',
    title: 'To be Returned',
    description: 'Portable tablet',
  },
  {
    value: 'overdue',
    title: 'Retired',
    description: 'Portable tablet',
  },
];

export function AddDevice() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          <Plus />
          Assign
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Assign Device</DialogTitle>

          <DialogDescription>
            Select a device and assign it to an employee.
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          {/* Device and Model*/}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="department">Device</FieldLabel>

              <Select defaultValue="engineering">
                <SelectTrigger id="department" className="w-full">
                  <SelectValue placeholder="Select a department" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="laptop">Laptop</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="device-model">Model</FieldLabel>

              <Input
                id="device-model"
                name="deviceModel"
                placeholder="e.g. Dell Inspiron 5000"
              />
            </Field>
          </div>

          {/* Employee and Department */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="device-model">Employee</FieldLabel>

              <Input
                id="device-model"
                name="deviceModel"
                placeholder="e.g. Dell Inspiron 5000"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="department">Department</FieldLabel>

              <Select defaultValue="engineering">
                <SelectTrigger id="department" className="w-full">
                  <SelectValue placeholder="Select a department" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="engineering">Engineering</SelectItem>

                    <SelectItem value="design">Design</SelectItem>

                    <SelectItem value="finance">Finance</SelectItem>

                    <SelectItem value="hr">HR</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </div>
          {/* Device type */}
          <Field>
            <FieldLabel>Status</FieldLabel>

            <RadioGroup defaultValue="laptop" className="flex w-full gap-3">
              {statuses.map((status) => {
                const radioId = `device-${status.value}`;

                return (
                  <FieldLabel
                    key={status.value}
                    htmlFor={radioId}
                    className="w-full cursor-pointer"
                  >
                    <Field
                      orientation="horizontal"
                      className="
                        w-full cursor-pointer rounded-lg border
                        px-4 py-4 transition-colors
                        hover:bg-muted/50
                        has-data-[state=checked]:border-foreground
                        has-data-[state=checked]:bg-muted
                      "
                    >
                      <FieldContent className="min-w-0">
                        <FieldTitle className="text-base">
                          {status.title}
                        </FieldTitle>

                        <FieldDescription>
                          {status.description}
                        </FieldDescription>
                      </FieldContent>

                      <RadioGroupItem
                        id={radioId}
                        value={status.value}
                        className="ml-auto shrink-0"
                      />
                    </Field>
                  </FieldLabel>
                );
              })}
            </RadioGroup>
          </Field>
        </FieldGroup>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>

          <Button type="button">
            <Save />
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
