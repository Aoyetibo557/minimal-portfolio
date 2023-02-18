import Link from "next/link";

type MenuItemProps = {
  title: string | JSX.Element;
  url: string;
  isActive: boolean;
  isDropdown?: boolean;
  dropdownItems?: MenuItemProps[];
  theme: "light" | "dark";
};

export const MenuItem = (props: MenuItemProps) => {
  return (
    <Link href={props.url}>
      <div
        className={`
        flex mx-2 font-light text-sm cursor-pointer py-2 px-3
        transition-all ease-in-out
        hover:text-neutral-300
        ${props.isActive ? "text-white" : "text-neutral-400"}
        ${props.theme === "light" ? "text-neutral-700" : "text-minimal-white"}
      `}>
        <span className="m-auto font-light">{props.title}</span>
      </div>
    </Link>
  );
};
