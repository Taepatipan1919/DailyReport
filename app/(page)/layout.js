"use client";

import Link from "next/link";
import { useState } from "react";
import { Providers } from "../components/store/provider";
import Navbar from "../components/layout/navbar";

export default function layout({ children }) {
  return (
    <div>
      <Providers>
      <div className="flex flex-col ">
          <Navbar />
          <main className="bg-white flex-1 p-4">{children}</main>
        </div>
      </Providers>
    </div>
  );
}
