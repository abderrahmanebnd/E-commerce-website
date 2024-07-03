import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <main className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default AppLayout;
