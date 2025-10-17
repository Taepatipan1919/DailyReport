"use client"

import Link from "next/link";
import { useState } from "react";
import { Providers } from "../components/store/provider";

export default function layout({ children }) {

  return (
    <>

<Providers>
<div className="flex h-screen font-sans">
  <div className="flex flex-col flex-grow bg-neutral">
    <div className="m-2 overflow-y-auto flex-grow">
      {children}
    </div>
  </div>
</div>
      </Providers>
    </>

  );
}
