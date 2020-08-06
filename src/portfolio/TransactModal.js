import React, {useState} from "react";

const TransactionModal = () => {
    const [count, setCount] = useState(0);

    return <>
        <div
            className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">

                    <span className="text-base" style={{"margin-right" : "8px"}}>현재가</span>
                    <span className="text-xl ">123,320원</span>

                    <span className="text-base" style={{"margin-right" : "28px"}}>매입가</span>
                    <span className="text-xl ">123,320원</span>

                    <h1>{count}</h1>
                    <div>
                        <button> +1 </button>
                        <button> -1 </button>
                    </div>
                    <tr>
                        <td>
                            <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded">취소</button>
                        </td>
                        <td>
                            <button className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded">매수</button>
                        </td>
                    </tr>


                </div>
            </div>
        </div>

    </>
}

export default TransactionModal;