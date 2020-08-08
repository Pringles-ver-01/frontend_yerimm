import React from "react";
import "../items/underlinedTabs.css";
import { CandleChart, StockDetail } from "./index";
import { UnderlinedTabs } from "../items";

const StockPage = () => {


    return <>
        <StockDetail/>
        <UnderlinedTabs tabs={[{index: 1, content: <CandleChart/>, title: "1일"},
                            {index: 2, content: <CandleChart/>, title: "1주"},
                            {index: 3, content: <CandleChart/>, title: "1달"},
                            {index: 4, content: <CandleChart/>, title: "3달"},
                            {index: 5, content: <CandleChart/>, title: "6달"},
                            {index: 6, content: <CandleChart/>, title: "1년"},
                            {index: 7, content: <CandleChart/>, title: "5년"},
                            {index: 8, content: <CandleChart/>, title: "10년"}
        ]}/>

    </>
}

export default StockPage;