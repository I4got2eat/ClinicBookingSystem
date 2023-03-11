import { Outlet } from "react-router-dom";
import { LogIn } from "./LogIn";

const useAuth = () => {
  return true;
};

const ProtectedRoutes = () => {
  console.log(useAuth());
  return useAuth() ? <Outlet /> : <LogIn />;
};

export default ProtectedRoutes;
