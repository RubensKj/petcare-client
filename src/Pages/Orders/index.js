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

  // NAME OF DIVS
  const btnLoadMoreOrders = '.btn-loadMore-orders';
  const btnLoadMoreOrdersFinished = '.btn-loadMore-orders-finished';
  // CSS CLASS THAT HIDE THE BUTTON
  const hideButtons = 'not-visible-loadMore-orders';

  // ORDER NOT CONTAINING FINISHED
  const [ordersInProcess, setOrdersInProcess] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [actPage, setActPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // ORDER CONTAINING FINISHED
  const [ordersIsFinished, setOrdersIsFinished] = useState([]);
  const [totalPagesFinished, setTotalPagesFinished] = useState(0);
  const [actPageFinished, setActPageFinished] = useState(0);
  const [isLoadingOrdersFinished, setIsLoadingOrdersFinished] = useState(true);


  async function getOrdersFromAPI(page) {
    await api.get(`/get-orders/${page}`).then(res => {
      setOrdersInProcess(res.data.content);
      setTotalPages(res.data.totalPages);
      setActPage(res.data.number);
      setIsLoading(false);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(btnLoadMoreOrders);
        if (btn !== null) {
          btn.classList.add(hideButtons);
        }
      }
    });
  }

  async function getOrdersFinishedFromAPI(page) {
    await api.get(`/get-orders-finished/${page}`).then(res => {
      setOrdersIsFinished(res.data.content);
      setTotalPagesFinished(res.data.totalPages);
      setActPageFinished(res.data.number);
      setIsLoadingOrdersFinished(false);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(btnLoadMoreOrdersFinished);
        if (btn !== null) {
          btn.classList.add(hideButtons);
        }
      }
    });
  }

  useEffect(() => {
    getOrdersFromAPI(0);
    getOrdersFinishedFromAPI(0);
  }, []);

  useEffect(() => {
    if ((actPage + 1) >= totalPages && isLoading === false) {
      let btn = document.querySelector(btnLoadMoreOrders);
      if (btn !== null) {
        btn.classList.add(hideButtons);
      }
    }
  }, [actPage, totalPages, isLoading]);

  async function loadMoreOrdersNotFinished(page) {
    await api.get(`/get-orders/${page}`).then(res => {
      setOrdersInProcess(ordersInProcess.concat(res.data.content));
      setActPage(res.data.number);
      setIsLoading(false);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(btnLoadMoreOrders);
        if (btn !== null) {
          btn.classList.add(hideButtons);
        }
      }
    });
  }

  useEffect(() => {
    if ((actPageFinished + 1) >= totalPagesFinished && isLoadingOrdersFinished === false) {
      let btn = document.querySelector(btnLoadMoreOrdersFinished);
      if (btn !== null) {
        btn.classList.add(hideButtons);
      }
    }
  }, [actPageFinished, totalPagesFinished, isLoadingOrdersFinished]);

  async function loadMoreOrdersFinished(page) {
    await api.get(`/get-orders-finished/${page}`).then(res => {
      setOrdersIsFinished(ordersIsFinished.concat(res.data.content));
      setActPageFinished(res.data.number);
      setActPageFinished(false);
      if (res.data.totalPages <= 1) {
        let btn = document.querySelector(btnLoadMoreOrdersFinished);
        if (btn !== null) {
          btn.classList.add(hideButtons);
        }
      }
    });
  }

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
                  <BottomLoadMore onClick={() => loadMoreOrdersNotFinished(actPage + 1)} setClassName="btn-loadMore-orders" text="Carregar mais pedidos." />
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
              <BottomLoadMore onClick={() => loadMoreOrdersFinished(actPageFinished + 1)} setClassName="btn-loadMore-orders-finished" text="Carregar mais pedidos." />
            </>
          ) : ('')}
        </div>
      </div>
    </>
  );
}
