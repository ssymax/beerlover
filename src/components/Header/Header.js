import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import HeaderNavigation from "./HeaderNavigation";
import Button from "../Button/Button";
import styles from "./Header.module.scss";
import logoImage from "../../assets/images/logo.svg";

const Header = ({ openModalFn }) => {
  const logoImg = useRef(null);
  const logoText = useRef(null);

  window.onload = useEffect(() => {
    const img = logoImg.current;
    const txt = logoText.current;

    gsap.set(txt, { autoAlpha: 0 });
    let tl = gsap.timeline();
    let gt = gsap.to;
    tl.fromTo(img, { y: "-=150", duration: 1 }, { y: "0" });
    gt(img, { duration: 2, ease: "bounce.out", y: "0" });
    tl.to(txt, { duration: 0.3, autoAlpha: 1, delay: 1.5 });
  }, []);

  return (
    <header className={styles.wrapper}>
      <div>
        <img
          ref={logoImg}
          className={styles.logoImage}
          src={logoImage}
          alt="logo"
        />
        <h2 ref={logoText} className={styles.logoText}>
          beerlover
        </h2>
      </div>
      <HeaderNavigation />
      <Button onClick={openModalFn} secondary>
        add new
      </Button>
    </header>
  );
};

export default Header;
