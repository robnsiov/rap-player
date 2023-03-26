import { ChangeEvent } from "react";

export default interface TextInputImpl {
  type?: string;
  label: string;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
  name: string;
  readOnly?: boolean;
  className?: string;
  focus?: boolean;
  inputProps?: {};
}
