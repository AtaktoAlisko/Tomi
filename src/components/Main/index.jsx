"use client";

import Image from "next/image";
import Tomiris from "../../../public/images/Tomiris.png";
import { useState } from "react";
import { useEffect } from "react";
import muz from "../../assets/muzik.mp3";
import styles from "./Main.module.scss";
import proigr from "../../../public/images/proigr.png";

export default function Main() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(muz));
  }, []);

  function play() {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <div className="flex flex-col items-center mt-20 mb-20 ">
       <div className="absolute sm:left-10 sm:top-10 min-w-[300px]: left-5 top-20">
        <button
          className={`${styles.muzik} ${isPlaying ? "animate-spin" : ""} `}
          onClick={play}
        >
          <Image height={35} width={80} src={proigr} alt="musik" />
        </button>
      </div>
      <p className="shimmer-text text-[30px] sm:text-[30px]">Томирис</p>
      <Image
        className="mr-20 mb-20"
        src={Tomiris}
        alt="Tomiris"
        width={300}
        height={300}
      />
      <p className="shimmer-text text-[30px] sm:text-[30px] mb-5">1 Жас</p>
      <p className=" shimmer-text text-[30px] sm:text-[30px]">Түсау кесер</p>
    </div>
  );
}
