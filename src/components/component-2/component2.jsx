import { useEffect, useState } from "react"
import { Card } from "../card/card"
import { fetchData } from "../../services"

export const Component2 = () => {
    const [data, setData] = useState([]);
    const [total, setSubtotal] = useState([0,0,0,0,0]);
    const [addingUp, setAddingUp] = useState(0);

    const nambah = (number, idx) => {
        const newHarga = [...total];
        newHarga[number] = idx;
        setSubtotal(newHarga)

    }

    const sumAddingUp = () => {
        const sum = total.reduce((a, b) => a + b, 0)
        setAddingUp(sum)
    }

    const formatIDR = (price) => {
        let num = price;
        let rupiahFormat = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(num);

        return rupiahFormat;
    }

    useEffect(() => {
        fetchData().then((data) => setData(data))

    },[])

    useEffect(() => {
        sumAddingUp();
    },[total, data])

    return (
        <>
            <section className="component-2 container">
                <h1>SPE Frontend Shop</h1>

                <div className="table">
                    <div className="tableWrapper">
                        <div className="table-header">
                            <div className="table-product">PRODUCT</div>
                            <div className="table-quantity">QUANTITY</div>
                            <div className="table-subtotal">SUBTOTAL</div>
                        </div>
                        
                        {data ? 
                        
                            data.map((data, idx) => {
                                return <Card key={idx} data={data} total={total} setTotal={nambah} no={idx} format={formatIDR}/>
                            })
                        : ''}
    
                        <div className="table-footer">
                            <span> TOTAL</span>
                            <span className="totalAdding">{formatIDR(addingUp)}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    
        
    )
}