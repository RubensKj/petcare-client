import React, { useState } from 'react';

import Paw from "../../Assets/PawLogoForEvaluation";
import TextArea from "../TextArea";
import ButtonForm from "../ButtonForm";
import ButtonToOnClick from "../ButtonToOnClick";
import ButtonNotClickable from "../ButtonNotClickable";

import { useSelector } from 'react-redux';

import './styles.css';
import api from '../../Services/api';

export default function ModalEvaluation({ props, idDiv, orderInfo, isEvaluated }) {

  const user = useSelector(state => state.User.data);

  const [ratePaws, setRatePaws] = useState(0);
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState('');
  const modal = document.getElementById(idDiv);


  window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.remove('openModalEvaluation');
    }
  }

  function handleOnMouseEnter(number) {
    let paws = document.querySelectorAll('.paw-evaluation');
    for (var i = 0; i < number; i++) {
      paws[i].classList.add('setHovered');
    }
  }

  function handleOnMouseLeave(number) {
    let paws = document.querySelectorAll('.paw-evaluation');
    for (var i = 0; i < number; i++) {
      paws[i].classList.remove('setHovered');
    }
  }

  function cancelEvaluation(e) {
    e.preventDefault();
    if (modal !== null) {
      modal.classList.remove('openModalEvaluation');
    }
  }

  function handleRatePaws(number) {
    let paws = document.querySelectorAll('.paw-evaluation');

    paws.forEach(paw => paw.classList.remove('rateSelectedPaws'));

    for (var i = 0; i < number; i++) {
      paws[i].classList.add('rateSelectedPaws');
    }

    switch (number) {
      case 1:
        return setRatePaws(1);
      case 2:
        return setRatePaws(2);
      case 3:
        return setRatePaws(3);
      case 4:
        return setRatePaws(4);
      case 5:
        return setRatePaws(5);
      default:
        return setRatePaws(0);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isEvaluated) {
      if (ratePaws <= 0 || ratePaws > 5) {
        setErrors('Por favor é obrigatório uma nota!');
        return;
      }

      let cnpj = orderInfo.cnpj;

      let evaluation = {
        idOfOrder: orderInfo.id,
        idFromUserEvaluated: user.id,
        nameOfUser: user.completeName,
        rate: ratePaws,
        description: description,
        cnpj: cnpj,
      }


      if (cnpj !== undefined) {
        await api.post(`/evaluation-create`, JSON.stringify(evaluation)).then(res => {
          props.history.push('/pedidos');
        });
      }
    } else {
      setErrors('A empresa já foi avaliada!');
      return;
    }
  }

  return (
    <div id={idDiv} className="modal-evaluation">
      <form className="form-evaluation" onSubmit={e => handleSubmit(e)}>
        <div className="company-name-area">
          <h2>{orderInfo.nameCompany}</h2>
        </div>
        <span className="errors-evaluation">{errors}</span>
        <div className="info-form">
          <h2>Quantas patinhas o pet shop merece?</h2>
          <div className="image-paw">
            <Paw width="25px" height="25px" onClick={() => handleRatePaws(1)} onMouseEnter={() => handleOnMouseEnter(1)} onMouseLeave={() => handleOnMouseLeave(1)} />
            <Paw width="25px" height="25px" onClick={() => handleRatePaws(2)} onMouseEnter={() => handleOnMouseEnter(2)} onMouseLeave={() => handleOnMouseLeave(2)} />
            <Paw width="25px" height="25px" onClick={() => handleRatePaws(3)} onMouseEnter={() => handleOnMouseEnter(3)} onMouseLeave={() => handleOnMouseLeave(3)} />
            <Paw width="25px" height="25px" onClick={() => handleRatePaws(4)} onMouseEnter={() => handleOnMouseEnter(4)} onMouseLeave={() => handleOnMouseLeave(4)} />
            <Paw width="25px" height="25px" onClick={() => handleRatePaws(5)} onMouseEnter={() => handleOnMouseEnter(5)} onMouseLeave={() => handleOnMouseLeave(5)} />
          </div>
          <h4 className="message-before-text-area">Deixe um comentário</h4>
          <TextArea placeholder="Mensagem (Opcional)" onChange={e => setDescription(e.target.value)} />
          {isEvaluated ? (<ButtonNotClickable text="Avaliar" />) : (<ButtonForm text="Avaliar" />)}
          <ButtonToOnClick text="Cancelar" onClick={(e) => cancelEvaluation(e)} />
        </div>
      </form>
    </div>
  );
}
