import Image from "next/image";
import Link from "next/link";

// icons
import {
  RiDribbbleFill,
  RiGithubFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Header = () => {
  return (
    <header className="max_padd_container flexBetween absolute top-0 w-full">
      {/* logo */}
      <Link href={"/"}>
        <Image src={"./logo.svg"} alt="logo" height={99} width={99}></Image>
      </Link>
      {/* icons & buttons */}
      <SocialIcons />
    </header>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex gap-4 lg:gap-3 pr-4">
      <Link
        href={"/"}
        className="bg-[#08d9d6] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500"
      >
        <RiYoutubeFill />
      </Link>

      <Link
        href={"/"}
        className="bg-[#eaeaea] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500"
      >
        <RiLinkedinFill />
      </Link>

      <Link
        href={"/"}
        className="bg-[#f9ed69] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500"
      >
        <RiDribbbleFill />
      </Link>

      <Link
        href={"/"}
        className="bg-[#5272f2] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Header;
