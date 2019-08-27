import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import TransitionOfSetting from '../../Components/TransitionOfSetting';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import './styles.css';

export default function Profile() {
  return (
    <>
      <HeaderMainPage />
      <div className="container-profile">
        <div className="inputs-change-profile">
          <TransitionOfSetting title="Meu perfil" description="Este é seu perfil, aqui você pode alterar as suas informações" />
          <form className="form-profile-change">
            <Input type="text" placeholder="CPF" messageBottom="Esse foi o CPF cadastrado nessa conta, ele não pode ser alterado" disabled={true} />
            <Input type="text" placeholder="Email" messageBottom="Esse email é utilizado para entrar nesta conta" disabled={true} />
            <Input type="text" placeholder="Nome completo" />
            <Input type="text" placeholder="Telefone" messageBottom="Caso o pet shop necessitar, será ligado neste número." />
            <TransitionOfSetting title="Informações de endereço" description="Utilizado para o Pet Care achar os pet shops mais perto de você :)" style={{ marginTop: 20 + 'px' }} />
            <Input type="text" style={{ marginTop: 20 + 'px' }} placeholder="Endereço" />
            <Input type="number" placeholder="Número" />
            <Input type="text" placeholder="Complemento" messageBottom="" />
            <Input type="text" placeholder="CEP" />
            <div className="city-states">
              <div className="city-input inputed">
                <input type="text" placeholder="Cidade" onChange={null} />
              </div>
              <div className="states inputed">
                <input type="text" placeholder="UF" onChange={null} />
              </div>
            </div>
            <ButtonForm text="Alterar informações do perfil" />
          </form>
        </div>
      </div>
    </>
  );
}
