import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import useEffectOnce from "/hooks/use-effect-once";
import axios from "axios";
import { save } from "../store/counterSlice";
import { FaUserLargeSlash } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch , useSelector } from "react-redux";


export default function navbar() {

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
  const [showFormError, setShowFormError] = useState("");
  const [massError, setMassError] = useState("");
  const [dataTestList, setDataTestList] = useState("");
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const Status = useSelector((state) => state.Patient.value);

  useEffectOnce(() => {

    dispatch(save({
      value: "ไม่มีข้อมูล",
      Data: ""
    }));
  
      
     }, []); 

  
  const handleDateChange = (value) => {
    setSelectedDate("");
    setSelectedDate2("");
    setDataTestList("");
    setMassError("")
    setShowFormError("")
    
    setData(true);

    const parts = value.split("-");

    dispatch(save({
      value: "กำลังโหลด",
      Data: ""
    }));


    // ดึง API
    axios
      .get(
        process.env.NEXT_PUBLIC_URL_SV +
          process.env.NEXT_PUBLIC_URL_allOPDdata + parts[2]+"-"+parts[1]+"-"+parts[0]
          
      )
      .then((response) => {
        
       

        if (response.data.statusCode === 200) {
          // Set ตัวแปรที่ต้องการ
          console.log(response.data.OPDdata);
          dispatch(save({
            value: "มีข้อมูล",
            Data: response.data.OPDdata
          }));


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
    {Status === "ไม่มีรายชื่อ" ?  <></>  : 

    <div className="sticky top-0 bg-white w-full">
          <div className="justify-center border-solid rounded-lg p-4 text-lg">
        เลือกวันที่ : 
        <input
          type="date"
          className="input ml-2 border-2 border-primary w-48"
           onChange={(e) => handleDateChange(e.target.value)}
        />
       
      </div>
      <hr className="border-2 border-success"/>
    </div>
    }
    </>
  );
}
