import React, { useEffect, useState } from 'react';

import HeaderBoxAuth from '../../Components/HeaderBoxAuth';
import HeaderMainPage from '../../Components/HeaderMainPage';
import HeartAnimal from '../../Assets/HeartAnimal.svg';

import { isAuthenticated, login } from '../../Services/auth';
import api from '../../Services/api';

import './styles.css';

export default function LogIn(props) {
  const INITIAL_STATE = {
    email: '',
    password: '',
  }
  const [user, setUser] = useState(INITIAL_STATE);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      props.history.push('/');
    }
  }, [props.history])

  async function handleLogin(e) {
    e.preventDefault();
    const { email, password } = user;

    if (!email || !password) {
      setError("Preencha todos os campos para entrar");
      return;
    } else {
      if (!(email.includes('@') && email.includes('.com'))) {
        setError("Este email não é válido");
        return;
      }

      if (password.length > 100) {
        setError("Está senha não é válida");
        return;
      }

      await api.post("/auth/login", JSON.stringify(user)).then(res => {
        login(res.data.accessToken);
        props.history.push('/');
      }).catch(error => {
        console.log(JSON.stringify(error))
        switch (error.message) {
          case "Network Error":
            return setError("O servidor está temporariamente desligado");
          case "Request failed with status code 404":
            return setError("Não existe nenhuma empresa associada a este email.");
          case "Request failed with status code 401":
            return setError("Email ou senha incorretos.");
          default:
            return setError("");
        }
      })
    }
  }

  return (
    <>
      <HeaderMainPage props={props} validate={false} />
      <div className="container-login">
        <div className="content-login-page">
          <div className="box-login">
            <HeaderBoxAuth message="Entre no PetCare" />
            <form className="login-form" onSubmit={handleLogin} autoComplete="off">
              <div className="error-area">
                <h3 className="error-login">{error}</h3>
              </div>
              <div className="input-area">
                <label>Email:</label>
                <div className="input-div">
                  <input type="text" name="email" onChange={e => setUser({ ...user, email: e.target.value })} />
                </div>
              </div>
              <div className="input-area">
                <label>Senha:</label>
                <div className="input-div">
                  <input type="password" name="password" onChange={e => setUser({ ...user, password: e.target.value })} autoComplete="on" />
                </div>
              </div>
              <div className="button-area">
                <button type="submit">Entrar</button>
              </div>
            </form>
          </div>
          <div className="box-ref-signup">
            <div className="content-signup-box">
              <div className="header-ref-signup">
                <span>Não possui cadastro?</span>
              </div>
              <div className="button-signup-area">
                <a href="/cadastrar">Cadastre-se</a>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-image">
          <img src={HeartAnimal} alt="Pet Care Business" />
        </div>
      </div>
    </>
  );
}
