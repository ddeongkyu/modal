import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import "./App.css";
import dayjs from "dayjs";
import Modal from "./modal/modal";

function App() {
  const [value, onChange] = useState(new Date());
  let days = value.getDate();
  let month = value.getMonth() + 1;
  let combine = month + "월 " + days + "일의 일정입니다.";
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  };
  const nomralDay = days + "일의 모험섬 : ";
  const d01 = "어쩔티비";
  const d02 = "어쩔아이폰12promax";
  const d03 = (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {`09시 ~ 13시 까지의 모험섬 : ★환영나비 섬(카드)★, 볼라르 섬, 스노우팡 아일랜드
      
19시~ 23시 까지의 모험섬 : ★메데이아(골드)★,★쿵덕쿵 아일랜드(카드)★, 기회의 섬`}
    </div>
  );
  const d04 = nomralDay + "★블루홀 섬(카드)★, 몬테 섬, 수라도";
  const d05 =
    nomralDay + "★하모니 섬(골드)★, ★죽음의 협곡(카드)★, 쿵덕쿵 아일랜드";
  const d06 = nomralDay + "★환영나비 섬(카드)★, 스노우팡 아일랜드, 블루홀 섬";
  const d07 = nomralDay + "★고요한 안식의 섬(골드)★, ★포르페(카드)★, 볼라르 섬";
  const d08 = nomralDay + "★기회의 섬(카드)★, 포르페, 스노우팡 아일랜드";
  const d09 = (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {`09시 ~ 13시 까지의 모험섬 : ★하모니 섬(카드)★, 쿵덕쿵 아일랜드, 죽음의 협곡

19시~ 23시 까지의 모험섬 : ★환영나비 섬(카드), 볼라르 섬, 메데이아`}
    </div>
  );
  const d10 = (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {`09시 ~ 13시 까지의 모험섬 :★블루홀 섬(카드)★, 기회의 섬, 몬테 섬

19시~ 23시 까지의 모험섬 : ★고요한 안식의 섬(골드)★, 수라도, 우거진 갈대의 섬`}
    </div>
  );
  const d11 = nomralDay + "★쿵덕쿵 아일랜드(카드)★, 하모니 섬, 볼라르 섬";
  const d12 =
    nomralDay + "★고요한 안식의 섬(카드)★, 우거진 갈대의 섬, 기회의 섬";
  const d13 = nomralDay + "★수라도(골드)★, ★블루홀 섬(카드)★, 죽음의 협곡";
  const d14 = nomralDay + "★죽읍의 협곡(카드)★, 몬테 섬, 환영나비 섬";
  const d15 = nomralDay + "★포르페(카드)★, 스노우팡 아일랜드, 블루홀 섬";
  const d16 = (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {`09시 ~ 13시 까지의 모험섬 : ★스노우팡 아일랜드(카드)★, 포르페, 볼라르 섬

19시~ 23시 까지의 모험섬 :★쿵덕쿵 아일랜드(골드)★,★환영나비 섬(카드)★, 기회의 섬`}
    </div>
  );
  const d17 = (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {`09시 ~ 13시 까지의 모험섬 :★고요한 안식의 섬(카드)★, 하모니 섬, 죽음의 협곡

19시~ 23시 까지의 모험섬 :★메데이아(카드)★, 수라도, 우거진 갈대의 섬`}
    </div>
  );
  const d18 = nomralDay + "★스노우팡 아일랜드(카드)★, 볼라르 섬, 몬테 섬";
  const d19 = nomralDay + "★기회의 섬(골드)★, ★몬테 섬(카드)★, 포르페";
  const d20 = nomralDay + "★수라도(카드)★, 고요한 안식의 섬, 환영나비 섬";
  const d21 = nomralDay + "★쿵덕쿵 아일랜드(카드), 하모니 섬, 우거진 갈대의 섬";
  const d22 = nomralDay + "★블루홀 섬(골드)★, 메데이아, 죽음의 협곡";
  const d23 = (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {`09시 ~ 13시 까지의 모험섬 : ★볼라르 섬(카드)★, 포르페, 몬테 섬

19시~ 23시 까지의 모험섬 : ★블루홀 섬(카드), 하모니 섬, 쿵덕쿵 아일랜드`}
    </div>
  );
  const d24 = (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {`09시 ~ 13시 까지의 모험섬 :★스노우팡 아일랜드(카드)★, 수라도, 환영나비 섬

19시~ 23시 까지의 모험섬 :★기회의 섬(골드)★, ★메데이아(카드)★, 우거진 갈대의 섬`}
    </div>
  );
  const d25 =
    nomralDay + "★스노우팡 아일랜드(카드)★, 죽음의 협곡, 고요한 안식의 섬";
  const d26 = nomralDay + "★쿵덕쿵 아일랜드(카드)★, 기회의 섬, 메데이아";
  const d27 = nomralDay + "★하모니 섬(골드), 수라도, 죽음의 협곡";
  const d28 = nomralDay + "★환영나비 섬(카드)★, 블루홀 섬, 고요한 안식의 섬";
  const d29 = nomralDay + "★우거진 갈대의 섬(카드)★, 몬테 섬, 볼라르 섬";
  const d30 = (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {`09시 ~ 13시 까지의 모험섬 : ★볼라르(골드)★, ★포르페(카드)★, 우거진 갈대의 섬

19시~ 23시 까지의 모험섬 :★메데이아(카드)★, 환영나비 섬, 몬테 섬`}
    </div>
  );
  const d31 = "";

  // const rendering = () => {
  //   const result = {};
  //   for (let i = 1; i < 32; i++) {
  //     result.push(d[i]);
  //   }
  //   return result;
  // };
  return (
    <div className="calendar-body" onClick={openModal}>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => dayjs(date).format("DD")}
      />
      <Modal open={modalOpen} close={closeModal} header={combine}>
        {days === 1
          ? d01
          : days === 2
          ? d02
          : days === 3
          ? d03
          : days === 4
          ? d04
          : days === 5
          ? d05
          : days === 6
          ? d06
          : days === 7
          ? d07
          : days === 8
          ? d08
          : days === 9
          ? d09
          : days === 10
          ? d10
          : days === 11
          ? d11
          : days === 12
          ? d12
          : days === 13
          ? d13
          : days === 14
          ? d14
          : days === 15
          ? d15
          : days === 16
          ? d16
          : days === 17
          ? d17
          : days === 18
          ? d18
          : days === 19
          ? d19
          : days === 20
          ? d20
          : days === 21
          ? d21
          : days === 22
          ? d22
          : days === 23
          ? d23
          : days === 24
          ? d24
          : days === 25
          ? d25
          : days === 26
          ? d26
          : days === 27
          ? d27
          : days === 28
          ? d28
          : days === 29
          ? d29
          : days === 30
          ? d30
          : days === 31
          ? d31
          : null}
      </Modal>
    </div>
  );
}

export default React.memo(App);
