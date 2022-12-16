import React from "react";
import "./Payment.css";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PaymentHero from "../PaymentHero/PaymentHero";
import PaymentSideNav from "../PaymentSideNav/PaymentSideNav";
import { PaystackButton } from "react-paystack";

const Payment = () => {
  //  const paynowBTN = {
  //   background: '#FFC100',
  //   width: '175px',
  //   height: '40px',
  //   border: '1px solid #CBCBCB',
  // borderRadius: "15px",
  // fontFamily: 'Inter',
  // fontSize: '18px',
  // fontWeight: '400px',
  // lineHeight: '22px',
  // textAlign: 'center'

  //  }

  const publicKey = "pk_test_db37bd29f06bd4a133fbf14beb58aa2358ce7d41";
  const amount = 1000000; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  //  const [ , ] = useState([ ])

  //   const getSearchFilter = () =>{
  //     axios.get('https://easyrent.onrender.com/users/book/sort'). then((res)=>{

  //     })

  //     }

  // const PaymentHandler = () => {
  //   // ('https://sandbox-flw-web-v3.herokuapp.com/pay/htfx7pvbwqgl')
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }

  return (
    <div>
      <PaymentHero />
      <div className="payment-form-flex">
        <PaymentSideNav />
        {/* <div className="checkout-form"> */}
        <div className="checkout-form">
          <form >
            <div >
              <div className="checkout-field">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Phone</label>
                <input
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </form>
          <PaystackButton className="paystack-button" {...componentProps} />
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Payment;
