import Logo from '../logo/logo';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div>
      <Logo />
      <p>Filter</p>
      <p>Change Language</p>
    </div>
  );
}

export default Header;
