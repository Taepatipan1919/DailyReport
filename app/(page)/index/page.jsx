"use client";

import React, { useEffect } from "react";
import Index from "../../components/index/index";
import Login from "../../components/login/index";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const Status = useSelector((state) => state.Patient.value);

  return (
    <>

{Status === "ไม่มีรายชื่อ" ?  
      <div className="bg-success">
        <Login/>
      </div>  : 
      <Index/>
      }
      
    </>
  );
}
