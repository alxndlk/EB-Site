import { MenuIcon } from "lucide-react";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { ModalHeaader } from "./ModalHeader";

export const Menu: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const handleClose = () => setVisible(false);

  return (
    <>
      <div className={styles.menu} onClick={() => setVisible(true)}>
        Меню <MenuIcon />
      </div>
      {visible && <ModalHeaader onClose={handleClose} />}
    </>
  );
};
