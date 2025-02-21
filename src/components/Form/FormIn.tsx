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

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormIn;
