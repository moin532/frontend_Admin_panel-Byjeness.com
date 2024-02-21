import React, { useEffect } from 'react'
import {styled} from 'styled-components'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { AllProducts,AllUsers } from '../action/AllActon';

const Dashboard = () => {

  
  const dispatch = useDispatch();

  const {  users } = useSelector((state) => state.products);
  const { buyers} = useSelector((state) => state.products);
  const { products} = useSelector((state)=> state.products);


  if(!users && !products){
    return <div>loading .....</div>
  }
  const usr = users && users.length


  useEffect(()=>{
        dispatch(AllProducts());
        dispatch(AllUsers());
  },[dispatch])
  
  return (
   <Wrapper>
      <div className="dashboardContainer">
          <h1>Dashboard</h1>
  
          <div className="dashboardSummary">
            <div>
              <p>
                Total Amount <br /> ₹0
              </p>
            </div>
            <div className="dashboardSummaryBox2">
              <Link to="/admin/products">
                <p>Product</p>
                <p>{products && products.length}</p>
              </Link>
              <Link to="/users">
                <p>Users</p>
                <p>{usr}</p>
              </Link>
              <Link to="/orders">
                <p>Orders</p>
            
                {/* <p>{buyers && buyers.length}</p> */}
              </Link>
            </div>
          </div>
          </div>
  
   </Wrapper>
  )
}

const Wrapper = styled.section`

.dashboard {
  width: 100vw;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;

  
}

.dashboardContainer {
  border-left: 1px solid rgba(0, 0, 0, 0.13);
  background-color: rgb(255, 255, 255);
  padding: 3rem 0;
  padding-left:0vh;

}

.dashboardContainer > h1 {
  color: rgba(0, 0, 0, 0.733);
  font: 300 2rem "Roboto";
  text-align: center;
  width: 50%;
  padding: 1.5rem;
  margin: auto;
}

.dashboardSummary {
  margin: 2rem 0;
}

.dashboardSummary > div {
  display: flex;
  background-color: white;
  justify-content: center;
}
.dashboardSummary > div > p {
  background-color: rgba(70, 117, 218, 0.932);
  color: white;
  font: 300 1.3rem "Roboto";
  text-align: center;
  padding: 1.5rem;
  width: 100%;
  margin: 0 2rem;
}
.dashboardSummaryBox2 > a {
  color: rgb(0, 0, 0);
  font: 300 2rem "Roboto";
  text-align: center;
  background-color: rgb(117, 156, 101);
  text-decoration: none;
  padding: 1.5rem;
  width: 10vmax;
  height: 10vmax;
  margin: 2rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.dashboardSummaryBox2 > a:first-child {
  background-color: rgb(255, 110, 110);
  color: rgb(255, 255, 255);
}

.dashboardSummaryBox2 > a:last-child {
  background-color: rgb(197, 108, 108);
  color: rgb(255, 255, 255);
}

@media screen and (max-width: 600px) {
  .dashboard {
    grid-template-columns: 1fr;
  }

  .dashboardContainer {
    border-left: none;
    padding-left: 0px;
  }

  .dashboardSummary > div > p {
    margin: 0;
  }

  .dashboardSummaryBox2 > a {
    padding: 0.5rem;
    margin: 1rem;
    font: 300 0.9rem "Roboto";
  }

}
`
export default Dashboard
