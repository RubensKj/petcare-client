import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import HeaderBoxAuth from '../../Components/HeaderBoxAuth';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import { isAuthenticated } from '../../Services/auth';
import { addAnimationToInput } from '../../Helpers/Functions';

import api from '../../Services/api';
//import { addErrors, addInput, changePhase } from '../../Store/Actions/Register';

import './styles.css';

const INITIAL_STATE = {
  email: '',
  password: '',
  cpf: ''
};

export default function SignUp(props) {
  const [user, setUser] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    let stateLocal = localStorage.getItem('state');
    if (stateLocal !== null && stateLocal.phase !== 1) {
      localStorage.removeItem('state');
    }

    if (isAuthenticated()) {
      props.history.push('/');
    }
  }, [props.history]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password, cpf } = user;
    if (!email || !password || !cpf) {
      setErrors("Preencha todos os dados para se cadastrar");
      addAnimationToInput();
    } else {
      if (!(email.includes('@') && email.includes('.com'))) {
        setErrors("Este email não é válido");
        addAnimationToInput();
        return;
      }

      if (password.length <= 3 || password.length >= 100) {
        setErrors("Por favor inserir uma senha válida");
        addAnimationToInput();
        return;
      }

      if(cpf.length > 11) {
        setErrors("Este CPF não é válido");
        return;
      }

      var Soma;
      var Resto;
      Soma = 0;
      if (cpf === "00000000000") {
        setErrors("Este CPF não é válido");
        return;
      }

      for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto === 10) || (Resto === 11)) Resto = 0;
      if (Resto !== parseInt(cpf.substring(9, 10))) return false;

      Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto === 10) || (Resto === 11)) Resto = 0;
      if (Resto !== parseInt(cpf.substring(10, 11))) {
        setErrors("Este CPF não é válido");
        return;
      }

      await api.post("/auth/signup", JSON.stringify(user)).then(() => {
        setErrors('');
        props.history.push('/entrar');
      }).catch(error => {
        switch (error.message) {
          case "Network Error":
            return setErrors("O servidor está temporariamente desligado");
          case "Request failed with status code 400":
            return setErrors("Este email já está sendo usado.");
          default:
            return setErrors("");
        }
      });
    }
  }

  return (
    <>
      <HeaderMainPage hideBtns={true} />
      <div className="container-signup">
        <div className="box-signup">
          <HeaderBoxAuth message="Cadastre-se no PetCare" />
          <form className="signup-form" onSubmit={handleSubmit} autoComplete="off" autoCapitalize="off" autoCorrect="off">
            <div className="error-area">
              <h3 className="error-signup">{errors}</h3>
            </div>
            <div className="input-area">
              <label>Email: </label>
              <Input type="text" name="email" onChange={e => setUser({ ...user, email: e.target.value })} messageBottom="Este será o email para entrar no sistema do PetCare." />
            </div>
            <div className="input-area">
              <label>Senha: </label>
              <Input type="password" name="password" onChange={e => setUser({ ...user, password: e.target.value })} messageBottom="Essa senha será usada para entrar no PetCare, com o email." />
            </div>
            <div className="input-area">
              <label>CPF: </label>
              <Input type="text" name="cpf" onChange={e => setUser({ ...user, cpf: e.target.value })} messageBottom="CPF do dono desta conta." />
            </div>
            <ButtonForm text="Cadastrar" />
          </form>
        </div>
        <div className="box-ref-login">
          <div className="content-login-box">
            <div className="header-ref-login">
              <span>Já possui uma empresa cadastrada?</span>
            </div>
            <div className="button-login-area">
              <a href="/entrar">Entrar</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
