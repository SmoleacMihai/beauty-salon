import {useContext} from "react";
import {FormData} from "../../FormData";

const ServiceInfoForm = () => {
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
                <label>Service category</label>
                <select name={"service-category"} value={formData["service-category"]} onChange={handleChange} required>
                    <option>Hair</option>
                    <option>Nails</option>
                </select>
            </div>
            <div className={"row"}>
                <label>Service</label>
                <select name={"service"} value={formData.service} onChange={handleChange} required>
                    <option>Pedicure</option>
                    <option>Manicures</option>
                    <option>Hair paint</option>
                    <option>Hair cut</option>
                </select>
            </div>
            <div className={"row"}>
                <label>Master</label>
                <select name={"master"} value={formData.master} onChange={handleChange} required>
                    <option>Ion</option>
                    <option>Vasile</option>
                    <option>Andrei</option>
                    <option>Gheorghe</option>
                </select>
            </div>
            <div className={"row"}>
                <label>Date</label>
                <input type={"date"} value={formData.date} name={"date"} onChange={handleChange} required/>
            </div>
            <div className={"row"}>
                <label>Time</label>
                <input type={"text"} name={"startsAt"} value={formData.startsAt} placeholder={"15:45"} onChange={handleChange} required/>
                <input type={"text"} name={"endsAt"} value={formData.endsAt} placeholder={"17:00"} onChange={handleChange} required/>
            </div>
            <div className={"row"}>
                <label>Price</label>
                <input type={"text"} name={"price"} value={formData.price} placeholder={"1234.50"} onChange={handleChange} required/>
                <select name={"currency"} value={formData.currency} onChange={handleChange} required>
                    <option>MDL</option>
                    <option>RUB</option>
                    <option>EUR</option>
                </select>
            </div>
        </>
    )
}

export default ServiceInfoForm;