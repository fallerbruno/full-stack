import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const userContext = useContext(LoginContext);
  const navigate = useNavigate();

  const migrarParaHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{userContext.email}</h2>
      <h2>{userContext.nome}</h2>
      <h2>{userContext.password}</h2>
      <button onClick={migrarParaHome}>Home</button>
    </div>
  );
}
