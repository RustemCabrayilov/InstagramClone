import { useEffect, useState } from "react";

export default function Input({ label, type = "text", ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);
  useEffect(() => {
    if (show) {
      setType("text");
    } else if (type === "password") {
      setType("password");
    }
  }, [show]);
  return (
    <label htmlFor="" className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
      <input
        required={true}
        type={inputType}
        className=" h-[38px] text-xs outline-none bg-zinc-50  rounded-sm w-full px-2 valid:pt-[10px] peer"
        {...props}
      />
      <small className="absolute  top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 tarnsition-all peer-valid:text-[10px] peer-valid:top-[10px]">
        {label}
      </small>
      {type === "password" && props.value && (
        <button
          type="button"
          onClick={() => setShow((show) => !show)}
          className="h-full flex items-center text-sm font-semibold pr-1">
          {show ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}
