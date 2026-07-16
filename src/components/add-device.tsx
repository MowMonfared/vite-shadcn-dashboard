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

        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>

            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>

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
