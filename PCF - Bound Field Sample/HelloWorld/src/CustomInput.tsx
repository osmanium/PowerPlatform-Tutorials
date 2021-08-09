import React, { useState } from "react";

export interface ICustomInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const CustomInput: React.FunctionComponent<ICustomInputProps> = (
  props: ICustomInputProps
) => {
  const [text, setText] = useState(props.value);

  return (
    <input
      type="text"
      value={text}
      onChange={(e): void => {
        setText(e.currentTarget.value);
        props.onChange(e.currentTarget.value);
        console.log("input on change " + e.currentTarget.value);
      }}
    />
  );
};

export default { CustomInput };
