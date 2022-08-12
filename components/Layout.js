import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      
        <header >
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
          <Footer />
        </footer>
      
    </>
  );
}

export default Layout;
