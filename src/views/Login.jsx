import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "../Context";
import { BASE_URL } from "../constants/constants";

export default function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const { userInfo, setUserInfo } = useContext(Context);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = async () => {
      const myUser = await axios.get(
        `${BASE_URL}user/username/${formState.username}`
      );
      console.log(myUser.data);

      if (myUser.data.length === 0) {
        setIsActive(true);
      }

      if (myUser.data[0].password === formState.password) {
        setUserInfo({
          ...userInfo,
          illnessId: myUser.data[0].illnessId,
          firstName: myUser.data[0].firstName,
          lastName: myUser.data[0].lastName,
          userId: myUser.data[0]._id,
          username: myUser.data[0].username,
        });
        setIsActive(false);
        navigate("/MyCalendar");
      } else {
        setIsActive(true);
      }
    };
    user();
    setFormState(initialState);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const create = () => {
    navigate("/createAccount");
  };

  return (
    <div className="bg-lime-200 text-white text-center p-4 rounded m-8 text-body shadow-xl">
      <div
        className="bg-teal-900 text-white p-4 rounded"
        id="loginContainer"
        onSubmit={handleSubmit}
      >
        <h2 className="p-3 text-3xl">Login</h2>
        <form className="login">
          <label className="p-5" htmlFor="username">USERNAME: </label>
          <input
            type="text"
            placeholder="Enter username here"
            id="username"
            onChange={handleChange}
            value={formState.username}
            className="bg-white text-black rounded px-4 py-2 mt-2"
          />
          <label className="p-5" htmlFor="password">PASSWORD: </label>
          <input
            type="password"
            placeholder="Enter password here"
            id="password"
            onChange={handleChange}
            value={formState.password}
            className="bg-white text-black rounded px-4 py-2 m-2"
          />
          <p
            className="text-3l text-red-600 font-bold underline p-5 mt-2"
            style={{ display: isActive ? "" : "none" }}
          >
            Username or password is incorrect. Please try again!
          </p>
          {/* <button type="reset" className="submit" id="resetBtn">forgot password ?</button> */}
          <div className="flex flex-row align-center justify-center">
            <button
              type="submit"
              className="bg-stone-950 text-white p-2 m-4 rounded min-w-50 ring-1 ring-lime-200"
            >
              Log In
            </button>
            <button
              className="bg-stone-950 text-white p-2 m-4 rounded ring-1 ring-lime-200"
              onClick={create}
            >
              &nbsp;Create An Account
            </button>
          </div>
        </form>
      </div>
      <div className="lineBreak"></div>
    </div>
  );
}
