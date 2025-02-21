"use client";
import React, { useState } from "react";
import Input from "./Input"; // Componente reutilizável para inputs

const FormIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateName = () => {
    if (!name.trim()) {
      setNameError("O nome é obrigatório.");
      return false;
    }
    setNameError("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateName() && validatePassword()) {
      setName("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          label="Nome"
          id="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={setName}
          onBlur={validateName}
        />
        {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
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

      <div className="relative group">
        <div className="relative w-52 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
          <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

          <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
            <button
              type="submit"
              name="text"
              className="input font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-black"
            >
              Enviar
            </button>
          </div>
          <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"></div>
        </div>
      </div>
    </form>
  );
};

export default FormIn;
