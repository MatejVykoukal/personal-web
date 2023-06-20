import { useState, useEffect } from "react";

interface Props {
  typedTextArray: string[];
  staticText?: string;
  typingSpeed?: number;
  deleteAfter?: number;
  typedTextProps?: React.HTMLAttributes<HTMLSpanElement>;
}

const TypingAnimation: React.FC<Props> = ({
  typedTextArray,
  deleteAfter = 2000,
  staticText = "",
  typedTextProps = {},
  typingSpeed = 150,
}) => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(typedTextArray[index]?.slice(0, typedText.length + 1) ?? "");
    }, typingSpeed);

    if (typedText === typedTextArray[index]) {
      setTimeout(() => {
        setTypedText("");
        setIndex((prev) => (prev + 1) % typedTextArray.length);
      }, deleteAfter);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedText]);

  return (
    <div aria-label={`${staticText} ${typedTextArray.join(", ")}`}>
      <span className="">{staticText}</span>
      <span {...typedTextProps}>{typedText}</span>
      <span
        className="animate-blink ml-1 inline-block "
        style={{ animationDuration: "800ms" }}
      >
        |
      </span>
    </div>
  );
};

export default TypingAnimation;
