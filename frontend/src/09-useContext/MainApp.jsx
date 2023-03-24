import { Navigate, Route, Routes } from "react-router-dom";
import { NavVar } from "./NavVar";

import { UserProvider } from "./context/UserProvider";
import { HomePage, LoginPage, AboutPage } from "./";

export const MainApp = () => {
  return (
    <UserProvider>      
      <NavVar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
