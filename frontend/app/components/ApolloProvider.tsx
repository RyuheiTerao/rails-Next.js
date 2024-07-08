'use client'

import { ApolloProvider as Provider } from "@apollo/client";
import { client } from "@/app/lib/apolloClient";
import { ReactNode } from "react";

export function ApolloProvider({ children }: { children: ReactNode }) {
  return <Provider client={client}>{children}</Provider>;
}
