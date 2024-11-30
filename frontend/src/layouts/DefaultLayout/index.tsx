import { Outlet } from "react-router-dom";
import { Container, LayoutContainer } from "./styles";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function DefaultLayout() {
  return (
    <>
      <Container>
        <Sidebar />
        <Header />
      </Container>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
}
