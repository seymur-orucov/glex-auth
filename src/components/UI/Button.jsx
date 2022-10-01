const Button = ({ children, style, type }) => {
  return (
    <a
      href="#"
      className={`${
        type === "filled" ? "bg-main-orange-900 text-white border-none" : ""
      } font-m-m-medium text-[16px] leading-5 flex justify-center items-center px-[24px] py-[14px] min-w-[136px] border-main-stroke border-[1px] rounded-[8px] ${style}`}
    >
      {children}
    </a>
  );
};

export default Button;
