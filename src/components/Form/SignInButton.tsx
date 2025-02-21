"use client"; // Este componente precisa rodar no cliente

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function SignInButton() {
  const handleLoginGoo = async () => {
    await signIn("google", { callbackUrl: "/dashboard/overview" });
  };
  const handleLoginGit = async () => {
    await signIn("github", { callbackUrl: "/dashboard/overview" });
  };

  return (
    <div className="gap-2 flex flex-col">
      <Button
        variant="outline"
        className="w-full gap-2"
        onClick={handleLoginGoo}
      >
        <FaGoogle size={16} />
        Entrar com Google
      </Button>
      <Button
        variant="outline"
        className="w-full gap-2"
        onClick={handleLoginGit}
      >
        <FaGithub size={16} />
        Entrar com GitHub
      </Button>
    </div>
  );
}
