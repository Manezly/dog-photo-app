type ButtonProps = {
  onClickFunction: () => void;
  loading: boolean;
  buttonText: string;
};

function Button({ onClickFunction, loading, buttonText }: ButtonProps) {
  return (
    <button
      onClick={onClickFunction}
      className={`${
        loading ? 'bg-black/70' : ''
      } px-4 py-2 text-white bg-black rounded-t-lg hover:bg-black/70`}
      disabled={loading}
    >
      {buttonText}
    </button>
  );
}

export default Button;
