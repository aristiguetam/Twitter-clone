import React, { SVGProps } from "react";
interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}
const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div className="flex items-center  max-w-fit cursor-pointer  space-x-2 px-4 py-3 rounded-full transition-all duration-200 hover:bg-gray-100  group ">
      <Icon className="w-6 h-6" />
      <p className=" text-base font-light  hidden md:inline-flex lg:text-xl group-hover:text-twitter">{title}</p>
    </div>
  );
};

export default SidebarRow;
