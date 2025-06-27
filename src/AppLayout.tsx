import { Outlet } from "react-router";
import Footer from "./scenes/footer";
import Header from "./scenes/header";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
