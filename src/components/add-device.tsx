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

import { Plus, Save } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function AddDevice() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          <Plus />
          Assign
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Assign Device</DialogTitle>

          <DialogDescription>
            Please assign device to employees you want.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <div className="flex gap-3 items-end">
            <Field className="w-full">
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
            <Field className="w-full">
              <Label htmlFor="name-1">Model</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="e.g. Dell Inspiron 500ks"
              />
            </Field>
          </div>
          <Field>
            <Label htmlFor="username-1">Employee</Label>
            <Input id="username-1" name="username" />
          </Field>
          <Field className="w-full max-w-48 ">
            <FieldLabel>Department</FieldLabel>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="HR">HR</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
        <RadioGroup defaultValue="plus" className="max-w-sm flex w-full">
          <FieldLabel htmlFor="plus-plan">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Plus</FieldTitle>
                <FieldDescription>
                  For individuals and small teams.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="plus" id="plus-plan" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="pro-plan">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Pro</FieldTitle>
                <FieldDescription>For growing businesses.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="pro" id="pro-plan" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="enterprise-plan">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Enterprise</FieldTitle>
                <FieldDescription>
                  For large teams and enterprises.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="enterprise" id="enterprise-plan" />
            </Field>
          </FieldLabel>
        </RadioGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button">
              <Save />
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
