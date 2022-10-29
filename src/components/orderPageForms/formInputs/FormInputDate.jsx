const FormInputDate = ({ element, register, errors }) => {
    const { type, name, label, options } = element;
    return(
        <>
            <p>{label}</p>
            <input
                type={element.type}
                name={element.name}
                {...register(element.name, {...element.register})}
            />
            {errors[name] && <p>{errors[name].message}</p>}
        </>
    )
};

export default FormInputDate;