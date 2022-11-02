import { useContext } from "react";
import { FormData } from "../../context/FormData";

const ClientInformationForm = () => {
    const { formData, setFormData } = useContext(FormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (
        <>
            <div className={"order-pg--form--row"}>
                <div className="label">
                    <label>Name</label>
                    <span className="label-hint">hint</span>
                </div>
                <input type={"text"} name={"clientName"} value={formData.clientName} placeholder={"Vasile Alecsandri"} onChange={handleChange} required />
            </div>
            <div className={"order-pg--form--row"}>
                <div className="label">
                    <label>Phone</label>
                    <span className="label-hint">hint</span>
                </div>
                <input type={"text"} name={"clientPhone"} value={formData.clientPhone} placeholder={"+373(________)"} onChange={handleChange} required />
            </div>
            <div className={"order-pg--form--row"}>
                <div className="label">
                    <label>E-mail</label>
                    <span className="label-hint">hint</span>
                </div>
                <input type={"text"} name={"clientEmail"} value={formData.clientEmail} placeholder={"client@power-beauty.md"} onChange={handleChange} required />
            </div>
            <div className={"order-pg--form--row"}>
                <label>Comments</label>
                <textarea name="clientComment" value={formData.clientComment} className="commentary" onChange={handleChange}></textarea>
            </div>
        </>
    )
}

export default ClientInformationForm