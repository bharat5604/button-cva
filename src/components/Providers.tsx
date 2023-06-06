"use client";

import { SessionProvider } from "next-auth/react";
import { CookiesProvider } from "react-cookie";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};
