import React from "react";
import {Link} from "react-router-dom";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./css/Main.css";
import AllQuestions from "./Allquestion";

export default function Main() { 

  return (
  <div className="main">
  <div className="main-container">
    <div className="main-top">
      <h2>All Questions</h2>
      <Link to="/add-question">
      <button>Ask Question</button>
    </Link>
    </div>
    <div className="main-desc">
      <p> questions</p>
      <div className="main-filter">
        <div className="main-tabs">
          <div className="main-tab">
            Newest
          </div>
          <div className="main-tab">
            Active               
          </div>
          <div className="main-tab">
            More
          </div>
        </div>
        <div className="main-filter-item">
          <FilterListIcon />
          <p>Filter</p>
        </div>
      </div>
    </div> 
    <div className="questions">
    <div className="question">
  <AllQuestions/>
    </div>
    </div>       
  </div>
</div>
)
}
    



