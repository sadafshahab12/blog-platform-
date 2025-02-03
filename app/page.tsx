"use client";
import { useRef } from "react";
import CreateBlog from "./components/CreateBlog";
import Hero from "./components/Hero";

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      <Hero buttonRef={buttonRef} />
      <CreateBlog buttonRef={buttonRef} />
    </>
  );
}
