import Image from "next/image";

import Logo from "@/../public/logo.svg";

import SignInButton from "@/components/Form/SignInButton";
import FormIn from "@/components/Form/FormIn";

const authBg = "/images/auth-bg.webp";

export default function SignIn() {
  return (
    <div className="grid grid-cols-[1.5fr,1fr] h-screen text-slate-50">
      <aside>
        <Image
          width={1000}
          height={800}
          quality={100}
          src={authBg}
          alt="Imagem de fundo"
          className="w-full h-full object-cover"
        />
      </aside>
      <div className="p-6">
        <div className="flex justify-center">
          <Logo className="w-full  h-full mx-auto" />
        </div>
        <h1 className="text-3xl font-semibold text-center">
          Entre em sua conta
        </h1>
        <p className="text-center text-gray-500">
          Caso não tenha conta, ela será criada automaticamente
        </p>

        <FormIn />
        <div className="w-full mt-4 flex items-center justify-center ">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
