import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import CircularProgress from '@material-ui/core/CircularProgress';



//import Car from "../assets/img/car.jpg";
//import Spinner from "./Spinner";

const CLIENT = {
  sandbox:
    "AY9QgF4-noBKaJ4b4yVVv4wbt5qz-CohrktWRJtj0HDke33g6_NwVRwTWuwyZ5JvtIaHZ8fVfpNc6534",
  production:
    "your_production_key"
};

const CLIENT_ID =
  process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

//let PaypalCheckoutButton = null
class PaypalCheckoutButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false
    };
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PaypalCheckoutButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PaypalCheckoutButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {
    console.log("Value: ", this.props.value)
    return actions.order.create({
      purchase_units: [
        {
          description: +"Mercedes G-Wagon",
          amount: {
            currency_code: "USD",
            value: 100
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      };
      console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
    });
  };

  render() {

    return (
      <div className="main">
        {this.state.loading && <CircularProgress />}

        {this.state.showButtons && (
          <div>
            <div>
              <h2>Items: Mercedes G-Wagon</h2>
              <h2>Total checkout Amount $200</h2>
            </div>

            <PaypalCheckoutButton
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />
          </div>
        )}

        {this.state.paid && (
          <div className="main">
            <h2>
              Congrats! you just paid for that picture. Work a little harder and
                 you'll be able to afford the car itself{" "}
              <span role="img" aria-label="emoji">
                {" "}
                   😉
                 </span>
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalCheckoutButton);