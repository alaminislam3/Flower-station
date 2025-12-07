import MainNavbar from "../Navbar/MainNavbar";
import SecondaryNavbar from "../Navbar/SecondaryNavbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Top Navbar */}
      <SecondaryNavbar />

      {/* Secondary Navbar */}
      <MainNavbar />

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
