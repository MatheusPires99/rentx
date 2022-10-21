import { IconType } from "react-icons";

type CarAccessoryProps = {
  value: string;
  icon: IconType;
};

export const CarAccessory = ({ value, icon: Icon }: CarAccessoryProps) => {
  return (
    <div className="h-16 flex items-center gap-0.5">
      <div className="h-full w-16 bg-gray-200 px-4 flex items-center justify-center text-gray-600">
        <Icon className="w-8 h-8" />
      </div>
      <div className="h-full bg-gray-200 px-4 flex-1 flex items-center">
        {value}
      </div>
    </div>
  );
};
