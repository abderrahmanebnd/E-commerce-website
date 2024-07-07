import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <main className="min-h-screen">
      <Header />
      <Outlet />
    </main>
  );
}

export default AppLayout;
