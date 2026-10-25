import React from "react";
import Link from "next/link";
import Image from "next/image";
const SiteHeader = () => {
  const isSignedIn = false;
  const isLandingPage = true;
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between border-b border-white/6 bg-background/70 px-6 backdrop-blur-md md:px-10">
      <Link
        href={isSignedIn && !isLandingPage ? "/dashboard" : "/"}
        className="flex items-center"
      >
        <Image
          src="/brand/logo-navbar-dark.png"
          alt="Outpost"
          width={314}
          height={160}
          className="h-9 w-auto"
          priority
        />
      </Link>
    </header>
  );
};

export default SiteHeader;
