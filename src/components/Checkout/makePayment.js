import { initializeRazorpay } from "./initializeRazorpay";
import { toast } from "react-toastify";
const makePayment = async ({ totalPrice, dispatch, token }) => {
  const res = await initializeRazorpay();
  const notify = (msg) => toast(msg);
  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  var options = {
    key: "rzp_test_bZrAMgH5aNRY0R",
    key_id: "rzp_test_bZrAMgH5aNRY0R",
    key_secret: "MleEXZwfKLDGsRfnDhYzsxSf",
    name: "Winter Store Pvt Ltd",
    currency: "INR",
    amount: totalPrice * 100,
    description: "Thankyou for your test donation",

    handler: function (response) {
      // Validate payment at server - using webhooks is a better idea.
      var id = response.razorpay_payment_id.slice(0, 8);
      notify(`Payment is done successfully with orderno- ${id}`);
      dispatch({ type: "CLEAR_FROM_CART", payload: token });
    },
    prefill: {
      name: "Ayushi Verma",
      email: "test@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export { makePayment };
