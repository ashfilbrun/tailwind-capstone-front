import { Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import MyCalendar from "./MyCalendar";
import Profile from "./Profile";
import DailySurvey from "./DailySurvey";
import Context from "../Context";
// import CreateSymptom from "./CreateSymptom";

export default function Main() {
  const [user, setUser] = useState("");
  const { userInfo, setUserInfo } = useContext(Context);
  console.log(userInfo);

  if (userInfo.username === "") {
    return (
      <>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/MyCalendar" element={<MyCalendar />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/DailySurvey/:id" element={<DailySurvey />} />
          {/* <Route path='/CreateSymptom' element={<CreateSymptom />} /> */}
        </Routes>
      </>
    );
  }
}
