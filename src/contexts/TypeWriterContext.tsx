import React, { createContext, useContext, useState, useEffect } from "react";

const DEFAULT_SPEED = 50;

const TypewriterContext = createContext<{
  typeText: (text: string, speed?: number) => JSX.Element;
}>({
  typeText: (text) => <>{text}</>,
});

export const TypewriterProvider: React.FC<{ speed?: number; children: React.ReactNode }> = ({
  speed = DEFAULT_SPEED,
  children,
}) => {
  const [typedText, setTypedText] = useState<{ [key: string]: string }>({});

  const typeText = (text: string, customSpeed?: number) => {
    const typingSpeed = customSpeed ?? speed;
    if (typedText[text]) return formatText(typedText[text]);

    let currentText = "";
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        currentText += text[i];
        setTypedText((prev) => ({ ...prev, [text]: currentText }));
        i++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return formatText("");
  };

  // Function to properly format text with <br /> elements
  const formatText = (text: string) => {
    return (
      <>
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <TypewriterContext.Provider value={{ typeText }}>
      {children}
    </TypewriterContext.Provider>
  );
};

export const useTypewriter = () => useContext(TypewriterContext);
