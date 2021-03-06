import React, { useState } from "react";

export interface ICustomInputProps {
  value?: string;
  color?: string;
  onChange?: (value: string | undefined) => void;
}

export const CustomInput: React.FunctionComponent<ICustomInputProps> = (
  props: ICustomInputProps
) => {
  const [text, setText] = useState(props.value);
  React.useEffect(() => {
    console.log("use effect: " + props.value);
    setText(props.value);
  }, [props.value]);

  return (
    <input
      type="text"
      value={text}
      style={{ color: props.color || "black" }}
      onBlur={(e): void => {
        console.log("input on blur: " + e.currentTarget.value);
        if (props?.onChange) props.onChange(e.currentTarget.value);
      }}
      onChange={(e): void => {
        console.log("input on change: " + e.currentTarget.value);
        setText(e.currentTarget.value);
      }}
    />
  );
};

export default { CustomInput };
