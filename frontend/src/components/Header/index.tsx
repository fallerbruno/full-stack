import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderMain,
  ImagemContainer,
  NavContainer,
} from "./styles";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

export function Header() {
  const user = useContext(LoginContext);

  return (
    <HeaderMain>
      <HeaderContainer>
        <ImagemContainer>
          <img
            src="https://cursos.unipampa.edu.br/cursos/engenhariadesoftware/files/2016/08/Logo-ES-Fundo-branco.png"
            alt="Logo"
          />
        </ImagemContainer>
        <NavContainer>
          <nav>
            <span>Usuario: {user.nome} </span>
          </nav>
        </NavContainer>
      </HeaderContainer>
    </HeaderMain>
  );
}
