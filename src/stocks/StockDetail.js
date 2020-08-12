import React, {useEffect, useState} from "react";
import "./stockDetail.css";
import { ModalSelling, ModalBuying } from "../items";
import axios from "axios";

const StockDetail = () => {
    const [buyOpen, setBuyOpen] = useState(false);
    const [sellOpen, setSellOpen] = useState(false);

    let stockDetail = []

    useEffect(()=>{
        stockDetail = []
        axios.get(`http://localhost:8080/`)
            .then((response) => {
                console.log(`StockDetail useEffect then python`)
                response.data.map(element => {
                    stockDetail.push(element)
                })
            })
            .catch((error) => {
                console.log(`StockDetail useEffect catch python`)
                throw error
            })
    }, [stockDetail])

    return <>
        <table className="stock_table">
            <tr>
                <td>
                    <span className={"text-2xl font-bold stock_name"}>상장주식이름</span>
                    <span className={"text-xs"}>(024832)</span>
                </td>
                <td>
                    <span className={"text-xs"}>2020.08.21 기준</span>
                </td>
                <td>
                    <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"
                            onClick={() => setBuyOpen(true)}>매수</button>
                    <button className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded"
                            onClick={() => setSellOpen(true)}>매도</button>
                </td>
            </tr>
            <tr>
                <td>
                    <div
                        className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <div className="text-xl font-bold">34,291</div>
                                <div className="text-xs font-light text-grey-500">전일대비 🔼 390 | + 0.93%</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td colSpan={2}>
                    <div
                        className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90 card_second">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <table>
                                    <tr>
                                        <td className="card_grid">
                                            <span className="text-xs font-light text-grey-500 stocks_data">전일</span>
                                            <span className="text-xl font-bold text_row">34,291</span><br/>
                                            <span className="text-xs font-light text-grey-500 stocks_data">시가</span>
                                            <span className="text-xl font-bold">34,291</span>
                                        </td>
                                        <td className="card_grid">
                                            <span className="text-xs font-light text-grey-500 stocks_data">고가</span>
                                            <span className="text-xl font-bold text_row">34,291</span><br/>
                                            <span className="text-xs font-light text-grey-500 stocks_data">저가</span>
                                            <span className="text-xl font-bold">34,291</span>
                                        </td>
                                        <td>
                                            <span className="text-xs font-light text-grey-500 stocks_data">거래량</span>
                                            <span className="text-xl font-bold text_row">34,291</span><br/>
                                            <span className="text-xs font-light text-grey-500 stocks_data">거래대금</span>
                                            <span className="text-xl font-bold">34,291</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <ModalBuying isOpen={buyOpen} isClose={ () => setBuyOpen(false) }/>
        <ModalSelling isOpen={sellOpen} isClose={ () => setSellOpen(false) }/>
    </>
}

export default StockDetail;