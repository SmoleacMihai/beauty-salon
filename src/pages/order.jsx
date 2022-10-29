import NavBar from "../components/NavBar";
import { useMultistepForm } from "../utils/hooks/useMultistepForm.tsx";
import ServiceInfoForm from "../components/orderPageForms/ServiceInfoForm.jsx";
import LoginPage from "./login";
import ClientInformationForm from "../components/orderPageForms/ClientInformation";
import FinishOrder from "../components/orderPageForms/FinishOrder";
import {useContext} from "react";
import {OrderList} from "../orderList";
import {FormData} from "../FormData";
import {useNavigate} from "react-router-dom";

const OrderPage = ({user}) => {
  const stepsTitles = ["Select Service", "Client information", "Finish order"];
  const {formData, setFormData} = useContext(FormData);
  const {orderList, setOrderList} = useContext(OrderList);
  const goTo = useNavigate();
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next
  } = useMultistepForm([<ServiceInfoForm />, <ClientInformationForm/>, <FinishOrder />]);

  if (!user) {
    return <LoginPage/>
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isLastStep) return next();

    setOrderList((prevOrderList) => {
      return [
          ...prevOrderList,
          formData
      ]
    });

    setFormData({});

    goTo("/main");

  }

  return (
    <>
      <NavBar />
      <div className="order-pg--content">
        <div className="order-pg--content--title">
          <h1 className="order-pg--content--title--register">Register new order</h1>
          <span className="order-pg--content--title--cur-step">Step {currentStepIndex + 1}/{steps.length} - {stepsTitles[currentStepIndex]}</span>
        </div>
        <form onSubmit={onSubmit}>
          {step}
          <div>
            {
                !isFirstStep &&
                <button type="button" onClick={back}>
                  Back
                </button>
            }
            <button type="submit">
              {!isLastStep ? "Next" : "Create Order"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderPage;