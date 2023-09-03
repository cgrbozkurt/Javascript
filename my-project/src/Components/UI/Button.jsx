const Button = (props) => {
  return (
    <button className={`p-2 bg-teal-700 text-lg text-white  ${props.className}`
    }
    type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
