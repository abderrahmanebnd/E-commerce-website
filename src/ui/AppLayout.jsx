import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import ScrollToTop from "./common/ScrollToTo";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              color: "green",
            },
          },
          error: {
            duration: 5000,
            style: {
              color: "var(--main-color)",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--bg-color-2)",
            fontWeight: "500",
          },
        }}
      />
    </main>
  );
}

export default AppLayout;
