// import './App.css';

const Header = ({ titulo, renglones }: HeaderProps) => {
  if (renglones === undefined){
    renglones = 1;
  }
    return <div>{titulo}</div>;
};

export default Header;

interface HeaderProps {
  titulo: string;
  renglones?: number;
}
