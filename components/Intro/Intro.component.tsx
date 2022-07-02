import type { NextComponentType } from "next";
import Image from "next/image";
import { useEffect, useRef } from "react";

import IntroStyle from "./Intro.module.scss";

const Intro: NextComponentType = () => {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const introElement = introRef.current;
    if (!introElement) return;

    setTimeout(() => introElement.remove(), 1500);
  }, []);

  return (
    <section ref={introRef} className={IntroStyle.container}>
      <div className={IntroStyle.logoWrapper}>
        <Image src="/neco.svg" alt="Necodong Logo" layout="fill" />
      </div>
    </section>
  );
};

export default Intro;
