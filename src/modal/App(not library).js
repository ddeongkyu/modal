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

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="calendar-body" onClick={openModal}>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => dayjs(date).format("DD")}
        />
        {Days < 30 ? (
          <Modal open={modalOpen} close={closeModal} header={Combine}>
            오늘은 {Month}월 {Days}일 인데요.
          </Modal>
        ) : null}

        {/* {console.log(Month + "월" + Days + "일 입니다")} */}
      </div>
    </>
  );
}

export default App;
