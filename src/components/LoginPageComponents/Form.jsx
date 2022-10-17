import { useForm } from 'react-hook-form';
import formModel from '../../static/LoginPageFormModel.json';
import FormInputs from '../formInputs/FormInputs';

const Form = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      userName: 'root@domain.com',
      password: "12345678"
    }
  });

  const onSubmit = (fields) => {
    console.log(fields);
    reset();
  }
  return (
    <div className={props.className}>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={props.formClassName}
      >
        {formModel.map(element => (
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
    </div>
  )
}

export default Form;