"use client";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import useEffectOnce from "/hooks/use-effect-once";
import axios from "axios";
import { useSelector } from "react-redux";
// ICON
import { BsXCircleFill } from "react-icons/bs";

export default function Page() {

  //  const ReDux = useSelector((state) => ({ ...state }));
   const ReDux = useSelector((state) => state.DataTran.Data);
   const Status = useSelector((state) => state.DataTran.value);

  const [dataValue, setDataValue] = useState(null);

useEffect(() => {
  setDataValue(ReDux);
   }, [ReDux]); 

  return (
    <>

      {Status === "กำลังโหลด" ?  <>
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-600 bg-opacity-50">
            <span className="loading loading-spinner text-error w-20 h-20"></span>
            <div className="text-4xl text-base-100 text-center mt-6">
              Loading...
            </div>
          </div>
      </>  : ""}
  {((dataValue === "")||(dataValue === null)) ? <></> :
  <>
          <div className="text-sm mt-2 m-2 border-2 border-base-100 bg-info rounded-lg">
            <div className="m-2 text-warning ">
              <div className="font-bold">1. สถิติผู้ป่วยนอก (07:00-07:00)</div>
              <div className="flex items-center gap-x-2 mt-2 ">
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    VN :     {dataValue ? <>{dataValue.VN}</> : 'Loading...'}
                  </h2>
                </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    HN : {dataValue ? <>{dataValue.HN}</> : 'Loading...'}
                  </h2>
                </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    Admit : {dataValue ? <>{dataValue.Admit}</> : 'Loading...'}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm mt-2 m-2 border-2 border-base-100 bg-info rounded-lg">
            <div className="m-2 text-warning ">
              <div className="font-bold">
                2. สถิติผู้ป่วยคลินิกทั่วไป (17:01-20:00)
              </div>
              <div className="flex items-center gap-x-2 mt-2 ">
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    VN : {dataValue ? <>{dataValue.VN2}</> : 'Loading...'}
                  </h2>
                </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    HN : {dataValue ? <>{dataValue.HN2}</> : 'Loading...'}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm mt-2 m-2 border-2 border-base-100 bg-info rounded-lg">
            <div className="m-2 text-warning ">
              <div className="font-bold">
                3. สถิติผู้ป่วยประกันสังคม (17:01-20:00)
              </div>
              <div className="flex items-center gap-x-2 mt-2 ">
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    VN : {dataValue ? <>{dataValue.VN3}</> : 'Loading...'}
                  </h2>
                </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    HN : {dataValue ? <>{dataValue.HN3}</> : 'Loading...'}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm mt-2 m-2 border-2 border-base-100 bg-info rounded-lg">
            <div className="m-2 text-warning ">
              <div className="font-bold">4. ER Case นอกเวลา</div>
              <div className="flex items-center gap-x-2 mt-2 ">
                <div className="font-bold"> 17:00-07:00 </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    VN : {dataValue ? <>{dataValue.VN4a}</> : 'Loading...'}
                  </h2>
                </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    Admit : {dataValue ? <>{dataValue.Admit4a}</> : 'Loading...'}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-x-2 mt-2 ">
                <div className="font-bold"> 17:00-20:00 </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    VN : {dataValue ? <>{dataValue.VN4b}</> : 'Loading...'}
                  </h2>
                </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    Admit : {dataValue ? <>{dataValue.Admit4b}</> : 'Loading...'}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-x-2 mt-2 ">
                <div className="font-bold"> 20:00-24:00 </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    VN : {dataValue ? <>{dataValue.VN4c}</> : 'Loading...'}
                  </h2>
                </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    Admit : {dataValue ? <>{dataValue.Admit4c}</> : 'Loading...'}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-x-2 mt-2 ">
                <div className="font-bold"> 24:00-07:00 </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    VN : {dataValue ? <>{dataValue.VN4d}</> : 'Loading...'}
                  </h2>
                </div>
                <div className="rounded-lg border-secondary border-2 border-secondary flex items-center gap-x-2 px-3 bg-base-100">
                  <h2 className="text-warning text-base">
                    Admit : {dataValue ? <>{dataValue.Admit4d}</> : 'Loading...'}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
}



    </>
  );
};