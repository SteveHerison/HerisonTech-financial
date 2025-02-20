import React, { useState } from "react";
import Input from "./Input";

const FormUp = () => {
  // Estados para armazenar os valores do formulário

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Estados para erros de validação
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Função de validação para o campo "name"
  const validateName = () => {
    if (!name.trim()) {
      setNameError("O nome é obrigatório.");
      return false;
    }
    setNameError(""); // Limpa o erro se válido
    return true;
  };
  const validateEmail = () => {
    if (!name.trim()) {
      setEmailError("O nome é obrigatório.");
      return false;
    }
    setEmailError(""); // Limpa o erro se válido
    return true;
  };

  // Função de validação para o campo "password"
  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("A senha é obrigatória.");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("A senha deve ter no mínimo 6 caracteres.");
      return false;
    }
    setPasswordError(""); // Limpa o erro se válido
    return true;
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("A senha é obrigatória.");
      return false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Senha precisa ser idêntica.");
      return false;
    }
    setPasswordError(""); // Limpa o erro se válido
    return true;
  };

  // Função para tratar o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    const isNameValid = validateName();
    const isPasswordValid = validatePassword();

    if (isNameValid && isPasswordValid) {
      console.log("Formulário enviado com sucesso!");
      console.log({ name, email, password, confirmPassword });
      // Aqui você pode chamar uma função para enviar os dados, ex: login()
      setName(""); // Limpa o campo "name"
      setEmail(""); // Limpa o campo "email"
      setPassword(""); // Limpa o campo "password"
      setConfirmPassword(""); // Limpa o campo "Confimação do password"
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campo Nome */}
      <div>
        <Input
          type="text"
          name="name"
          label="Nome"
          id="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={setName}
          onBlur={validateName} // Valida o campo ao perder o foco
        />
        {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
      </div>

      {/* Campo Senha */}
      <div>
        <Input
          type="email"
          name="email"
          label="E-mail"
          id="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={setEmail}
          onBlur={validateEmail} // Valida o campo ao perder o foco
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
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
          onBlur={validatePassword} // Valida o campo ao perder o foco
        />
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}
      </div>

      <div>
        <Input
          type="password"
          name="confirmpassword"
          label="Confirme sua Senha"
          id="confirmPassword"
          placeholder="Repita a sua senha"
          value={confirmPassword}
          onChange={setConfirmPassword}
          onBlur={validateConfirmPassword} // Valida o campo ao perder o foco
        />
        {confirmPasswordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}
      </div>

      {/* Botão de Envio */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormUp;
