import React from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import Loading from '../../Components/Loading';
import TransitionOfSetting from '../../Components/TransitionOfSetting';
import Input from '../../Components/Input';
import ButtonForm from '../../Components/ButtonForm';

import { useSelector, useDispatch } from 'react-redux';
import { addValue, setErrors } from '../../Store/Actions/User';
import { setTitleAlert, setDescriptionAlert, setSuccessedAlert } from '../../Store/Actions/Alert';

import './styles.css';
import api from '../../Services/api';

export default function Profile(props) {
  const state = useSelector(state => state.User);
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    const { completeName, phoneNumber } = state.data;
    const { street, placeNumber, complement, neighborhood, cep, city } = state.data.address;
    if (!completeName || !phoneNumber) {
      dispatch(setErrors("Preencha pelo menos o nome completo e telefone para alterar o seu perfil"));
    } else {
      if (completeName.length >= 255) {
        dispatch(setErrors("Nome muito longo"));
      }

      if (phoneNumber.length <= 0 || phoneNumber.length > 15) {
        dispatch(setErrors("Número de telefone inválido"));
      }

      if (street !== undefined && street.length > 60) {
        dispatch(setErrors("Endereço inválido"));
      }

      if (placeNumber !== undefined && placeNumber > 200000) {
        dispatch(setErrors("Número inválido"));
      }

      if (complement !== undefined && complement.length > 100) {
        dispatch(setErrors("Complemento inválido"));
      }

      if (neighborhood !== undefined  && neighborhood.length > 650) {
        dispatch(setErrors("Bairro inválido"));
      }

      if (cep !== undefined && cep.length > 10) {
        dispatch(setErrors("CEP inválido"));
      }

      if (city !== undefined && city.length > 100) {
        dispatch(setErrors("Nome de cidade inválido"));
      }

      if (state.data.address.state !== undefined && state.data.address.state.length > 2) {
        dispatch(setErrors("Nome de estado inválido"));
      }

      await api.post('/users/edit', JSON.stringify(state.data)).then(() => {
        dispatch(setTitleAlert("Alteração feita com sucesso!"));
        dispatch(setDescriptionAlert(completeName + ` sua conta foi alterada com sucesso!`));
        dispatch(setSuccessedAlert(true));
        props.history.push('/');
      })
    }
  };

  return (
    <>
      <HeaderMainPage props={props} validate={true} />
      <div className="container-profile">
        {state.isLoading ? (<Loading />) : (
          <div className="inputs-change-profile">
            <TransitionOfSetting errors={state.errors} title="Meu perfil" description="Este é seu perfil, aqui você pode alterar as suas informações" />
            <form className="form-profile-change" onSubmit={handleSubmit} >
              <Input type="text" value={state.data.cpf} placeholder="CPF" onChange={e => dispatch(addValue('SET_CPF', e.target.value))} messageBottom="Esse foi o CPF cadastrado nessa conta, ele não pode ser alterado" disabled={true} />
              <Input type="text" value={state.data.email} placeholder="Email" onChange={e => dispatch(addValue('SET_EMAIL', e.target.value))} messageBottom="Esse email é utilizado para entrar nesta conta" disabled={true} />
              <Input type="text" value={state.data.completeName ? (state.data.completeName) : ('')} placeholder="Nome completo" onChange={e => dispatch(addValue('SET_COMPLETE_NAME', e.target.value))} />
              <Input type="text" value={state.data.phoneNumber} placeholder="Telefone" onChange={e => dispatch(addValue('SET_PHONENUMBER', e.target.value))} messageBottom="Caso o pet shop necessitar, será ligado neste número." />
              <TransitionOfSetting title="Informações de endereço" description="Utilizado para o Pet Care achar os pet shops mais perto de você :)" style={{ marginTop: 20 + 'px' }} />
              <Input type="text" value={state.data.address.street !== null ? (state.data.address.street) : ('')} style={{ marginTop: 20 + 'px' }} placeholder="Endereço" onChange={e => dispatch(addValue('SET_STREET', e.target.value))} />
              <Input type="number" value={state.data.address.placeNumber !== null ? (state.data.address.placeNumber) : (0)} placeholder="Número" onChange={e => dispatch(addValue('SET_PLACENUMBER', e.target.value))} />
              <Input type="text" value={state.data.address.complement !== null ? (state.data.address.complement) : ('')} placeholder="Complemento" onChange={e => dispatch(addValue('SET_COMPLEMENT', e.target.value))} messageBottom="" />
              <Input type="text" value={state.data.address.neighborhood !== null ? (state.data.address.neighborhood) : ('')} placeholder="Bairro" onChange={e => dispatch(addValue('SET_NEIGHBORHOOD', e.target.value))} messageBottom="" />
              <Input type="text" value={state.data.address.cep !== null ? (state.data.address.cep) : ('')} placeholder="CEP" onChange={e => dispatch(addValue('SET_CEP', e.target.value))} />
              <div className="city-states">
                <div className="city-input inputed">
                  <input type="text" value={state.data.address.city !== null ? (state.data.address.city) : ('')} placeholder="Cidade" onChange={e => dispatch(addValue('SET_CITY', e.target.value))} />
                </div>
                <div className="states inputed">
                  <input type="text" value={state.data.address.state !== null ? (state.data.address.state) : ('')} placeholder="UF" onChange={e => dispatch(addValue('SET_UF', e.target.value))} />
                </div>
              </div>
              <ButtonForm text="Alterar informações do perfil" />
            </form>
          </div>
        )}
      </div>
    </>
  );
}
