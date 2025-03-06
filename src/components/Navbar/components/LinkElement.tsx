import { Link } from "wouter";

const LinkElement = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="text-xs md:text-base hover:text-[#70C368] transition-colors duration-300 
            text-center py-3 w-full hover:bg-white/10  rounded-2xl"
    >
      {text}
    </Link>
  );
};

export default LinkElement;
