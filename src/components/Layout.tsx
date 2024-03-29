import React from "react";
import "../css/app.css";
import Footer from "./Footer";
import { LocationProvider } from "./LocationProvider";
import Navbar from "./Navbar";

export default function Layout({
  children,
  showFooter = true,
  header = <></>,
  location,
}: React.PropsWithChildren<{
  showFooter?: boolean;
  header?: React.ReactNode;
  location: Location;
}>) {
  return (
    <LocationProvider location={location}>
      <main className="bg-gray-900 min-h-screen">
        <section className="max-w-2xl mx-auto">
          <Navbar className="nav-bar" />
          {header}
          <main className="relative container mx-auto app-content">
            {children}
          </main>
          {showFooter && <Footer className="flex-shrink-0" />}
        </section>
      </main>
    </LocationProvider>
  );
}
