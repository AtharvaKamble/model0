"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import GradientDiv from "@/components/custom/Global/GradientDiv";

const { log } = console;

export default function Home() {
  const [width, setWidth] = useState<number>(0);
  const [hoverOnAbout, setHoverOnAbout] = useState<boolean>(false);

  const lastTimeRef = useRef<number>(performance.now());
  const elapsedTimeRef = useRef<number>(0);

  useEffect(() => {
    const update = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // Convert to seconds
      lastTimeRef.current = currentTime;
      elapsedTimeRef.current += deltaTime; // Accumulate elapsed time

      setWidth(() => Math.sin(elapsedTimeRef.current));

      requestAnimationFrame(update);
    };

    const id = requestAnimationFrame(update);
    return () => cancelAnimationFrame(id); // Cleanup on unmount
  }, []);

  log(width * 1000);

  return (
    <GradientDiv>
      <section className="mx-auto flex justify-center min-h-screen flex-col">
        <div className="flex justify-center flex-col text-center align-middle">
          <h1
            className="text-9xl font-extralight"
            style={{
              letterSpacing: `${width * 15}px`,

              fontWeight: `${width * 1000}`,
            }}
          >
            Model0
          </h1>
          <p>Hi, Model0 is under construction, tune in on July 1st, 2024.</p>
          <p>Until then, learn more about what's Model0 about.</p>
        </div>
        <div
          className="rounded mx-auto mt-10"
          onMouseEnter={() => setHoverOnAbout(() => true)}
          onMouseLeave={() => setHoverOnAbout(() => false)}
        >
          <Link href="/about">
            <p className="flex gap-1 hover:cursor-pointer relative">
              About Model0{" "}
              <ArrowRightIcon
                className={`my-auto transition ${
                  hoverOnAbout ? "translate-x-2" : ""
                }`}
              />
              <span
                className={`absolute h-1 rounded transition bg-stone-700 -bottom-2`}
                style={{
                  width: hoverOnAbout ? "100%" : "0%",
                  transition: "width 0.3s ease",
                }}
              ></span>
            </p>
          </Link>
        </div>
      </section>
    </GradientDiv>
  );
}
