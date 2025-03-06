const NavWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-5xl 
      bg-[#1E1E1E] 
      rounded-2xl 
      px-0 
      py-0 
      z-50 
      border border-[#3A3A3A]
      shadow-md
      backdrop-blur-lg 
      bg-opacity-5"
    >
      {children}
    </nav>
  );
};

export default NavWrapper;