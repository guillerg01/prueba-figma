'use client'

import App from "./app";
import { ApiProvider } from "@/context/contextprovider";

export default function  Home ()  {

  return(
    <ApiProvider>
  <App></App>
  </ApiProvider>)
}