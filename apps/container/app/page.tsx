"use client";

import FetchData from "@/components/FetchData";
import WindowSize from "@/components/WindowSize";
import "./index.css";
import DebouncedInput from "@/components/DebouncedInput";
import PreviousValue from "@/components/PreviousValue";
import ToggleValue from "@/components/ToggleValue";
import FormState from "@/components/FormState";
import StorageComponent from "@/components/StorageComponent";
import IntersectionObserver from "@/components/IntersectionObserver";
import NetworkStatus from "@/components/NetworkStatus";

export default function Home() {
  return (
    <div>
      <main>
        {/* <WindowSize /> */}
        {/* <FetchData /> */}
        {/* <DebouncedInput /> */}
        {/* <PreviousValue /> */}
        {/* <ToggleValue /> */}
        {/* <FormState /> */}
        {/* <StorageComponent /> */}
        {/* <IntersectionObserver /> */}
        <NetworkStatus />
      </main>
    </div>
  );
}
