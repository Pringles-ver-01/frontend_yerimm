import React, {useEffect, useState} from "react";
import axios from "axios";

const BudgetHistory = () => {
    const [list, setList] = useState([]);
    let transactionDetail = []

    useEffect(() => {
        transactionDetail = []
        axios.get(`http://localhost:8080/`)
            .then(({response}) => {
                console.log(`BudgetHistory useEffect then`)
                response.list.map(elem => { //java에서 어떤 형식으로 response를 넘길지..
                    transactionDetail.push(elem)
                })
            })
            .catch(error => {
                console.log(`BudgetHistory useEffect err`)
                throw error
            })
    }, [transactionDetail])


    return <>
        <table className="table">
            <thead>
            <tr>
                <th>거래날짜</th>
                <th>종목</th>
                <th>거래 종류</th>
                <th>금액</th>
                <th>잔액</th>
            </tr>
            </thead>
            <tbody>
            {transactionDetail.map((item) => (
                <tr>
                    <td>{item.transactionDate}</td>
                    <td>{item.stockName}</td>
                    <td>{item.transactionType}</td>
                    <td>{item.profitLoss}</td>
                    <td>{item.totalAsset}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
}

export default BudgetHistory;