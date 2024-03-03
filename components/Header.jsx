import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* logo */}
      <Link href={"/"}>
        <Image src={"./logo.svg"} alt="logo" height={99} width={99}></Image>
      </Link>
    </header>
  );
};

export default Header;
