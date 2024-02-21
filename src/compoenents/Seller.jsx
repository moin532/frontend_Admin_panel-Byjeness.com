import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { AllSeller } from '../action/AllActon';
import Admin from './Admin';

const Seller = () => {

  const dispatch = useDispatch();

  const {loading , sellers} =  useSelector((state)=> state.products );

  useEffect(()=>{
    dispatch(AllSeller());
  },[]);

  if (loading){
    return <div>Loadingg.. pls wait</div>
  }

  const heading = {
    head :"Sellers"
  }
  
  return (
    <div>
      {
        sellers && sellers.map((data)=>{
          return <Admin data ={data} key={data._id} head = {heading}/>
        })
      }
    </div>
  )
}

export default Seller
