import React from "react";
import useAuth from "../contexts/AuthContext";
import LoadingScreen from "../screens/other/LoadingScreen";
import AuthRoutes from "./AuthRoute";
import ClienteRoutes from "./ClienteRoutes";
import ProvedorRoutes from "./ProvedorRoutes";

// Armazena todas as rotas da aplicação
const Routes: React.FC = () => {
  const { signed, loading, error, userType } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    alert(error);
    return <AuthRoutes />;
  }

  if (signed) {
    return userType === "client" ? <ClienteRoutes /> : <ProvedorRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

export default Routes;
