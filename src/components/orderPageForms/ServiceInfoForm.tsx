import FormInputs from './formInputs/FormInputs';
import ServiceInfoFormModel from "../../static/ordersSteps/ServiceInfoFormModel.json"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from 'react-hook-form';
const ServiceInfoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange"
  });

  const onSubmit = (fields) => {
    console.log(fields);
    reset();
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        {ServiceInfoFormModel.map(element => (
          <FormInputs
            key={element.name}
            element={element}
            register={register}
            errors={errors}
          />
        ))}
        <input
          type={'submit'}
        />
      </form>
    </>
  )
}
 
export default ServiceInfoForm;