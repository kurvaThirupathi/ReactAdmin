"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import { Header } from "@/Header";
import { Footer } from "@/Footer";
import { Menu } from "@/Menu";
import { Login } from "@/Login";
import { useReducer } from "react";
import {init} from "../redux/init"
import {reducer} from "../redux/reducer"
import { Provider } from "../context/appCtx";
import "bootstrap/dist/css/bootstrap.css"

const inter = Inter({ subsets: ["latin"] });

//export const metadata: Metadata = {
  //title: "Create Next App",
  //description: "Generated by create next app",
//};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const [state,dispatch]=useReducer(reducer,init);
   
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider value={{state,dispatch}}>
         
          {state?.isLoggedIn?<Menu />:<Login />}
          
          
          {
        /* children */
          }
        </Provider>
        
        </body>
    </html>
  );
}