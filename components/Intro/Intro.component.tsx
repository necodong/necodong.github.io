import type { NextComponentType } from "next";
import Image from "next/image";
import { useRef } from "react";

import IntroStyle from "./Intro.module.scss";

const Intro: NextComponentType = () => {
  const introRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={introRef} className={IntroStyle.container}>

      <div className={IntroStyle.logoWrapper}>
        <Image src="/neco.svg" alt="Necodong Logo" layout="fill" />
      </div>
      <div className={IntroStyle.logoBackground} />
    </section >
  );
};

export default Intro;
