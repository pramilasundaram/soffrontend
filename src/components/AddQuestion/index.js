import React, { useState } from "react";
import ReactQuill from "react-quill";
// import TagsInput from "./TagsInput";
import "react-quill/dist/quill.snow.css";
import {Navigate,Link} from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import {selectUser}from "../../features/userSlice";
import "./index.css";
export default function AddQuestion() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);
  const user=useSelector(selectUser);

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && body !== "") {
      const bodyJSON = {
        title: title,
        body: body,
        tag: JSON.stringify(tag),
        user: user,
      };
      await axios.post("/api/question", bodyJSON)
        .then((res) => {
          // console.log(res.data);
          alert("Question added successfully");
         Navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="add-question">
      <div className="add-question-container">

        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>

        <div className="question-container">
          <div className="question-options">

            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <input
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                  type="text"
                  placeholder="enter the title"
                />
              </div>
            </div>

            <div className="question-option">
            <div className="title">
              <h3>Body</h3>
              <small>
                Include all the information someone would need to answer your
                question
              </small>
              <ReactQuill
              value={body}
              onChange={handleQuill}
                className="react-quill"
                theme="snow"
              />
            </div>
          </div>

          <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 5 tags to describe what your question is about
                </small>                
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
        <button className="button"
        type="Submit"
        onClick={handleSubmit}
        >
          Add your question
        </button>
    </Link>
       
      </div>
    </div>
  );
}
 
