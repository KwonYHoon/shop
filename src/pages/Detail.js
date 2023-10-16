import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import "../css/detail.css";
import "swiper/css";
import "swiper/css/navigation";

import ListCard from "../common/ListCard";

export default function Detail({list}) {
  let { id } = useParams();
  let findId = list.find((a) => a._id === Number(id));

  let dataList = list.filter((a)=> a.category === findId.category);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="Detail mw">
      <div className="DetailCon">
        <div className="imgCon">
          <img src={`/img/${findId.img}`} alt={findId.title} />
        </div>
        <div className="DetailText">
          <h2>{findId.title}</h2>
          <p>{Number(findId.price).toLocaleString()}원</p>

          <div className="cartWrap">
            <div className="countBtn">
              <span className="plus">-</span>
              <span>1</span>
              <span className="minus">+</span>
            </div>
            <div className="cartBtn">
              <span>ADD TO CART</span>
            </div>
            <Button variant="primary" onClick={handleShow}>
              공지사항
            </Button>
          </div>
        </div>
      </div>

      <div className="detailTab">
        {/* <button>상품설명</button>
        <button>추가설명</button>
        <button>구매리뷰</button> */}
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3">

          <Tab eventKey="home" title="상품설명">
            상품설명
          </Tab>
          <Tab eventKey="profile" title="추가설명">
            추가설명
          </Tab>
          <Tab eventKey="contact" title="구매리뷰" disabled>
            구매리뷰
          </Tab>
        </Tabs>

      </div>

      <h2>Similer Items</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="listCon mySwiper"
      >
        {dataList.map((a, i) => {
          return (
            <SwiperSlide className="slide" ket = {i}>
              <ListCard list = {a}/>
            </SwiperSlide>
          )})}
      </Swiper>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>공지사항</Modal.Title>
        </Modal.Header>
        <Modal.Body>공지사항 내용</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}
