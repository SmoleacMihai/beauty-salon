import { useForm } from 'react-hook-form';
import ServiceInfoFormModel from '../../static/ordersSteps/ServiceInfoFormModel.json';
import FormInputs from './formInputs/FormInputs';

const Form = () => {
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

export default Form;