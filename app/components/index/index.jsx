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

    const parts = value.split("-");

    // ดึง API
    axios
      .get(
        process.env.NEXT_PUBLIC_URL_SV +
          process.env.NEXT_PUBLIC_URL_OPDdata + parts[2]+"-"+parts[1]+"-"+parts[0]
          
      )
      .then((response) => {
        console.log(response.data);

        if (response.data.statusCode === 200) {
          // Set ตัวแปรที่ต้องการ
          setSelectedDate(response.data.OPDdata.FromDate);
           setSelectedDate2(response.data.OPDdata.ToDate);
           setDataTestList(response.data.OPDdata);
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
      <div className="justify-center border-solid rounded-lg p-4 text-lg">
        เลือกวันที่ : 
        <input
          type="date"
          className="input ml-2 border-2 border-primary w-48"
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>
      <hr className="border-2 border-success"/>
      {showFormError ? (
        <div role="alert" className="alert alert-error mt-2 flex items-center gap-x-2">
        <BsXCircleFill className="text-lg " />
        <span>{massError}</span>
      </div>
      
      ) : (
        ""
      )}
      {selectedDate ? (
        <div className="text-sm mt-2 m-2 border-2 border-base-100 bg-accent rounded-lg">
          <div className="m-2 text-warning ">
          <div className="font-bold">1. สถิติผู้ป่วยนอก  {selectedDate} 7:00 - {selectedDate2} 7:00 </div>
    <div className="flex items-center gap-x-2 mt-2 ">
      <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100"><h2 className="text-error text-base">VN : {dataTestList.VN}</h2></div> 
      <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100"><h2 className="text-error text-base">HN : {dataTestList.HN}</h2> </div> 
      <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100"><h2 className="text-error text-base">Admit : {dataTestList.Admit}</h2></div> 
        </div>
          </div>
        </div>
      ) : data ? showFormError ? "" : (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-600 bg-opacity-50">
        <span className="loading loading-spinner text-error w-20 h-20"></span>
        <div className="text-4xl text-base-100 text-center mt-6">Loading...</div>
      </div>
      ) : (
        ""
      )}

     {/*  วิธีการดึงตัวแปร คือ  ( {ตัวแปร ? "มีค่า" : "ไม่มีค่า" } ) หรือ {ตัวแปร} */}


      {/*  ดึงตัวแปรมาแค่ตัวเดียว */}
      {/* {dataTestList ? (<div className="text-red-500">{dataTestList.HN}</div>) : ""} */}

      {/*  ดึงตัวแปรมาโชว์วนลูบทั้งหมด */}
      {/* {dataTestList
        ? dataTestList.map((test, index) => (
            <div key={index} value={test.index}>
              {test.HN}
            </div>
          ))
        : ""} */}



    </>
  );
};

export default PaginatedCollapsibleTable;
