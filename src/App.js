import "./App.css";
import {
  BrowserRouter,

  Route,

  Routes,
  Navigate,

} from "react-router-dom";

import Index from "./components/StackOverflow";
import Header from "./components/Header";
import AddQuestion from "./components/AddQuestion";
import Question from "./components/ViewQuestion";
import Auth from "./components/Auth";
import { useDispatch} from "react-redux";
import { login, logout} from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";

import {useSelector } from "react-redux";
import {selectUser} from "./features/userSlice";
function App() {
 

      const user = useSelector(selectUser); 
      console.log(user)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);

  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/auth" element={<Auth/>}/>
            <Route path="/" element={<Index/>}/>
            <Route path="/addquestion" element={<AddQuestion/>}/>
            <Route path="/question" element={<Question/>}/>         
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
