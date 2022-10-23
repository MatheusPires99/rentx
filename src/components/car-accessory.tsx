import { IconType } from "react-icons";

type CarAccessoryProps = {
  value: string;
  icon: IconType;
};

export const CarAccessory = ({ value, icon: Icon }: CarAccessoryProps) => {
  return (
    <div className="h-[92px] py-4 lg:h-16 flex flex-col lg:flex-row items-center lg:gap-4 bg-gray-200 border-b border-gray-200">
      <div className="lg:w-16 flex items-center justify-center text-gray-600">
        <Icon className="w-8 h-8" />
      </div>
      <div className="flex-1 flex items-center text-sm lg:text-base">
        {value}
      </div>
    </div>
  );
};
