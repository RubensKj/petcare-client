import React from 'react';

import ProductLogo from '../../Assets/ProductAvatarDefault.svg';

import './styles.css';

export default function ModalProduct({ product, setIsOpen }) {
    function handleCloseWhenClickInBack() {
        setIsOpen(false);
    }

    return (
        <div className="modal-product-item">
            <div id="card-product-item" className="card-product-item">
                <div className="header-product-card">
                    <div className="button-close-modal" role="button" onClick={handleCloseWhenClickInBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec910a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        <span>Voltar ao pet shop</span>
                    </div>
                </div>
                <div id="information-card-product-scroll" className="information-card-product">
                    <div className="product-img">
                        <img src={product.avatar ? (product.avatar) : (ProductLogo)} alt="Product" />
                    </div>
                    <div className="product-info-card-modal">
                        <h1>{product.name}</h1>
                        <span>{product.description}</span>
                        <span className="price">Preço R$ {product.price.toFixed(2)}</span>
                        <span>Quantidade em estoque: {product.quantityStore}</span>
                        <span>Peso: {product.weight}</span>
                        <span>Indicação: {product.indicationPet}</span>
                        <span>Porte: {product.porte}</span>
                        <span>Idade: {product.age}</span>
                        <span>Transgênicos: {product.trangenic}</span>
                        <span>Composição: {product.composition}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
