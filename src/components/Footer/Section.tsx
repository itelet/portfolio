import SectionWrapper from "../lib/SectionWrapper";

const Section = () => {
  const handleWebsiteClick = () => {
    // You can replace this with your specific link or navigation
    window.open('https://github.com/itelet/portfolio', '_blank', 'noopener,noreferrer');
  };

  return (
    <SectionWrapper className="mt-8 mb-0">
      <div className="flex flex-row justify-between w-full bg-[#131313] p-4 px-6 text-[#9A9A9A] font-[Inter] font-light">
        <span>
          © 2025 Portfolio. All rights reserved.
        </span>
        <div className="flex flex-row items-center">
          <span>
            <span 
              onClick={handleWebsiteClick}
              className="
                text-[#7DA6FF] 
                underline 
                cursor-pointer 
                hover:text-[#6494e3] 
                transition-colors 
                duration-300
              "
							title="https://github.com/itelet/portfolio"
            >
              Website
            </span> was created with React
          </span>
          <img src={require('../../assets/icons/love.png')} className="pl-1.5" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section;