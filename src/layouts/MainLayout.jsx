import { Outlet } from "react-router-dom";
import Footer from "../components/PublicComponents/Footer";
import Header from "../components/PublicComponents/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
