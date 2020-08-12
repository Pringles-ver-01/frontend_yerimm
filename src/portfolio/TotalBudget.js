import React, {useEffect} from "react";
import axios from "axios";
import {element} from "prop-types";

const TotalBudget = () => {
    let budgetDetail = []

    useEffect(() => {
        budgetDetail = []
        axios.get(`http://localhost:8080/`)
            .then((response) => {
                console.log(`TotalBudget useEffect then`)
                response.data.map(element => {
                    budgetDetail.push(element)
                })
            })
            .catch((error) => {
                console.log(`TotalBudget useEffect catch`)
                throw error
            })
    }, [budgetDetail])

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
                                        <span className="text-2xl font-bold" style={{"margin" : "auto"}}>{budgetDetail} 원</span>
                                    </td>
                                    <td>
                                        <span className="text-base">평가 수익률</span>
                                        <span className="text-lg font-bold">{budgetDetail} %</span> <br/>
                                        <span className="text-base" style={{"margin-right":"12px"}}>평가 손익</span>
                                        <span className="text-lg font-bold">{budgetDetail} 원</span>
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