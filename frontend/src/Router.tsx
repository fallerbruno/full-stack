import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { AuthLayout } from "./layouts/AuthLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
