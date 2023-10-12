import React,  {Card} from "react";

const Header = ({ titulo, renglones }: CardProps) => {
    if (renglones === undefined){
      renglones = 1;
    }
      return <div>{titulo}</div>;
  };
  
  export default Header;
  
  interface CardProps {
    titulo: string;
    renglones?: number;
  }
  