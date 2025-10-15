import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import useEffectOnce from "/hooks/use-effect-once";
import axios from "axios";


// ICON
import { BsXCircleFill } from "react-icons/bs";

const PaginatedCollapsibleTable = () => {
  // ประกาศ ตัวแปร ให้ = ค่าว่าง
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const [showFormError, setShowFormError] = useState("");
  const [massError, setMassError] = useState("");
  const [dataTestList, setDataTestList] = useState("");
  const [data, setData] = useState("");



  // ทำฟังชั่นเมื่อเข้าหน้านี้มา
  useEffectOnce(() => {
    setData(null);

  });

  const handleDateChange = (value) => {
    setSelectedDate("");
    setSelectedDate2("");
    setDataTestList("");
    setMassError("")
    setShowFormError("")
    
    setData(true);
    const date = new Date(value);

    const formatted = date.toLocaleDateString("th-TH", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    console.log(formatted)
    /////////////////////// Date +1 //////////////////////////
    date.setDate(date.getDate() + 1);
    const formatted2 = date.toLocaleDateString("th-TH", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    // ดึง API
    axios
      .get(
        process.env.NEXT_PUBLIC_URL_SV +
          process.env.NEXT_PUBLIC_URL_SearchHN +
          "1103900068701"
      )
      .then((response) => {
        console.log(response.data);

        if (response.data.statusCode === 200) {
          // Set ตัวแปรที่ต้องการ
          setSelectedDate(formatted);
          setSelectedDate2(formatted2);
          setDataTestList(response.data.VisitInfo);
        } else {
          setMassError(response.data.error + " - " + response.data.message);
          setShowFormError("Error");
        }
      })
      .catch((error) => {
        console.log(error);

        try {
          setMassError(error.config.url);
          setShowFormError("Error");
        } catch (error) {
          setMassError(error.response.data.HTTPStatus.message);
          setShowFormError("Error");
        }
      });
  };

  return (
    <>
      <div className="text-xl flex items-center gap-x-2">
        กรุณาเลือกวันที่ : 
        <input
          type="date"
          className="input"
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>
      {showFormError ? (
        <div role="alert" className="alert alert-error mt-2 flex items-center gap-x-2">
        <BsXCircleFill className="text-lg" />
        <span>{massError}</span>
      </div>
      
      ) : (
        ""
      )}
      {selectedDate ? (
        <div className="text-sm mt-2">
          1. สถิติผู้ป่วยนอก ( {selectedDate} 7:00น. - {selectedDate2} 7:00น. )
          <div>จำนวน............ราย Admit.......ราย</div>
        </div>
      ) : data ? showFormError ? "" : (
        <div className="">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : (
        ""
      )}

     {/*  วิธีการดึงตัวแปร คือ  ( {ตัวแปร ? "มีค่า" : "ไม่มีค่า" } ) */}


      {/*  ดึงตัวแปรมาแค่ตัวเดียว [0] คือ array ตัวที่ 0 */}
      {dataTestList ? (<div className="text-red-500">{dataTestList[0].HN}</div>) : ""}

      {/*  ดึงตัวแปรมาโชว์วนลูบทั้งหมด */}
      {dataTestList
        ? dataTestList.map((test, index) => (
            <div key={index} value={test.index}>
              {test.HN}
            </div>
          ))
        : ""}



    </>
  );
};

export default PaginatedCollapsibleTable;
