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
    value: 'Active',
    title: 'Active',
  },
  {
    value: 'In Repair',
    title: 'In Repair',
  },
  {
    value: 'Return Overdue',
    title: 'Return Overdue',
  },
  {
    value: 'To be Returned',
    title: 'To be Returned',
  },
  {
    value: 'Retired',
    title: 'Retired',
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

          {/* Status type */}
          {/* Status */}
          <Field>
            <FieldLabel>Status</FieldLabel>
            <RadioGroup
              defaultValue="Active"
              className="grid w-full grid-cols-[repeat(auto-fit,minmax(130px,1fr))] items-stretch gap-3"
            >
              {statuses.map((status) => {
                const radioId = `status-${status.value}`;

                return (
                  <FieldLabel
                    key={status.value}
                    htmlFor={radioId}
                    className="h-full w-full cursor-pointer"
                  >
                    <Field
                      orientation="horizontal"
                      className="
                        h-full min-h-24 w-full cursor-pointer
                        items-start rounded-lg border px-4 py-4
                        transition-colors hover:bg-muted/50
                        has-data-[state=checked]:border-foreground
                        has-data-[state=checked]:bg-muted
                      "
                    >
                      <FieldContent className="min-w-0">
                        <FieldTitle className="text-base leading-6">
                          {status.title}
                        </FieldTitle>
                      </FieldContent>

                      <RadioGroupItem
                        id={radioId}
                        value={status.value}
                        className="
                          ml-auto mt-0.5 shrink-0
                          data-[state=checked]:border-foreground
                          data-[state=checked]:text-foreground
                          [&_svg]:size-3
                          [&_svg]:fill-current
                        "
                      />
                    </Field>
                  </FieldLabel>
                );
              })}
            </RadioGroup>
          </Field>

          {/* Employee and Department */}
          <Field>
            <FieldLabel htmlFor="device-model">Employee</FieldLabel>

            <Input id="device-model" name="deviceModel" />
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
