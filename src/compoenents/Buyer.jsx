import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllBuyers } from "../action/AllActon";
import styled from "styled-components";

const Buyer = () => {
  const dispatch = useDispatch();

  const { buyers, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(AllBuyers());
  }, []);

  if(loading && !buyers){
    return <div>loading...wait a second</div>
  }

  return (
    <Wrapper>
      <div className="admin-panel-table-container">
        <h2>Reent Buyers</h2>
        <table className="admin-panel-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>{buyers && buyers.map((buyer) => <td>{buyer._id}</td>)}</tr>

            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .admin-panel-table-container {
    margin: 20px;
  }

  .admin-panel-table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 10px;
  }

  .admin-panel-table th,
  .admin-panel-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  .admin-panel-table th {
    background-color: #2c3e50;
    color: #ecf0f1;
  }

  .admin-panel-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .admin-panel-table tbody tr:hover {
    background-color: #ecf0f1;
    cursor: pointer;
  }
`;
export default Buyer;
