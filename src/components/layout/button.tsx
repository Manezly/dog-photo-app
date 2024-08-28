type ButtonProps = {
  onClickFunction: () => void;
  loading: boolean;
  buttonText: string;
  generateDogImageTab: boolean;
  buttonStyling?: string;
};

function Button({
  onClickFunction,
  loading,
  buttonText,
  generateDogImageTab,
  buttonStyling,
}: ButtonProps) {
  const isDisabled = loading || generateDogImageTab;
  return (
    <button
      onClick={onClickFunction}
      className={`px-4 py-2 text-white ${
        isDisabled ? 'bg-black/60' : 'bg-black hover:bg-red-500'
      } ${buttonStyling}`}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;
