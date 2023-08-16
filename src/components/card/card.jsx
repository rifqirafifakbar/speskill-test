import { useEffect, useState } from "react";

export const Card = (props) => {
    const data = props.data;
    const [addingUp, setAddingUp] = useState(1);

    useEffect(() => {
        props.setTotal(props.no, data.product.price * addingUp)
    },[data, addingUp, props])

    const formatIDR = (price) => {
        let num = price;
        let rupiahFormat = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(num);

        return rupiahFormat;
    }

    return (
        <div className="card">
            <div className="card-img">
                <img src="https://res.cloudinary.com/davidrivaldy/image/upload/v1599670549/spe-academy/AutoArt_-_Bugatti_Vision_Gran_Turismo_wyo3ap.jpg" alt="" className="car"/>
            </div>
            <div className="card-description">
                <span className="id">{data.product.code}</span>
                <span className="name">{data.product.name}</span>
                <span className="price">{formatIDR(data.product.price)}</span>
                <span className="stock">{data.quantity} in stock</span>
            </div>
            <div className="quantity">
                <input 
                    type="number" 
                    value={addingUp}
                    onChange={(e) => setAddingUp(Number(e.target.value))}
                />
            </div>
            <div className="subtotal">
                <span>{formatIDR(data.product.price * addingUp)}</span>
            </div>
        </div>

    )
}