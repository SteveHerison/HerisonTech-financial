import React, { useState } from "react";
import Input from "./Input";
import { useUserContext } from "@/contexts/AuthContext"; // Import UserContext to access createUser
import { useRouter } from "next/navigation";

const FormUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { createUser } = useUserContext();

  const validateName = () => {
    if (!name.trim()) {
      setNameError("O nome é obrigatório.");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError("O e-mail é obrigatório.");
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

  const validateConfirmPassword = () => {
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("A confirmação de senha é obrigatória.");
      return false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("A senha precisa ser idêntica.");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      try {
        await createUser(name, email, password, confirmPassword); // Call createUser function from UserContext
        console.log("Usuário cadastrado com sucesso!");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        router.push("/signin");
      } catch (err) {
        console.error("Erro ao cadastrar usuário:", err);
      }
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
          type="email"
          name="email"
          label="E-mail"
          id="email"
          placeholder="Digite seu E-mail"
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

      <div>
        <Input
          type="password"
          name="confirmPassword"
          label="Confirme sua Senha"
          id="confirmPassword"
          placeholder="Repita a sua senha"
          value={confirmPassword}
          onChange={setConfirmPassword}
          onBlur={validateConfirmPassword}
        />
        {confirmPasswordError && (
          <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
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

export default FormUp;
