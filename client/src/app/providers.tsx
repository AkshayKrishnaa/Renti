"use client";

import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
import { usePathname } from "next/navigation";
import Auth from "./(auth)/authProvider";

const PUBLIC_ROUTES = ["/", "/landing"];

const Providers = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname ?? "");

  return (
    <StoreProvider>
      {isPublicRoute ? (
        children
      ) : (
        <Authenticator.Provider>
          <Auth>{children}</Auth>
        </Authenticator.Provider>
      )}
    </StoreProvider>
  );
};

export default Providers;