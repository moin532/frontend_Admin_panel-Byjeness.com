import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Dashboard from "../compoenents/Dashboard";
import ChartGraph from "./ChartGraph";


const Home = () => {
 

  const {user} = useSelector((state)=>state.user);


  
  if (!user) {
    return <div>Loading...Image Cannot Fetch </div>;
  }

  

  return (
    <Wrapper>
      <div className="home-page">
        <div className="img-home">
          <img src="./images/admin.avif" alt="" />

          <div className="my-data">
            <h1>
              Name:<span>{user.fullName}</span>
            </h1>
            <h1>
              Email:<span>{user.email}</span>
            </h1>
            <h1>
              Acc-Type:<span>{user.accountType}</span>
            </h1>
          </div>
        </div>
      </div>
      
      <div className="dashBoard">

      <Dashboard/>
      </div>

      <div className="chart-container">
      <ChartGraph/>
      </div>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`

.chart-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
  .img-home,
  img {
    width: 100%;
    height: 100vh;
  }

  .my-data{
    margin-top: -85vh;
    z-index: 999;
    margin-left: 100px;
}

h1{
    font-size: 50px;
    font-family: 'Times New Roman', Times, serif;
}

span {
    color:#1c4b68;
    margin-left: 7px;
    font-size: 40px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 768px) {

img{
  
  height: 40vh;
}

.my-data {
  margin-left: 6px;
    margin-top: 25px;
}

h1{
  font-size: 38px;
}

.dashBoard{

  margin-top: -191px;
  
}
 
}
`;
export default Home;


