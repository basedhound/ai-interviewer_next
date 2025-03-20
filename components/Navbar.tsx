import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
  const profileImageSrc = "/profile.svg";

  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
        <h2 className="text-primary-100">PrepWise</h2>
      </Link>

      <Link href="/">
        <Image
          src={profileImageSrc}
          alt="User Profile"
          width={50}
          height={50}
          className="rounded-full object-cover size-12"
        />
      </Link>
    </nav>
  );
};

export default Navbar;