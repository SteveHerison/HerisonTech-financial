"use client";
import React, { useState } from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/contexts/AuthContext";

const FormIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { login } = useUserContext(); // ✅ Pegando a função de login do contexto

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError("O email é obrigatório.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("A senha é obrigatória.");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("A senha deve ter no mínimo 6 caracteres.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
      try {
        await login(email, password); // ✅ Chama a função login do contexto
        router.push("/dashboard"); // ✅ Redireciona após login bem-sucedido
      } catch (err) {
        console.error("Erro ao fazer login:", err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="email"
          name="email"
          label="Email"
          id="email"
          placeholder="Digite seu email"
          value={email}
          onChange={setEmail}
          onBlur={validateEmail}
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </div>

      <div>
        <Input
          type="password"
          name="password"
          label="Senha"
          id="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={setPassword}
          onBlur={validatePassword}
        />
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default FormIn;
