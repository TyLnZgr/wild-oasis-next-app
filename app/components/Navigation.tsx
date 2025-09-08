import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/cabins">Cabins</Link>
      <Link href="/account">Account</Link>
    </>
  );
}
