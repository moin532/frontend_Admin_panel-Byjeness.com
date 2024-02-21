import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { ALLOrders } from '../action/AllActon';
import {styled} from 'styled-components';
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { Fragment } from 'react';

const Orders = () => {

  const dispatch = useDispatch();

  const { orders} = useSelector((state)=>state.allOrders);
 
  useEffect(() => {
    dispatch(ALLOrders());
  }, []);

  const columns = [
    { name: "id", selector: (row) => row.id, sortable: true },

    { name: "productName", selector: (row) => row.Prdname, sortable: true },
    { name: "category", selector: (row) => row.category, sortable: true },

    { name: "description", selector: (row) => row.description, sortable: true },
    { name: "sellerId", selector: (row) => row.sellerId, sortable: true },

    // {
    //   name: "Delete Button",
    //   button: true,
    //   cell: (params) => (
    //     <Button
    //       onClick={() => deleteProductHandler(params.id, "id")}
    //     >
    //       {/* <MdDeleteSweep /> */}
    //     </Button>
    //   ),
    // },

  ];

  
  
  const data = [ ]
  
  orders &&
  orders.forEach((prd) => {
      data.push({
        id: prd._id,
        Prdname: prd.productName,
        category: prd.categoryType,
        description: prd.description.slice(0,10),
        sellerId: prd.sellerId
      });
    });

    const tableCustomStyles = {
      headRow: {
        style: {
          color:'#223336',
          backgroundColor: '#e7eef0'
        },
      },
     
      
    }
  return (
    <Wrapper>
      <Fragment>
        <div className="dashboard">
          <div className="productListContainer">
      
            <h1 id="productListHeading">All Orders </h1>
            <DataTable
              columns={columns}
              data={data}
              highlightOnHover
              pointerOnHover
              pagination      
              customStyles={tableCustomStyles}
            />
          </div>
        </div>
      </Fragment>
    </Wrapper>
  )
}

const Wrapper = styled.section`

#productListHeading {
    display: flex;
    justify-content: center;
    text-decoration: underline;
    margin-top: 55px;
    font-size:7vh;
    margin-bottom: 52px;
    color: rgb(81, 83, 184);
    font-family: fangsong;
}

.dashboard{
 
}

`

export default Orders
