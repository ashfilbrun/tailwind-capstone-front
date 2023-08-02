
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";

export default function Nav() {
  const { userInfo, setUserInfo } = useContext(Context);
  const userId = userInfo.userId;

  return (
    <div className="navBar bg-stone-950 text-white p-4 justify-between">
      <ul className="flex space-x-4 justify-around">
        <li>
          <Link
            to={`/MyCalendar/`}
            className="text-white hover:text-teal-600"
          >
            Calendar
          </Link>
        </li>
        <li>
          <Link
            to={`/DailySurvey/${userId}`}
            className="text-white hover:text-teal-600 align-center"
          >
            Daily Survey
          </Link>
        </li>
        <li>
          <Link
            to={`/Profile/${userId}`}
            className="text-white hover:text-teal-600"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to={`/CreateSymptom`}
            className="text-white hover:text-teal-600"
          >
            Create Symptom
          </Link>
        </li>
      </ul>
    </div>
  );
}