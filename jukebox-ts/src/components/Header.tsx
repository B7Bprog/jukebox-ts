import { FC } from "react";
interface HeaderProp {
  playListTitle: string;
}

const Header: FC<HeaderProp> = ({ playListTitle }): JSX.Element => {
  return <h1>{playListTitle}</h1>;
};

export default Header;
