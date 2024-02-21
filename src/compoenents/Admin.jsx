import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Admin = ({ data, head }) => {
  return (
    <Wrapper>
      <>
        <section id="content">
          {/* NAVBAR */}
          <nav>
            <i className="bx bx-menu" />
            <a href="#" className="nav-link">
              Categories
            </a>
            <form action="#">
              <div className="form-input">
                <input type="search" placeholder="Search..." />
                <button type="submit" className="search-btn">
                  <i className="bx bx-search" />
                </button>
              </div>
            </form>
          </nav>
          {/* NAVBAR */}
          {/* MAIN */}
          <main>
            <div className="head-title">
              <div className="left">
                <h1>Dashboard</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                  </li>

                  <li>
                    <Link className="active" to="/home">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
              <a href="#" className="btn-download">
                <i className="bx bxs-cloud-download" />
                <span className="text">Download PDF</span>
              </a>
            </div>
            <ul className="box-info">
              <li>
                <i className="bx bxs-calendar-check" />
                <span className="text">
                  <h3>0</h3>
                  <p>New Order</p>
                </span>
              </li>
              <li>
                <i className="bx bxs-group" />
                <span className="text">
                  <h3>0</h3>
                  <p>Visitors</p>
                </span>
              </li>
              <li>
                <i className="bx bxs-dollar-circle" />
                <span className="text">
                  <h3>0</h3>
                  <p>Total Sales</p>
                </span>
              </li>
            </ul>
            <div className="table-data">
              <div className="order">
                <div className="head">
                  <h3>Recent {head.head} </h3>
                  <i className="bx bx-search" />
                  <i className="bx bx-filter" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Users</th>
                      <th>Mobile Number</th>
                      <th>Status</th>
                      <th>AccountType</th>
                      <th>Email</th>
                      <th>user Id</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="./images/user.png" />
                        <p>{data.FullName}</p>
                      </td>
                      <td>
                        <p>{data.MobileNumber}</p>
                      </td>
                      <td>
                        <span className="status completed">Completed</span>
                      </td>

                      <td>
                        <p>{data.AccountType}</p>
                      </td>
                      <td>
                        <p>{data.Email}</p>
                      </td>
                      <td>
                        <p>{data._id}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          {/* MAIN */}
        </section>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* SIDEBAR */

  /* CONTENT */
  #content {
    position: relative;
    width: calc(100% - 280px);
    left: 140px;
    transition: 0.3s ease;
  }
  #sidebar.hide ~ #content {
    width: calc(100% - 60px);
    left: 60px;
  }

  /* NAVBAR */
  #content nav {
    height: 56px;
    background: var(--light);
    padding: 0 24px;
    display: flex;
    align-items: center;
    grid-gap: 24px;
    font-family: var(--lato);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  #content nav::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: -40px;
    left: 0;
    border-radius: 50%;
    box-shadow: -20px -20px 0 var(--light);
  }
  #content nav a {
    color: var(--dark);
  }
  #content nav .bx.bx-menu {
    cursor: pointer;
    color: var(--dark);
  }
  #content nav .nav-link {
    font-size: 16px;
    transition: 0.3s ease;
  }
  #content nav .nav-link:hover {
    color: var(--blue);
  }
  #content nav form {
    max-width: 400px;
    width: 100%;
    margin-right: auto;
  }
  #content nav form .form-input {
    display: flex;
    align-items: center;
    height: 36px;
  }
  #content nav form .form-input input {
    flex-grow: 1;
    padding: 0 16px;
    height: 100%;
    border: none;
    background: var(--grey);
    border-radius: 36px 0 0 36px;
    outline: none;
    width: 100%;
    color: var(--dark);
  }
  #content nav form .form-input button {
    width: 36px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--blue);
    color: var(--light);
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 0 36px 36px 0;
    cursor: pointer;
  }
  #content nav .notification {
    font-size: 20px;
    position: relative;
  }
  #content nav .notification .num {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--light);
    background: var(--red);
    color: var(--light);
    font-weight: 700;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #content nav .profile img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
  }
  #content nav .switch-mode {
    display: block;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    background: var(--grey);
    cursor: pointer;
    position: relative;
  }
  #content nav .switch-mode::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: calc(25px - 4px);
    background: var(--blue);
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  #content nav #switch-mode:checked + .switch-mode::before {
    left: calc(100% - (25px - 4px) - 2px);
  }
  /* NAVBAR */

  /* MAIN */
  #content main {
    width: 100%;
    padding: 36px 24px;
    font-family: var(--poppins);
    max-height: calc(100vh - 56px);
    overflow-y: auto;
  }
  #content main .head-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 16px;
    flex-wrap: wrap;
  }
  #content main .head-title .left h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--dark);
  }
  #content main .head-title .left .breadcrumb {
    display: flex;
    align-items: center;
    grid-gap: 16px;
  }
  #content main .head-title .left .breadcrumb li {
    color: var(--dark);
  }
  #content main .head-title .left .breadcrumb li a {
    color: var(--dark-grey);
    pointer-events: none;
  }
  #content main .head-title .left .breadcrumb li a.active {
    color: var(--blue);
    pointer-events: unset;
  }
  #content main .head-title .btn-download {
    height: 36px;
    padding: 0 16px;
    border-radius: 36px;
    background: var(--blue);
    color: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    font-weight: 500;
  }

  #content main .box-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 24px;
    margin-top: 36px;
  }
  #content main .box-info li {
    padding: 24px;
    background: var(--light);
    border-radius: 20px;
    display: flex;
    align-items: center;
    grid-gap: 24px;
  }
  #content main .box-info li .bx {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #content main .box-info li:nth-child(1) .bx {
    background: var(--light-blue);
    color: var(--blue);
  }
  #content main .box-info li:nth-child(2) .bx {
    background: var(--light-yellow);
    color: var(--yellow);
  }
  #content main .box-info li:nth-child(3) .bx {
    background: var(--light-orange);
    color: var(--orange);
  }
  #content main .box-info li .text h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--dark);
  }
  #content main .box-info li .text p {
    color: var(--dark);
  }

  #content main .table-data {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 24px;
    margin-top: 24px;
    width: 100%;
    color: var(--dark);
  }
  #content main .table-data > div {
    border-radius: 20px;
    background: var(--light);
    padding: 24px;
    overflow-x: auto;
  }
  #content main .table-data .head {
    display: flex;
    align-items: center;
    grid-gap: 16px;
    margin-bottom: 24px;
  }
  #content main .table-data .head h3 {
    margin-right: auto;
    font-size: 24px;
    font-weight: 600;
  }
  #content main .table-data .head .bx {
    cursor: pointer;
  }

  #content main .table-data .order {
    flex-grow: 1;
    flex-basis: 500px;
  }
  #content main .table-data .order table {
    width: 100%;
    border-collapse: collapse;
  }
  #content main .table-data .order table th {
    padding-bottom: 12px;
    font-size: 13px;
    text-align: left;
    border-bottom: 1px solid var(--grey);
  }
  #content main .table-data .order table td {
    padding: 16px 0;
  }
  #content main .table-data .order table tr td:first-child {
    display: flex;
    align-items: center;
    grid-gap: 12px;
    padding-left: 6px;
  }
  #content main .table-data .order table td img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }
  #content main .table-data .order table tbody tr:hover {
    background: var(--grey);
  }
  #content main .table-data .order table tr td .status {
    font-size: 10px;
    padding: 6px 16px;
    color: var(--light);
    border-radius: 20px;
    font-weight: 700;
  }
  #content main .table-data .order table tr td .status.completed {
    background: var(--blue);
  }
  #content main .table-data .order table tr td .status.process {
    background: var(--yellow);
  }
  #content main .table-data .order table tr td .status.pending {
    background: var(--orange);
  }

  @media screen and (max-width: 768px) {
    #sidebar {
      width: 200px;
    }

    #content {
      width: calc(100% - 60px);
      left: 200px;
    }

    #content nav .nav-link {
      display: none;
    }
  }

  @media screen and (max-width: 576px) {
    #content nav form .form-input input {
      display: none;
    }

    #content nav form .form-input button {
      width: auto;
      height: auto;
      background: transparent;
      border-radius: none;
      color: var(--dark);
    }

    #content nav form.show .form-input input {
      display: block;
      width: 100%;
    }
    #content nav form.show .form-input button {
      width: 36px;
      height: 100%;
      border-radius: 0 36px 36px 0;
      color: var(--light);
      background: var(--red);
    }

    #content nav form.show ~ .notification,
    #content nav form.show ~ .profile {
      display: none;
    }

    #content main .box-info {
      grid-template-columns: 1fr;
    }

    #content main .table-data .head {
      min-width: 420px;
    }
    #content main .table-data .order table {
      min-width: 420px;
    }
    #content main .table-data .todo .todo-list {
      min-width: 420px;
    }
  }

  @media screen and (max-width: 768px) {
    #content {
      left: 17px;
    }

    #content main .box-info li {
      margin-left: -43px;
       width: 208px;
    }

   #content main .table-data .order {
    margin: 0px -33px 0px -23px;
   }

   #content main .table-data .order table {
    min-width: 420px;
}
  }
`;

export default Admin;