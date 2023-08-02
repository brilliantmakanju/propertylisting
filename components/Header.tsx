interface HeaderProps {
  type?: string;
  title?: string;
  style?: string;
}

const Header: React.FC<HeaderProps> = ({ title, style }) => {
  return <h2 className={`${style}`}>{title}</h2>;
};

export default Header;
