import React from "react";
const TextAreaInput = React.forwardRef((props, ref) => (
  <div className="flex flex-col gap-[8px] items-start w-full">
    <p className="text-[14px] opacity-50">{props.label}</p>
    <textarea
      ref={ref}
      type="text"
      placeholder={props.ph}
      className="min-h-[120px] w-full py-[12px] px-[18px] sm:px-[36px] text-[14px] sm:text-[18px] text-black placeholder:opacity-50 bg-white rounded-lg"
      required
    />
  </div>
));

export default TextAreaInput;