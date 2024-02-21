import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PrdDetails, clearErrors, deletePrd } from "../action/AllActon";
import styled from "styled-components";
import { toast } from "react-toastify";
import { PRODUCT_DELETE_RESET } from "../constant/AllConstant";


const ProductsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { loading, prdDetails } = useSelector((state) => state.products);
  const { isDeleted,error} = useSelector((state) => state.deletePrd );

  console.log(prdDetails);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      toast.success(" Product Deleted Succesfully");
      Navigate("/products");
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(PrdDetails(id));
  }, [id, dispatch]);


  const dltProduct = ()=>{
        dispatch(deletePrd(id))
  }

  if(loading ){
    return <div>loading...wait a second</div>
  }
  
  
  return (
    <Wrapper>

     
        <div className="grid">
          <div className="image-screen">
            {prdDetails.products[0] &&
              prdDetails.products[0].images.map((item, i) => (
                <img key={i} src={item} alt="img not load.."/>
              ))}
          </div>

          
          <div className="product-data">
            <h3>categorty : <span> {prdDetails.products[0].categoryType}</span></h3>
          
            <p className="product-data-price">
              product Name:
              <span>{prdDetails.products[0].productName}</span>
            </p>
            <p className="product-data-price">
              seller Id:<span>{prdDetails.products[0].sellerId}</span>
            </p>

            <p className="product-data-price ">
              description:{" "}
              <span className="product-data-real-price">
                {prdDetails.products[0].description}
              </span>
            </p>
          </div>

          <button type="button" className="btn btn-primary" id="btn" onClick={dltProduct}>Delete product</button>

        </div>
  


    </Wrapper>
  );
};

const Wrapper = styled.section`

.product-data {
    font-style: normal;
    margin: 209px 31px 0 77px;
}

p{
  font-size:20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#btn{
  margin-top: 12px;
  margin-left:169px;
  width: 25vh;
}
span{
  color: #38386f;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

@media screen and (max-width: 768px) {

  .product-data {
    margin:12px
  }

  span{
    font-size:18px;
  }

  #btn{
    margin-left: 12px;
  }
}
`;
export default ProductsDetails;
