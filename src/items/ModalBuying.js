import React, {useState} from "react";
import Modal from "react-modal";

const ModalBuying = (props) => {
    const [buyCount, setBuyCount] = useState(1);
    const [nowPrice] = useState(12000);
    const [purchasePrice, setPurchasePrice] = useState(nowPrice);


    const decrease = e => {
        e.preventDefault();
        setBuyCount(buyCount-1)
        setPurchasePrice((buyCount-1) * nowPrice)
    }
    const increase = e => {
        e.preventDefault();
        setBuyCount(buyCount+1)
        setPurchasePrice((buyCount+1) * nowPrice)
    }

    const modalStyle = {
        content : {
            width : '300px',
            height : '400px'
        }
    }

    return <>
        <Modal {...props} style={modalStyle}>
            <span className="text-base" style={{"margin-right" : "8px"}}>현재가</span>
            <span className="text-xl ">{nowPrice} 원</span> <br/>

            <span className="text-base" style={{"margin-right" : "8px"}}>매입가</span>
            <span className="text-xl ">{purchasePrice} 원</span>

            <h1>{buyCount} 주</h1>
            <div>
                <button className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-rounded btn-raised"
                        onClick={decrease}> -1 </button>
                <button className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-rounded btn-raised"
                        onClick={increase}> +1 </button>
            </div>
            <tr>
                <td>
                    <button className="btn btn-default bg-grey-500 hover:bg-grey-600 text-white btn-rounded"
                            onClick={ props.isClose }>취소</button>
                </td>
                <td>
                    <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                            onClick={ props.isClose }>매수</button>
                </td>
            </tr>
        </Modal>
    </>
}

export default ModalBuying;