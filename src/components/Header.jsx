import React from "react";
import Context from "../Context";
import { useContext } from "react";
import Nav from "./Nav";

export default function Header() {
  const { userInfo, setUserInfo } = useContext(Context);

  if (userInfo.username === "") {
    return (
      <div>
        <header className="flex justify-center mt-2 text-[52px] font-bold">
          <img src="capstone.png" alt="Chronic/ally"/>
        </header>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div>
          <header>
            <h1>Chronic/ally</h1>
          </header>
          <Nav />
        </div>
      </div>
    );
  }
}
