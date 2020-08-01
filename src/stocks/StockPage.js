import React from "react";
import "./underlinedTabs.css";
import { StockCharts, UnderlinedTabs, StockDetail } from "./index";

const StockPage = () => {


    return <>
        <StockDetail/>
        <UnderlinedTabs tabs={[{index: 1, content: <StockCharts/>, title: "1일"},
                            {index: 2, content: <StockCharts/>, title: "1주"},
                            {index: 3, content: <StockCharts/>, title: "1달"},
                            {index: 4, content: <StockCharts/>, title: "3달"},
                            {index: 5, content: <StockCharts/>, title: "6달"},
                            {index: 6, content: <StockCharts/>, title: "1년"},
                            {index: 7, content: <StockCharts/>, title: "5년"},
                            {index: 8, content: <StockCharts/>, title: "10년"}
        ]}/>

    </>
}

export default StockPage;