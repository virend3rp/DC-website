import React from "react";
import styles from "../styles/Button.module.css"; // Ensure this file exists

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const SideButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.inner}>
        <div className={styles.svgs}>
          <svg
            viewBox="0 0 256 256"
            height="12px" /* Reduced size */
            width="12px"  /* Reduced size */
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svgS}
          >
            <path
              d="M240 128a15.79 15.79 0 0 1-10.5 15l-63.44 23.07L143 229.5a16 16 0 0 1-30 0l-23.06-63.44L26.5 143a16 16 0 0 1 0-30l63.44-23.06L113 26.5a16 16 0 0 1 30 0l23.07 63.44L229.5 113a15.79 15.79 0 0 1 10.5 15"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {children}
      </div>
    </button>
  );
};

export default SideButton;
