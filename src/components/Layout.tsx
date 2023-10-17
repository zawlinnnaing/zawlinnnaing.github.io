import React from "react";
import "../css/app.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ThemeProvider from "./ThemeProvider";

export default function Layout({
  children,
  showFooter = true,
  header = <></>,
}: React.PropsWithChildren<{
  showFooter?: boolean;
  header?: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <section className="max-w-2xl mx-auto">
        <Navbar className="nav-bar" />
        {header}
        <main className="relative container mx-auto app-content">
          {children}
        </main>
        {showFooter && <Footer className="flex-shrink-0" />}
      </section>
    </ThemeProvider>
  );
}
