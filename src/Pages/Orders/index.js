import React, { useEffect, useState } from 'react';

import HeaderMainPage from '../../Components/HeaderMainPage';
import Loading from '../../Components/Loading';
import AlertCard from '../../Components/AlertCard';
import EmptyContent from '../../Components/EmptyContent';
import BottomLoadMore from '../../Components/BottomLoadMore';
import OrderCard from '../../Components/OrderCard';
import Subtitle from '../../Components/Subtitle';

import api from '../../Services/api';
import { useSelector } from 'react-redux';

import './styles.css';

export default function Orders(props) {
  const alert = useSelector(state => state.Alert);

  // ORDER NOT CONTAINING FINISHED
  const [ordersInProcess, setOrdersInProcess] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [actPage, setActPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // ORDER CONTAINING FINISHED
  const [ordersIsFinished, setOrdersIsFinished] = useState([]);
  const [totalPagesFinished, setTotalPagesFinished] = useState(0);
  const [actPageFinished, setActPageFinished] = useState(0);


  async function getOrdersFromAPI(page) {
    await api.get(`/get-orders/${page}`).then(res => {
      setOrdersInProcess(res.data.content);
      setTotalPages(res.data.totalPages);
      setActPage(res.data.number);
      setIsLoading(false);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector('.btn-loadMore-orders');
        btn.classList.add('not-visible-loadMore-orders');
      }
    });
  }

  async function getOrdersFinishedFromAPI(page) {
    await api.get(`/get-orders-finished/${page}`).then(res => {
      setOrdersIsFinished(res.data.content);
      setTotalPagesFinished(res.data.totalPages);
      setActPageFinished(res.data.number);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector('.btn-loadMore-orders-finished');
        //btn.classList.add('not-visible-loadMore-orders');
      }
    });
  }

  useEffect(() => {
    getOrdersFromAPI(0);
    getOrdersFinishedFromAPI(0);
  }, []);

  return (
    <>
      <HeaderMainPage props={props} validate={true} />
      <div className="container-orders">
        <AlertCard alert={alert} />
        <div className="content-orders">
          <Subtitle text="Pedidos" />
          {isLoading ? (<Loading />) : (
            <>
              {ordersInProcess.length > 0 ? (
                <>
                  <div className="list-orders">
                    {ordersInProcess.map(order => <OrderCard key={order.id} order={order} />)}
                  </div>
                  <BottomLoadMore setClassName="btn-loadMore-orders" text="Carregar mais pedidos." />
                </>
              ) : (<EmptyContent title="Seus pedidos!" description="Você não possui nenhum pedido ainda, faça seu pedido em algum pet shop para que ele apareça aqui." />)}
            </>
          )}
          {ordersIsFinished.length > 0 ? (
            <>
              <Subtitle text="Finalizados" />
              <div className="list-orders">
                {ordersIsFinished.map(orderFinished => <OrderCard key={orderFinished.id} order={orderFinished} finished />)}
              </div>
              <BottomLoadMore setClassName="btn-loadMore-orders-finished" text="Carregar mais pedidos." />
            </>
          ) : ('')}
        </div>
      </div>
    </>
  );
}
