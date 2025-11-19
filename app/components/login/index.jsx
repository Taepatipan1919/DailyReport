"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { save2 } from "../store/patientSlice";

export default function Page() {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   if (
    ((credentials.username === "admin")||(credentials.username === "Admin")) || (credentials.password === "admin")
  
  ){
    dispatch(
      save2({
        value: "มีรายชื่อ",
        Data: credentials,
      })
    );
  }else{
    document.getElementById("my_modal_2").showModal();
  }
  
  };


  return (

    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4"> 
      

      <dialog id="my_modal_2" className="modal">
  <div className="modal-box flex flex-col items-center justify-center p-8"> 
    <div className="mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 stroke-current text-error"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <p className="py-2 text-lg text-gray-700">
      Username หรือ Password ผิดพลาด
    </p>

  </div>
  <form method="dialog" className="modal-backdrop">
    <button>ปิด</button>
  </form>
</dialog>




      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl"
      > 
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">เข้าสู่ระบบ</h2>
        <div className="grid gap-6 w-full">
          
          {/* Username Field */}
          <TextField
            fullWidth
            id="username"
            label="ชื่อผู้ใช้งาน"
            variant="standard" 
            value={credentials.username}
            onChange={handleChange}
          />

          {/* Password Field */}
         <FormControl fullWidth> 
        {/* <InputLabel htmlFor="password">รหัสผ่าน</InputLabel>  */}
         <TextField
          variant="standard" 
              id="password"
              type={showPassword ? "text" : "password"}
              value={credentials.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="รหัสผ่าน" 
            />
          
          </FormControl>
           
          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            // ใช้ Tailwind classes โดยตรงใน className
            className="text-base-100 hover:text-warning hover:bg-white bg-warning"
            fullWidth
            size="large"
            sx={{ 
                marginTop: 1, 
                fontSize: '1.25rem',
                fontWeight: 600,
            }}
          >
            Login
          </Button>
                     {/* <div className="rounded-md">
             <div
              //  className="text-base-100 hover:text-warning hover:bg-white bg-warning"
               className="btn btn-warning text-base-100 hover:text-warning hover:bg-base-100 text-lg rounded-full px-3 py-2 w-full"
              onClick={ButtonLogin}
            >
              Login
            </div>
          </div> */}
          
        </div>
      </form>
    </div>
  );
}