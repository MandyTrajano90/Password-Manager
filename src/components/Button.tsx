type ButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};

function Button({ children, handleClick }: ButtonProps) {
  return (
    <button onClick={ handleClick }>
      { children }
    </button>
  );
}

export default Button;
