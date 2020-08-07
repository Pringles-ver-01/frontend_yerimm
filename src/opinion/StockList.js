import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './opinionList.css';

export const getStockList =  data => ({type: "GET_STOCKS_LIST", payload: data})

export const stocksReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_STOCKS_LIST": return action.payload
        default: return state
    }
}

export const stockList = () => dispatch => {
    axios.get(``)
        .then(response => {
            console.log(`stockList reducer THEN`)
            dispatch(getStockList(response.data))
        })
        .catch(error => {
            console.log(`stockList reducer CATCH`)
        })
}


const StockList = () => {
    const [stockName, setStockName] = useState("씨젠");
    const [price, setPrice] = useState(
        "310,600");
    const [change, setChange] = useState("+32,000");
    const [changePercentage, setChangePercentage] = useState("+11.84%");
    const [marketCap, setMarketCap] = useState("79,923(억)")
    const [volumeCurrency, setVolumeCurrency] = useState("43,589,400")
    const [arr, setArr] = useState([
        {
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        },
        {
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        },{
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        },{
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        },{
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        },{
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        },{
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        },{
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        },{
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        }
    ])

    const linktoDetail = e => {
        e.preventDefault();
    }

    return <>
        <table>
            <tr>
                <td>
                    <input type="search" name="search" placeholder="주식 종목을 입력하세요"
                           className="pl-10 pr-5 appearance-none h-10 w-full rounded-full text-sm focus:outline-none"/>
                </td>
                <td>
                    <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded register_btn">
                        <Link to="opinionRegister">검색</Link></button>
                </td>
            </tr>
        </table>
        <div className="w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
            <table className="table">
                <thead>
                <tr>
                    <th>종목</th>
                    <th>시세</th>
                    <th>전일비</th>
                    <th>등락률</th>
                    <th>시가 총액</th>
                    <th>거래량</th>
                </tr>
                </thead>
                <tbody>
                {arr.map((item)=>(
                    <tr onClick={linktoDetail}>
                        <td>{item.stockName}</td>
                        <td>{item.price}</td>
                        <td>{item.change}</td>
                        <td>{item.changePercentage}</td>
                        <td>{item.marketCap}</td>
                        <td>{item.volumeCurrency}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="page_nation">
                <div className="flex flex-wrap items-center justify-start space-x-2 pagination">
                    <button
                        className="btn btn-default bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">Previous
                    </button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">1</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">2</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">3</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">4</button>
                    <button className="btn btn-circle bg-blue-500 hover:bg-blue-600 text-white">5</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">6</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">7</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">8</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">9</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">10
                    </button>
                    <button className="btn btn-default bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">Next
                    </button>
                </div>
            </div>
        </div>

    </>
}

export default StockList;
