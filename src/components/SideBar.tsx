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
      {/* Sidebar symbol with either hamburger or close icon */}
      <div onClick={toggleSidebar} className={Styles.sidebarSymbol}>
        {/* Hamburger icon for closed sidebar, close icon for open sidebar */}
        {isOpen ? (
          <img
            src="/icons8-close.svg"
            alt="close icon"
            style={{ width: "35px", height: "35px" }} // Reduced size for close icon
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "35px", height: "35px" }} // Reduced size for hamburger icon
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="grey"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
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
