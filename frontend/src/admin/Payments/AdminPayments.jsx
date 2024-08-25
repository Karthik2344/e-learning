import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../main";
import Layout from "../Utils/Layout";
import toast from "react-hot-toast";
import "./adminpayments.css"; // Create a CSS file for styling

const AdminPayments = ({ user }) => {
  const [payments, setPayments] = useState([]);

  async function fetchPayments() {
    try {
      const { data } = await axios.get(`${server}/api/payments`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setPayments(data.payments);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch payments");
    }
  }

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <Layout>
      <div className="admin-payments">
        <div className="headp">
          <h1>All Payments</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Payment ID</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment.razorpay_order_id}</td>
                <td>{payment.razorpay_payment_id}</td>
                <td>{new Date(payment.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default AdminPayments;
