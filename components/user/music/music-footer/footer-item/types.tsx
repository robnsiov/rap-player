import { IconType } from "react-icons";

export default interface FootetItemImpl {
  title: string;
  onClick?(): void;
  icon: IconType;
  link?: boolean;
  href?: string;
}
