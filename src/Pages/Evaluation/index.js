import React from 'react';

import './styles.css';

import HeaderMainPage from '../../Components/HeaderMainPage';
import TransitionOfSetting from "../../Components/TransitionOfSetting";
import Paw from "../../Assets/PawLogoForEvaluation";
import TextArea from "../../Components/TextArea";
import ButtonForm from "../../Components/ButtonForm";
import ButtonAction from "../../Components/ButtonToOnClick";

export default function Content(props) {
  return (
    <>
      <HeaderMainPage props={props} />
      <div className="container-evaluation">
        <div className="content-evaluation">
          <TransitionOfSetting title="Deixe sua avaliação!" description="Deixe sua avaliação para o pet shop, para ajudar os outros usuários." />
          <form className="form-evaluation">
            <div className="company-image-area">
              <img src="https://scontent.fbnu1-1.fna.fbcdn.net/v/t1.0-9/36919020_268531707232126_6615945512266760192_n.jpg?_nc_cat=104&_nc_oc=AQngSarKTb4gI6aISPVtMJSS-ag8WbTf3eyg5grnoz6lEfWd4cD8bWaGBQsi5K2rVTU&_nc_ht=scontent.fbnu1-1.fna&oh=5e473888721df6357c752d599ef7f6ee&oe=5E134CF4" alt="Company Logo" />
            </div>
            <div className="info-form">
              <h2>Nome da empresa</h2>
              <div className="image-paw">
                <Paw width="25px" height="25px" idName="first" className="first-paw" />
                <Paw width="25px" height="25px" idName="second" className="second-paw" />
                <Paw width="25px" height="25px" idName="third" />
                <Paw width="25px" height="25px" idName="fourth" />
                <Paw width="25px" height="25px" idName="fifth" />
              </div>
              <h4 className="message-before-text-area">Deixe um comentário</h4>
              <TextArea placeholder="Mensagem (Opcional)" />
              <ButtonForm text="Avaliar" />
              <ButtonAction text="Cancelar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}