import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import "./App.css";
import dayjs from "dayjs";
import Modal from "./modal/modal";

function App() {
  const [value, onChange] = useState(new Date());
  let Days = value.getDate();
  let Month = value.getMonth() + 1;
  let Combine = Month + "월 " + Days + "일의 일정입니다.";

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = (e) => {
    setModalOpen(false);
    e.stopPropagation();
  };

  const rendering = () => {
    const result = [];
    for (let i = 1; i < 31; i++) {
      result.push(
        <Modal key={i} open={modalOpen} close={closeModal} header={Combine}>
          {Days}일에는요...
        </Modal>
      );
    }
    return result;
  };
  return (
    <>
      <div className="calendar-body" onClick={openModal}>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => dayjs(date).format("DD")}
        />
        {/* {Days === 1 ? (
          <Modal open={modalOpen} close={closeModal} header={Combine}>
            {Days}일에는 우거진 갈대의 섬(카드), 블루홀 섬(쌀)이 예정되어
            있습니다.
          </Modal>
        ) : Days === 2 ? (
          <Modal open={modalOpen} close={closeModal} header={Combine}>
            {Days}일에는 우거진 갈대의 섬(카드), 블루홀 섬(쌀)이 예정되어
            있습니다.
          </Modal>
        ) : Days === 2 ? (
          <Modal open={modalOpen} close={closeModal} header={Combine}>
            {Days}일에는 우거진 갈대의 섬(카드), 블루홀 섬(쌀)이 예정되어
            있습니다.
          </Modal>
        ) : null} */}
        {rendering()};
        {/* <Modal open={modalOpen} close={closeModal} header={Combine}></Modal> */}
        {/* {console.log(Month + "월" + Days + "일 입니다")} */}
      </div>
    </>
  );
}

export default React.memo(App);
