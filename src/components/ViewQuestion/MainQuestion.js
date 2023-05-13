import { Avatar } from "@material-ui/core";
import React from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HistoryIcon from "@material-ui/icons/History";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";


function MainQuestion() {
  const [show, setShow] = useState(false)
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">this is question title</h2>
          <Link to="/addquestion">
            <button>Ask Question</button>
          </Link>
        </div>

        <div className="main-desc">
          <div className="info">
            <p>asked<span>timestamp</span></p>
            <p>Active<span>today</span></p>
            <p>Viewed<span>43times</span></p>
          </div>
        </div>

        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>
                <p className="arrow">0</p>
                <p className="arrow">▼</p>
                <BookmarkIcon />
                <HistoryIcon />
              </div>
            </div>
          

        <div className="question-answer">
          <p>this is test answer question body</p>
          <div className="author">
            <small>
              asked timestamp
            </small>
            <div className="auth-details">
              <Avatar />
              <p>
                username
              </p>
            </div>
          </div>

          <div className="comments">
            <div className="comment">
              <p >
                This is comment-
                <span>username</span>
                <small>timestamp</small>
              </p>
            </div>
            <p onClick={() => setShow(!show)}>Add a comment</p>
            {show && (
              <div className="title">
                <textarea
                  style={{
                    margin: "5px 0px",
                    padding: "10px",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    borderRadius: "3px",
                    outline: "none",
                  }}
                  type="text"
                  placeholder="Add your comment..."
                  rows={5}
                />
                <button
                  style={{
                    maxWidth: "fit-content",
                  }}
                > Add comment
                </button>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>

        <div className="all-questions">
          <p>no.of answers</p>
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>
                <p className="arrow">0</p>
                <p className="arrow">▼</p>
                <BookmarkIcon />
                <HistoryIcon />
              </div>
            </div>

            <div className="question-answer">
              <p>this is test answer question body</p>
              <div className="author">
                <small>
                  asked timestamp
                </small>
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

      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill          
          className="react-quill"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
      <button       
        style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
  )

}

export default MainQuestion;