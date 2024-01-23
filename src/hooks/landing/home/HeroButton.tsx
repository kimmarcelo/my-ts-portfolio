interface HeroButtonProps {
  name: string;
  textColor?: string;
  bgColor?: string;
  onClick?: () => void;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  name,
  textColor,
  bgColor,
}) => {
  return (
    <button
      className={`bg-[${bgColor}] text-[${textColor}] py-4 px-10 text-lg font-light border-none rounded-3xl cursor-pointer hover:scale-105`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `1px solid ${textColor}`,
      }}
    >
      {name}
    </button>
  );
};

export default HeroButton;
