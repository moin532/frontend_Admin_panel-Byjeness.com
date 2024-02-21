import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { UserLogin ,clearErrors} from "../action/AllActon";
import {toast } from "react-toastify";
import { useNavigate} from "react-router-dom";
import {styled} from "styled-components"

const Login = () => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();


  const {isAuthenticated,error} = useSelector((state)=>state.user);


  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit =(e)=>{
     e.preventDefault();
     dispatch(UserLogin(email,password));
  }
 


  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated ) {
      Navigate('/home');  
    }
  
  }, [dispatch,error,isAuthenticated,Navigate]);
 

  return (
  
     <Wrapper>


      <form className="container center_div col-md-6  " onSubmit={HandleSubmit} id ="main-com">
        <div className="mb-3 w-50  my-5 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address

          </label>
          <input
            type="email"
            className="form-control border-success"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
        
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3 w-50  ">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control border-success"
            id="exampleInputPassword1"
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
      
        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}

        <input type="submit" className="btn btn-primary" />
      </form>
      </Wrapper>
  );
};


const Wrapper =styled.section`
@media screen and (max-width: 600px) {
  #main-com {
    margin-left: 94px;
}

}

`

export default Login;
