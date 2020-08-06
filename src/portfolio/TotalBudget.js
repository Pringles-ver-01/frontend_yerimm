import React from "react";

const TotalBudget = () => {
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
                                        <span className="text-2xl font-bold" style={{"margin" : "auto"}}>10,000,000 원</span>
                                    </td>
                                    <td>
                                        <span className="text-base">평가 수익률</span>
                                        <span className="text-lg font-bold">23.08%</span> <br/>
                                        <span className="text-base" style={{"margin-right":"12px"}}>평가 손익</span>
                                        <span className="text-lg font-bold">671,340원</span>
                                    </td>
                                </tr>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div
                        className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-xl font-bold">삼성전자</span>
                                        <span className="text-sm" style={{"margin-left" : "8px"}}>003248</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded">매수</button>
                                        <button className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded">매도</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "42px"}}>잔고</span>
                                        <span className="text-xl">32주</span>
                                    </td>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "20px"}}>손익</span>
                                        <span className="text-xl ">2389238 원</span>
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


            <tr>
                <td>
                    <div
                        className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-xl font-bold">삼성전자</span>
                                        <span className="text-sm" style={{"margin-left" : "8px"}}>003248</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded">매수</button>
                                        <button className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded">매도</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "42px"}}>잔고</span>
                                        <span className="text-xl">32주</span>
                                    </td>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "20px"}}>손익</span>
                                        <span className="text-xl ">2389238 원</span>
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
            <tr>
                <td>
                    <div
                        className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-xl font-bold">삼성전자</span>
                                        <span className="text-sm" style={{"margin-left" : "8px"}}>003248</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded">매수</button>
                                        <button className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded">매도</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "42px"}}>잔고</span>
                                        <span className="text-xl">32주</span>
                                    </td>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "20px"}}>손익</span>
                                        <span className="text-xl ">2389238 원</span>
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
            <tr>
                <td>
                    <div
                        className="w-full p-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-xl font-bold">삼성전자</span>
                                        <span className="text-sm" style={{"margin-left" : "8px"}}>003248</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded">매수</button>
                                        <button className="btn btn-default bg-red-500 hover:bg-red-600 text-white btn-rounded">매도</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "42px"}}>잔고</span>
                                        <span className="text-xl">32주</span>
                                    </td>
                                    <td style={{"min-width" : "200px"}}>
                                        <span className="text-base" style={{"margin-right" : "20px"}}>손익</span>
                                        <span className="text-xl ">2389238 원</span>
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
        </table>
    </>
}

export default TotalBudget;