import React,{useEffect} from 'react';
import {styled} from 'styled-components';
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { Fragment } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { AllProducts } from '../action/AllActon';
import { FaPencilAlt } from "react-icons/fa";


const Products = ( ) => {

  const dispatch = useDispatch();
  const {loading, products} = useSelector((state)=> state.products);
console.log(products.length);


  useEffect(()=>{
    dispatch(AllProducts());
  },[])


  const columns = [
    { name: "id", selector: (row) => row.id, sortable: true,style: {   background: "#d4e2d1",fontSize:20,}, },

    { name: "productName", selector: (row) => row.Prdname, sortable: true ,style: {   background: " #D6EEEE",}, },
    { name: "category", selector: (row) => row.category, sortable: true ,style: {   background: "#d5e7e7",fontSize:20,}},
    { name: "description", selector: (row) => row.description, sortable: true,style: {   background: "#D6EEEE",},  },
    { name: "sellerId", selector: (row) => row.sellerId, sortable: true,style: {   background: "#D6EEEE",},  },

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
    
    {
      name: "visit",
      selector: "visit.length",
      maxWidth: "80px",
      sortable: true,
      cell: (params) => {
        return (
          <Fragment>
            <Link to={`/product/${params.id}`}>                                               
            <FaPencilAlt />
            </Link>
          </Fragment>
        );
      },
    },
  ];

  
  
  const data = [ ]
  
  products &&
  products.forEach((prd) => {
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
          fontSize:20,
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
            <h1 id="productListHeading">All Products </h1>
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



`
export default Products
