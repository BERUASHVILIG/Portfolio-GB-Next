import Link from "next/link";

import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { BsFileEarmarkText } from "react-icons/bs";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/BERUASHVILIG"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/giorgiberuashvili/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={
          "https://drive.google.com/drive/folders/1D4B6xB4eS1K-wmKLGYcE3QbjkPuWo2A7"
        }
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <BsFileEarmarkText />
      </Link>
    </div>
  );
};

export default Socials;
