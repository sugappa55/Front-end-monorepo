"use client";

import FetchData from "@/components/FetchData";
import WindowSize from "@/components/WindowSize";
import "./index.css";

export default function Home() {
  return (
    <div>
      <main>
        {/* <WindowSize /> */}
        <FetchData />
      </main>
    </div>
  );
}
