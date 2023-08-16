import moment from "moment/moment"

export const Component1 = () => {
    return (
        <div className="section-1">

            <div className="box">
                <div className="wrapper">
                    <div className="tanggal">{moment().format('MMMM Do, YYYY - HH:mm:ss')}</div>
                    <div className="kiri"> {`< SPE / FRONTEND >`}</div>
                </div>
            </div>
        </div>
    )
}