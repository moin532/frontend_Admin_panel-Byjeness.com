import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AllUsers } from "../action/AllActon";
import Admin from "./Admin";

const Users = () => {
  const dispatch = useDispatch();

  const { loading, users } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(AllUsers());
  }, [dispatch]);

  if(loading && !users){
    return <div>loading...wait a second</div>
  }
  const heading = {
    head :"User"
  }
  return (
    
    <div>
      {
        users && users.map((data)=>{
          return <Admin data ={data} key={data._id} head = {heading}/>
        })
      }
    </div>
    
  );
};

export default Users;
