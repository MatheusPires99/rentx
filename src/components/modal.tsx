import * as DialogPrimitive from "@radix-ui/react-dialog";
import cn from "classnames";

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
export const ModalTitle = DialogPrimitive.Title;
export const ModalDescription = DialogPrimitive.Description;
export const ModalClose = DialogPrimitive.Close;

type ModalContentProps = DialogPrimitive.DialogContentProps & {
  withFixedWidth?: boolean;
};

export const ModalContent = ({
  withFixedWidth = false,
  children,
  ...props
}: ModalContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-10 bg-black/60" />
      <DialogPrimitive.Content
        className={cn(
          "max-h-[90vh] z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col",
          {
            "w-[844px]": withFixedWidth,
          },
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};
