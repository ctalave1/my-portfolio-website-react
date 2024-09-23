type ButtonProps = {
  text: string;
  px: number;
  py: number;
  onClick?: () => void;
}

export const Button = ({ text, px, py, onClick = () => {} }: ButtonProps) => {
  return (
    <button
      className={`
        bg-gradient-to-r 
        from-yellow-400 
        to-blue-600 
        text-white 
        hidden 
        md:inline 
        transform 
        transition-transform
        duration-300 
        hover:scale-105 
        px-${px} 
        py-${py} 
        rounded-full
      `}
      onClick={onClick}
    >
      {text}
    </button>
  )
};