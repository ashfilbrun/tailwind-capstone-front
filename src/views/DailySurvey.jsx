import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default function DailySurvey(props) {
  const { surveys, illness, symptoms } = props;

  const { userInfo } = useContext(Context);

  // const [score, setScore] = useState("");

  let navigate = useNavigate();

  return (
    <div className="container mx-auto my-8" id="survey">
      <div>
        {surveys && surveys.length ? (
          surveys.map((survey) => {
            return (
              <h1 key={survey._id} className="text-2xl font-bold">
                Daily Surveys: {survey._id}
              </h1>
            );
          })
        ) : (
          <h1 className="text-2xl font-bold">Survey Not Found</h1>
        )}
        {/* {<h1>Illness: {illness._id}</h1>} */}
        {symptoms &&
          symptoms.length &&
          symptoms.map((symptom) => {
            return (
              <h1 key={symptom._id} className="text-2xl font-bold">
                Symptoms: {symptom.name}
              </h1>
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
