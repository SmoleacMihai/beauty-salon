import {useContext} from "react";
import {FormData} from "../../FormData";

const FinishOrder = () => {
    const {formData} = useContext(FormData);
    const orderInfo = [
        {
            title:"Service",
            info: formData.service
        },
        {
            title:"Master",
            info:formData.master
        },
        {
            title:"Date/Time",
            info:formData.date + " " + formData.startsAt + " " + formData.endsAt
        },
        {
            title: "Price",
            info: formData.price
        },
        {
            title: "Client name",
            info: formData.clientName
        },
        {
            title:"Client phone",
            info: formData.clientPhone
        },
        {
            title:"Client email",
            info: formData.clientEmail
        },
        {
            title:"Comments",
            info:formData.clientComment
        }
    ];



    return (
        <>
            <div className={"finishOrder"}>
                {
                    orderInfo.map(order =>
                        <div className={"row"}>
                            <span>{order.title}</span>
                            <span className={"ml-auto"}>{order.info}</span>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default FinishOrder;