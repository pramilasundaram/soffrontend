import React from 'react';
import { Avatar} from "@material-ui/core"
import "./css/question.css";
import { Link } from 'react-router-dom';

function AllQuestions() {

  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>answers</span>
            </div>
          </div>
          <div className="all-questions-right"><div className="question-answer">
            <Link to="/question">this is question</Link>
            <div
              style={{
                maxWidth: "90%",
              }}
            >
              <div>
                These components use the Material-UI SvgIcon component to render the
                SVG path for each icon,
                and so a have a peer-dependency on the next release of Material-UI.
              </div>
            </div>
          </div>

            <div style={{ display: "flex" }}>
              <button className='question-tags'>react</button>
              <button className='question-tags'>antd</button>
              <button className='question-tags'>frontends</button>
            </div>

            <div className="author">
              <small>timestamp</small>
              <div className="auth-details">
                <Avatar />
                <p>
                  username
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );  
}
export default AllQuestions;
