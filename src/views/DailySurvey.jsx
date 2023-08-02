import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default function DailySurvey(props) {
  const { surveys, illness, symptoms } = props;

  // const { userInfo } = useContext(Context);

  // const [score, setScore] = useState("");

  let navigate = useNavigate();

  return (
    <div className="container mx-auto my-8 lex flex-col align-center justify-center" id="survey">
      <div>
        {surveys && surveys.length ? (
          surveys.map((survey) => {
            return (
              <h1 key={survey._id} className="text-2xl font-bold">
                Daily Survey:
              </h1>
            );
          })
        ) : (
          <h1 className="text-2xl font-bold">Survey Not Completed</h1>
        )}
        {/* {<h1>Illness: {illness._id}</h1>} */}
        {symptoms &&
          symptoms.length &&
          symptoms.map((symptom) => {
            return (
              <>
              <h1 key={symptom._id} className="text-2xl font-bold">
                Symptoms: {symptom.name} 
              </h1>
              <h2 className="flex flex-col align-center justify-center text-center">
                Rating: <input className="max-w-[400px] align-center justify-center m-auto"></input>
              </h2>
              <button className="flex flex-col align-center justify-center bg-stone-950 text-white p-2 m-4 rounded ring-1 ring-lime-200 m-auto mt-5">Submit</button>
              </>
            );
          })}
        <form>
          {/* map through to find users illness symptoms */}
          {/* pull symptom */}
          {/* add score bar */}
        </form>
      </div>
    </div>
  );
}
