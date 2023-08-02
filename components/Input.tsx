interface InputProps {
  type?: string;
  value?: string;
  style?: string;
  disabled?: boolean;
  required?: true;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  style,
  onChange,
  disabled,
  required,
  placeholder,
}) => {
  return (
    <input
      type={type}
      required={required}
      value={value}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      className={`
      w-full p-4 
      text-[#3128ac]
      appearance-none 
      text-lg border-2 
      border-[#3128ac] 
      disabled:text-black 
      focus:border-[#3128ac] 
      rounded-md outline-none
      disabled:bg-neutral-300 
      focus:border-2 transition 
      disabled:cursor-not-allowed 
      disabled:opacity-30 ${style} `}
    />
  );
};

export default Input;
