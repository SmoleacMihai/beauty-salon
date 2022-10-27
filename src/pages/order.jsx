import NavBar from "../components/NavBar";
import { useMultistepForm } from "../utils/hooks/useMultistepForm.tsx";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ServiceInfoForm from "../components/orderPageForms/ServiceInfoForm.tsx";

const OrderPage = () => {
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next
  } = useMultistepForm([<ServiceInfoForm />]);
  return (
    <>
      <NavBar />
      <div className="order-pg--content">
        <div className="order-pg--content--title">
          <h1 className="order-pg--content--title--register">Register new order</h1>
          <span className="order-pg--content--title--cur-step">Step {currentStepIndex + 1}/{steps.length}</span>
        </div>
        <form>
          {step}
          <div>
            {
              !isFirstStep &&
              <button type="button" onClick={back}>
                <ArrowBackIosIcon />Back
              </button>
            }
            <button type="button" onClick={next}>
              {!isLastStep ? "Next" : "Finish"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderPage;