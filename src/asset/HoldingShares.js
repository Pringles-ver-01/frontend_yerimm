import React, {useEffect, useState} from "react";
import {ModalBuying, ModalSelling} from "../items";
import axios from "axios";

const HoldingShares = () => {
    const [buyOpen, setBuyOpen] = useState(false);
    const [sellOpen, setSellOpen] = useState(false);

    let holdingShares = []

    /*useEffect(() => {
        holdingShares = []
        axios.get(`http://localhost:8080/`)
            .then((response)=>{
                console.log(`{response}  : HoldingShares java useEffect then`)
                response.data.map(element => {
                    holdingShares.push(element)
                })
            })
            .catch((error) => {
                console.log(`HoldingShares useEffect catch`)
                throw error
            })
    }, [holdingShares])

    useEffect(() => {
        axios.get(`http://localhost:8080/python`)
            .then((response)=> {
                console.log(`HoldingShares python useEffect then`)
                //response.data.nowPrice
            })
    })*/

    return <>
        <table>
            {holdingShares.map((item)=>(
                <tr>
                    <td>
                        <div
                            className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-col">
                                    <tr>
                                        <td style={{"min-width" : "200px"}}>
                                            <span className="text-xl font-bold">{item.stockName}</span>
                                            <span className="text-sm" style={{"margin-left" : "8px"}}>{item.symbol}</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                                                    onClick={() => setBuyOpen(true)}>매수</button>
                                            <button className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded"
                                                    onClick={() => setSellOpen(true)}>매도</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{"min-width" : "200px"}}>
                                            <span className="text-base" style={{"margin-right" : "42px"}}>잔고</span>
                                            <span className="text-xl">{item.shares}주</span>
                                        </td>
                                        <td style={{"min-width" : "200px"}}>
                                            <span className="text-base" style={{"margin-right" : "20px"}}>손익</span>
                                            <span className="text-xl ">2,389,238 원</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{"min-width" : "200px"}}>
                                            <span className="text-base" style={{"margin-right" : "8px"}}>평가 금액</span>
                                            <span className="text-xl ">123,320원</span>
                                        </td>
                                        <td style={{"min-width" : "200px"}}>
                                            <span className="text-base" style={{"margin-right" : "8px"}}>수익률</span>
                                            <span className="text-xl ">32.59%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{"min-width" : "200px"}}>
                                            <span className="text-base" style={{"margin-right" : "28px"}}>매입가</span>
                                            <span className="text-xl ">123,320원</span>
                                        </td>
                                        <td style={{"min-width" : "200px"}}>
                                            <span className="text-base" style={{"margin-right" : "8px"}}>현재가</span>
                                            <span className="text-xl ">123,320원</span>
                                        </td>
                                    </tr>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            ))}
        </table>
        <ModalBuying isOpen={buyOpen} isClose={ () => setBuyOpen(false) }/>
        <ModalSelling isOpen={sellOpen} isClose={ () => setSellOpen(false) }/>
    </>
}

export default HoldingShares;