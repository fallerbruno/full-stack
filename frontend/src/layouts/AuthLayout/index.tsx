import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function AuthLayout() {
  return (
    <>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
}
