import { useMultistepForm } from "../hooks/useMultistepForm.tsx";
import ServiceInfoForm from "../components/orderPageForms/ServiceInfoForm.jsx";
import LoginPage from "./login";
import ClientInformationForm from "../components/orderPageForms/ClientInformation";
import FinishOrder from "../components/orderPageForms/FinishOrder";
import { useContext } from "react";
import { OrderList } from "../context/orderList";
import { FormData } from "../context/FormData";
import { useNavigate } from "react-router-dom";
import NavBarLayout from "../layouts/NavBarLayout";

const OrderPage = ({ user }) => {
  const stepsTitles = ["Select Service", "Client information", "Finish order"];
  const { formData, setFormData } = useContext(FormData);
  const { orderList, setOrderList } = useContext(OrderList);
  const navigate = useNavigate();
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next
  } = useMultistepForm([<ServiceInfoForm />, <ClientInformationForm />, <FinishOrder />]);

  if (!user) {
    return <LoginPage />
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
    console.log(orderList);

    navigate("/main");

  }

  return (
    <NavBarLayout>
      <div className="order-pg--content">
        <div className="order-pg--content--title">
          <h1 className="order-pg--content--title--register">Register new order</h1>
          <span className="order-pg--content--title--cur-step">Step {currentStepIndex + 1}/{steps.length} - {stepsTitles[currentStepIndex]}</span>
        </div>
        <form onSubmit={onSubmit} className="order-pg--form">
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
    </NavBarLayout>
  );
}

export default OrderPage;