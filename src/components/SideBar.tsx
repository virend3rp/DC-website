"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Styles from "../styles/sidebar.module.css";
import SideButton from "./SideButton"; // Import reusable button

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarSymbol: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar symbol with either gear or close icon */}
      <div onClick={toggleSidebar} className={Styles.sidebarSymbol}>
        <img
          src={isOpen ? "/icons8-close.svg" : "/gear.png"}
          alt={isOpen ? "close icon" : "gear icon"}
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      {/* Sidebar content with purple-blue-black gradient */}
      <div
        className={`${Styles.sidebar} ${isOpen ? Styles.open : ""}`}
        style={{
          background: "linear-gradient(to bottom right, #6a1b9a, #3f51b5, #000000)", // Purple to blue to black gradient
        }}
      >
        <div className={Styles.buttonContainer}>
          <SideButton onClick={() => router.push("/about")}>About</SideButton>
          <SideButton onClick={() => router.push("/BIRD-LABS")}>B.I.R.D</SideButton>
          <SideButton onClick={() => router.push("/Research-Interests")}>Research Interests</SideButton>
          <SideButton onClick={() => router.push("/Experience")}>Experience</SideButton>
          <SideButton onClick={() => router.push("/Education")}>Education</SideButton>
          <SideButton onClick={() => router.push("/Awards")}>Awards</SideButton>
          <SideButton onClick={() => router.push("/Publications")}>Publications</SideButton>
          <SideButton onClick={() => router.push("/Design-CV")}>Design CV</SideButton>
          <SideButton onClick={() => router.push("/Contact")}>Contact</SideButton>
        </div>
      </div>
    </div>
  );
};

export default SidebarSymbol;
