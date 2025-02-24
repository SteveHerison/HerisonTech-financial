"use client";
import Image from "next/image";

import Logo from "@/../public/logo.svg";

import SignInButton from "@/components/Form/SignInButton";

import FormUp from "@/components/Form/FormUp";

const authBg = "/images/auth-bg.webp";

export default function SignIn() {
  return (
    <div className="grid grid-rows-1 md:grid-rows-none md:grid-cols-[1.5fr,1fr] h-screen ">
      <Image
        width={1000}
        height={800}
        quality={100}
        src={authBg}
        alt="Imagem de fundo"
        className="w-full h-full object-cover"
      />
      <aside>
        <div className="p-6 w-full h-full flex flex-col justify-between">
          <div className="flex justify-center">
            <Logo className="w-full h-full max-w-96 max-h-96 mx-auto" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-center">
              Entre em sua conta
            </h1>
            <p className="text-center text-paragrafo">
              Caso não tenha conta, ela será criada automaticamente
            </p>
          </div>
          <FormUp />
          <div className="w-full mt-4 flex items-center justify-center ">
            <SignInButton />
          </div>
        </div>
      </aside>
    </div>
  );
}
