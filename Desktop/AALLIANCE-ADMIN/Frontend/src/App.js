import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import ProductForm from "./Components/ProductForm";
import ManageProducts from "./Components/ManageProducts";
import ManagePincodes from "./Components/ManagePincodes";
import PincodeForm from "./Components/PincodeForm";
import ProtectedRoute from "./Components/ProtectedRoute";
import BulkUpload from "./Components/BulkUpload"; // Import BulkUpload component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={Dashboard} />}
        />
        <Route
          path="/manage-products"
          element={<ProtectedRoute element={ManageProducts} />}
        />
        <Route
          path="/add-product"
          element={<ProtectedRoute element={ProductForm} />}
        />
        <Route
          path="/edit-product/:id"
          element={<ProtectedRoute element={ProductForm} />}
        />
        <Route
          path="/bulk-upload"
          element={<ProtectedRoute element={BulkUpload} />}
        />
        <Route
          path="/manage-pincodes"
          element={<ProtectedRoute element={ManagePincodes} />}
        />
        <Route
          path="/add-pincode"
          element={<ProtectedRoute element={PincodeForm} />}
        />
        <Route
          path="/edit-pincode/:id"
          element={<ProtectedRoute element={PincodeForm} />}
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
