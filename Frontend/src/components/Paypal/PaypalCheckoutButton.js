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

const ENV = process.env.REACT_APP_PRODUCTION === 'production'
  ? 'production'
  : 'sandbox';
 

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      showButton: false,
    };
 
    window.React = React;
    window.ReactDOM = ReactDOM;
  }
 
  componentDidMount() {
    const {
      isScriptLoaded,
      isScriptLoadSucceed
    } = this.props;
 
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true });
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const {
      isScriptLoaded,
      isScriptLoadSucceed,
    } = nextProps;
 
    const isLoadedButWasntLoadedBefore =
      !this.state.showButton &&
      !this.props.isScriptLoaded &&
      isScriptLoaded;
 
    if (isLoadedButWasntLoadedBefore) {
      if (isScriptLoadSucceed) {
        this.setState({ showButton: true });
      }
    }
  }
 
  render() {
    const {
      total,
      currency,
      commit,
      onSuccess,
      onError,
      onCancel,
    } = this.props;

    const {
      showButton,
    } = this.state;


    const paypal = window.paypal
    
    
    const payment = () =>
      paypal.rest.payment.create(ENV, CLIENT, {
        transactions: [
          {
            amount: {
              total,
              currency,
            }
          },
        ],
      });
    const onAuthorize = (data, actions) =>
      actions.payment.execute()
        .then(() => {
          const payment = {
            paid: true,
            cancelled: false,
            payerID: data.payerID,
            paymentID: data.paymentID,
            paymentToken: data.paymentToken,
            returnUrl: data.returnUrl,
          };

          onSuccess(payment);
        });
        
    
    
    return (
      <div style={{paddingTop:"5px"}}>
        {showButton ? <paypal.Button.react
          env={ENV}
          client={CLIENT}
          commit={commit}
          payment={payment}
          onAuthorize={onAuthorize}
          onCancel={onCancel}
          onError={onError}
          style = {{
            size: 'medium',
            color: 'gold',
            shape: 'rect',
          }}
        /> : <CircularProgress/>}
      </div>
    );
  }
}
 
export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);