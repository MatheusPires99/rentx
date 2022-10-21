import * as TabsPrimitive from "@radix-ui/react-tabs";

export const Tabs = TabsPrimitive.Root;
export const TabsContent = TabsPrimitive.Content;

export const TabsList = ({
  children,
  ...props
}: TabsPrimitive.TabsListProps) => {
  return (
    <TabsPrimitive.List className="border-b border-gray-300 mb-6" {...props}>
      {children}
    </TabsPrimitive.List>
  );
};

export const TabsTrigger = ({
  children,
  ...props
}: TabsPrimitive.TabsTriggerProps) => {
  return (
    <TabsPrimitive.Trigger
      className="font-semibold text-sm uppercase py-4 w-1/2 relative radix-state-active:text-gray-600 radix-state-active:before:absolute radix-state-active:before:bottom-0 radix-state-active:before:inset-x-0 radix-state-active:before:bg-red-400 radix-state-active:before:h-[2px] radix-state-active:before:w-full radix-state-inactive:text-gray-400 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
};
