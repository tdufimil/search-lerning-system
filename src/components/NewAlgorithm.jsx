import './NewAlgorithm.css';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function NewAlgorithm(){
  const navigate = useNavigate();
  const  location = useLocation();
  const { state } = location;
  const title = state?.title;
  const text = state?.text;

  return(
    <>
    <div className="newAlgoRoot">
      <div className="newAlgoContainer">
        <div className="newAlgoArea">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="linkArea">
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
        </div>
      </div>
    </div>
    </>
  )    
}
export default NewAlgorithm