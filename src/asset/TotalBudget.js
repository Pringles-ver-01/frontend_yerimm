import React, {useEffect, useState} from "react";
import axios from "axios";

const TotalBudget = () => {
    const [asset, setAsset] = useState({
            "assetId": 0,
            "totalAsset": 0,
            "transactionDate": null,
            "priceEarnigsRatio": 0,
            "profitLoss": 0,
            "shareCount": 0,
            "transactionType": false
        })


    useEffect(() => {
        axios.get(`http://localhost:8080/assets/test`)
            .then((response) => {
                setAsset(response.data)
            })
            .catch((error) => {
                console.log(`TotalBudget useEffect catch`)
                throw error
            })
    },[])


    return <>
        <table className="stock_table">
            <tr>
                <td>
                    <div
                        className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <tr>
                                    <td>
                                        <span className="text-base font-bold">내 자산 총액</span> <br/>
                                        <span className="text-2xl font-bold" style={{"margin" : "auto"}}>{asset.assetId}원</span>
                                    </td>
                                    <td>
                                        <span className="text-base">평가 수익률</span>
                                        <span className="text-lg font-bold">{asset.priceEarnigsRatio}%</span> <br/>
                                        <span className="text-base" style={{"margin-right":"12px"}}>평가 손익</span>
                                        <span className="text-lg font-bold">{asset.profitLoss}원</span>
                                    </td>
                                </tr>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </>
}

export default TotalBudget;