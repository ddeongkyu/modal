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

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="calendar-body">
      <div onClick={openModal}>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => dayjs(date).format("DD")}
        ></Calendar>
        {Days === 1 ? (
          <Modal open={modalOpen} close={closeModal} header="어쩔티비">
            오늘은 {Month}월 {Days}일 인데요.
          </Modal>
        ) : (
          console.log("ㅋㅋㅋ레후")
        )}
        {/* {console.log(Month + "월" + Days + "일 입니다")} */}
        {/* <button onClick={openModal}>zzzz</button> */}
      </div>
    </div>
  );
}

export default App;
