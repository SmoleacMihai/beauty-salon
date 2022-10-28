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

  const onSubmit = handleSubmit(data => {console.log(data)});
  return (
    <>
      <form
        onSubmit={onSubmit}
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