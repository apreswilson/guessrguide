import MainNavbar from "./main-navbar/main-navbar";
import SideNavbar from "./side-navbar/side-navbar";
import Footer from "./footer/footer";
import "./page-layout.css";

interface Layout {
  children: React.ReactElement;
}

const PageLayout: React.FC<Layout> = ({ children }) => {
  return (
    <main className="page-layout">
      <MainNavbar />
      <SideNavbar />
      {children}
      <Footer />
    </main>
  )
}

export default PageLayout;