import { Outlet } from "react-router-dom";
import Header from "./common/Header";

function AppLayout() {
  return (
    <main className="min-h-screen">
      <Header />
      <Outlet />
    </main>
  );
}

export default AppLayout;
