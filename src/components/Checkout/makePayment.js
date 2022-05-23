import { initializeRazorpay } from "./initializeRazorpay";

const makePayment = async ({ totalPrice, dispatch, token }) => {
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  var options = {
    key: "rzp_test_bZrAMgH5aNRY0R", // Enter the Key ID generated from the Dashboard
    key_id: "rzp_test_bZrAMgH5aNRY0R",
    key_secret: "MleEXZwfKLDGsRfnDhYzsxSf",
    name: "Winter Store Pvt Ltd",
    currency: "INR",
    amount: totalPrice * 100,
    description: "Thankyou for your test donation",

    handler: function (response) {
      // Validate payment at server - using webhooks is a better idea.
      alert(
        `Your payment is done with orderno-,${response.razorpay_payment_id}`
      );
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
