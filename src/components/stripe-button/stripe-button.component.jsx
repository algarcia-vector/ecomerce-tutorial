import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IikeAIuri4ifcKO2yyWzhdVGDS8gjK7o0GUEwUrhslyQToQWj4msVkRPba5nGPWj46TkjH5SzIqPYUg1562aDTz00gEVmOrhx";

  const onToken = (token) => {
    console.log(token);
    alert("Paymen Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
