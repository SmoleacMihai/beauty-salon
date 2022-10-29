import {useContext} from "react";
import {FormData} from "../../FormData";

const ClientInformationForm = () => {
    const {formData, setFormData} = useContext(FormData);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (
        <>
            <div className={"row"}>
                <label>Name</label>
                <input type={"text"} name={"clientName"} value={formData.clientName} placeholder={"Vasile Alecsandri"} onChange={handleChange} required/>
            </div>
            <div className={"row"}>
                <label>Phone</label>
                <input type={"text"} name={"clientPhone"} value={formData.clientPhone} placeholder={"+373(________)"} onChange={handleChange} required/>
            </div>
            <div className={"row"}>
                <label>E-mail</label>
                <input type={"text"} name={"clientEmail"} value={formData.clientEmail} placeholder={"client@power-beauty.md"} onChange={handleChange} required/>
            </div>
            <div className={"row"}>
                <label>Comments</label>
                <input type={"textarea"} name={"clientComment"} value={formData.clientComment} placeholder={"Add some comments here. This fiel is optional"} onChange={handleChange}/>
            </div>
        </>
    )
}

export default ClientInformationForm