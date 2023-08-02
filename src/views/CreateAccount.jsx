import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "../Context";

export default function CreateAccount() {
  const BASE_URL = "http://localhost:3001/api/";

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    sex: "",
    passwordValid: "",
    illness: "",
  };

  const [formState, setFormState] = useState(initialState);
  const [illness, setIllness] = useState("");
  const [illnesses, setIllnesses] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      username: formState.username,
      password: formState.password,
      sex: formState.sex,
      birthDate: formState.birthDate,
      illnessId: null,
      googleId: null,
    };
    await axios.post(`${BASE_URL}user/create`, newUser);
    navigate("/");
  };

  useEffect(() => {
    const getIllnesses = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/illness/`);
        setIllnesses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getIllnesses();
    console.log(illnesses);
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleChangeIllness = (e) => {
    setIllness({ ...illness, [e.target.id]: e.target.value });
  };

  const cancel = () => {
    setFormState(initialState);
    navigate("/");
  };

  return illnesses ? (
    <div className="bg-lime-200 text-white text-center p-4 rounded m-8 text-body shadow-xl" id="createAccountContainer">
      <div className="bg-teal-900 text-white p-4 rounded max-h-full" id="createAccountForm" onSubmit={handleSubmit}>
        <h2 className="p-3 text-3xl">Enter information below to create an account:</h2>
        <form className="flex flex-col text-center">
          <label className="p-5" htmlFor="firstName">FIRST NAME: </label>
          <input
            className="ml-5 mr-5 shadow-l text-black pl-2 pt-1"
            type="text"
            placeholder="Enter first name here"
            id="firstName"
            onChange={handleChange}
            value={formState.firstName}
          ></input>
          <label className="p-5" htmlFor="lastName">LAST NAME: </label>
          <input
            className="ml-5 mr-5 shadow-l text-black pl-2 pt-1"
            type="text"
            placeholder="Enter last name here"
            id="lastName"
            onChange={handleChange}
            value={formState.lastName}
          ></input>
          <label className="p-5" htmlFor="birthDate">BIRTH DATE: </label>
          <input
            className="ml-5 mr-5 shadow-l text-black pl-2 pt-1"
            type="date"
            placeholder="Enter birth date here"
            id="birthDate"
            onChange={handleChange}
            value={formState.birthDate}
          ></input>
          <label className="p-5" htmlFor="sex">SEX: </label>
          <select className="ml-5 mr-5 shadow-l text-black pl-2 pt-2" name="sex" id="sex" onChange={handleChange}>
            <option value="select an answer"></option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="no">Prefer not to answer</option>
          </select>
          <label className="p-5" htmlFor="illness">CHRONIC ILLNESS:</label>
          <select 
            className="ml-5 mr-5 shadow-l text-black pl-2 pt-2"
            placeholder="select"
            name="illness"
            onChange={handleChangeIllness}
          >
            {illnesses?.map((illness) => (
              <option key={illness.id} value={illness.id} placeholder="select">
                {illness.name}
              </option>
              // <option value="other">other</option>
            ))}
          </select>
          <label className="p-5" htmlFor="username">CREATE USERNAME: </label>
          <input
            className="ml-5 mr-5 text-black pl-2 pt-1"
            type="text"
            placeholder="Enter username here"
            id="username"
            onChange={handleChange}
            value={formState.username}
          ></input>
          <label className="p-5" htmlFor="email">EMAIL ADDRESS:</label>
          <input
            className="ml-5 mr-5 shadow-l text-black pl-2 pt-1"
            type="email"
            placeholder="Enter email address here"
            id="email"
            onChange={handleChange}
            value={formState.email}
          ></input>
          <label className="p-5" htmlFor="password">CREATE PASSWORD:</label>
          <input
            className="ml-5 mr-5 shadow-l text-black pl-2 pt-1"
            type="password"
            placeholder="Enter password here"
            id="password"
            onChange={handleChange}
            value={formState.password}
          ></input>
          <label className="p-5" htmlFor="passwordValid">CONFIRM PASSWORD:</label>
          <input
            className="ml-5 mr-5 shadow-l text-black pl-2 pt-1"
            type="password"
            placeholder="Enter password again to confirm"
            id="passwordValid"
            onChange={handleChange}
            value={formState.passwordValid}
          ></input>
        </form>
        <div className="flex justify-center flex-col p-5">
          <button type="submit" className="bg-stone-950 text-white p-2 m-4 rounded ring-1 ring-lime-200 shadow-l">
            Create New Account
          </button>
          <button
            type="cancel"
            className="bg-stone-950 text-white p-2 m-4 rounded ring-1 ring-lime-200 shadow-l"
            id="cancelBtn"
            onClick={cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
