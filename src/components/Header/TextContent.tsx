const TextContent = () => {
  return (
    <>
      <p className="text-white text-left font-[Inconsolata] font-extrabold text-4xl">
        Ádám Szabó
      </p>
      <p
        className="text-white text-left font-[Inconsolata] font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        I’m a <span className="font-bold">software engineer</span> focused on building
        scalable web and mobile apps.
        <br />
      </p>
    </>
  );
};

export default TextContent;


/*
<>
      <p className="text-white text-left font-[Inconsolata] font-extrabold text-4xl">
        Ádám Szabó
      </p>
      <p
        className="text-white text-left font-[Inconsolata] font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        Hi, welcome to my portfolio. I’m a <span className="font-bold">software engineer</span> focused on building
        scalable web and mobile apps.
        <br />
      </p>
    </>
*/