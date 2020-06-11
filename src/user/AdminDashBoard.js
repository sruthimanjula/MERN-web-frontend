import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAutheticated();

  const adminLeftSide = () => {
    return (
      <div className="card mb-3">
        <h5 className="card-header text-dark">Admin Navigation</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/project" className="nav-link text-success">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/projects" className="nav-link text-success">
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-success">
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h5 className="card-header">Admin Information</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2 white-text">Name:</span>{" "}
            {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2 white-text">Email:</span>{" "}
            {email}
          </li>

          <li className="list-group-item">
            <span className="badge badge-danger white-text">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    /*<Base
      title="Welcome to admin area"
      description="Manage all of your products here"
      //className="container bg-success p-4"
    >*/
    <div className="bg-dark">
      <div className="text-center white-text">
        <h3>Welcome To Admin Area</h3>
      </div>
      <div>
        <h6 className="text-center white-text">Manage All Your Proucts Here</h6>
      </div>
      <div className="row">
        <div className="col-12">{adminLeftSide()}</div>
      </div>
      <div className="row">
        <div className="col-12">{adminRightSide()}</div>
      </div>
    </div>
    //</Base>
  );
};

export default AdminDashBoard;
