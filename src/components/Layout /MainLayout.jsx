import SecondaryNavbar from "../Navbar/SecondaryNavbar";


const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Top Navbar */}
      <SecondaryNavbar />
      
      {/* Secondary Navbar */}


      {/* Page content */}
      <main>{children}</main>

      {/* Footer if any */}
      <footer className="text-center py-4">© 2025 Flower Shop</footer>
    </div>
  );
};

export default MainLayout;
