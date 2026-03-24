import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidenav from "./components/Sidenav";
import FloatingButtons from "@/components/FloatingButtons";

export default function MainLayouts() {
  const [isToggle, setIsToggle] = useState(false);

  function onClickToggle() {
    setIsToggle(!isToggle);
  }

  return (
    <div style={{ position: "relative" }}>
      <Header onClickToggle={onClickToggle} isToggle={isToggle} />
      <Sidenav onClickToggle={onClickToggle} isToggle={isToggle} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
