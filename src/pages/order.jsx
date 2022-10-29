import NavBar from "../components/NavBar";
import { useMultistepForm } from "../utils/hooks/useMultistepForm.tsx";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ServiceInfoForm from "../components/orderPageForms/ServiceInfoForm.tsx";
import LoginPage from "./login";
import {useForm} from "react-hook-form";

const OrderPage = ({user}) => {
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next
  } = useMultistepForm([<ServiceInfoForm />, <div>hi guys</div>]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange"
  });

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  if (!user) {
    return <LoginPage/>
  }

  const stepsTitles = ["Select Service", "Client information", "Finish order"];

  return (
    <>
      <NavBar />
      <div className="order-pg--content">
        <div className="order-pg--content--title">
          <h1 className="order-pg--content--title--register">Register new order</h1>
          <span className="order-pg--content--title--cur-step">Step {currentStepIndex + 1}/{steps.length} - {stepsTitles[currentStepIndex]}</span>
        </div>

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
      </div>
    </>
  );
}

export default OrderPage;