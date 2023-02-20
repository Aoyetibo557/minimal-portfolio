import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsEnvelope,
} from "react-icons/bs";

type Props = {
  href: string;
  icon?: React.ReactNode;
  text: string;
  theme: string;
  hasBar?: boolean;
};
export const SocialLink = (props: Props) => {
  const getIcon = () => {
    switch (props.icon) {
      case "github":
        return <BsGithub />;

      case "linkedin":
        return <BsLinkedin />;

      case "twitter":
        return <BsTwitter />;

      case "instagram":
        return <BsInstagram />;

      case "facebook":
        return <BsFacebook />;

      case "youtube":
        return <BsYoutube />;

      case "email":
        return <BsEnvelope />;

      default:
        return "none";
    }
  };
  return (
    <div>
      {props.hasBar && (
        <div
          className={`${
            props.theme === "light"
              ? "border-neutral-200"
              : "border-neutral-700"
          } border-t-[1px] w-full mx-auto my-2 mb-5`}></div>
      )}
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-5 group-hover:text-neutral-900 ">
        <span
          className={` ${
            props.theme === "light" ? "text-gray-600" : "text-neutral-500"
          }`}>
          {getIcon()}
        </span>
        <span
          className={`mukta-font text-base font-medium ${
            props.theme === "light"
              ? "text-minimal-black hover:text-neutral-400"
              : "text-neutral-200 hover:text-neutral-400"
          }`}>
          {props.text}
        </span>
      </a>
    </div>
  );
};
