import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagenation, Page } from "../items";
import axios from "axios";
import './opinionList.css';

export const getOpinionList =  data => ({type: "GET_OPINION_LIST", payload: data})

export const opinionReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_OPINION_LIST": return action.payload
        default: return state
    }
}

export const opinionList = () => dispatch => {
    axios.get(``)
        .then(response => {
            console.log(`opinionList reducer THEN`)
            dispatch(getOpinionList(response.data))
        })
        .catch(error => {
            console.log(`opinionList reducer CATCH`)
        })
}


const OpinionList = () => {
    const [titleNumber, setTitleNumber] = useState("1");
    const [title, setTitle] = useState(
        "'2+2년 계약갱신·5% 상한' 주택임대차보호법 국회 통과(종합)에 대한 오피니언");
    const [writer, setWriter] = useState("배고픈 거북이");
    const [registerDate, setRegisterDate] = useState("20200801");
    const [hits, setHits] = useState("79")
    const [arr, setArr] = useState([
        {
            titleNumber : titleNumber,
            title: title,
            writer: writer,
            registerDate: registerDate,
            hits: hits
        },
        {
            titleNumber : titleNumber,
            title: title,
            writer: writer,
            registerDate: registerDate,
            hits: hits
        },
        {
            titleNumber : titleNumber,
            title: title,
            writer: writer,
            registerDate: registerDate,
            hits: hits
        },
        {
            titleNumber : titleNumber,
            title: title,
            writer: writer,
            registerDate: registerDate,
            hits: hits
        },
        {
            titleNumber : titleNumber,
            title: title,
            writer: writer,
            registerDate: registerDate,
            hits: hits
        },
        {
            titleNumber : titleNumber,
            title: title,
            writer: writer,
            registerDate: registerDate,
            hits: hits
        },
        {
            titleNumber : titleNumber,
            title: title,
            writer: writer,
            registerDate: registerDate,
            hits: hits
        },
        {
            titleNumber : titleNumber,
            title: title,
            writer: writer,
            registerDate: registerDate,
            hits: hits
        },
        {
            titleNumber : titleNumber,
            title: title,
            writer: writer,
            registerDate: registerDate,
            hits: hits
        }

    ])

    const linktoDetail = e => {
        e.preventDefault();
    }

    return <>
        <table>
            <tr>
                <td><h2 className={"text-2xl"}>게시글 리스트</h2></td>
                <td><select className="form-select">
                    <option>5개씩 보기</option>
                    <option>10개씩 보기</option>
                    <option>20개씩 보기</option>
                </select></td>
                <td><button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded register_btn"><Link to="opinionRegister">글쓰기</Link></button></td>
            </tr>
        </table>
        <div className="w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
            <table className="table">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록한 날짜</th>
                    <th>조회수</th>
                </tr>
                </thead>
                <tbody>
                {arr.map((item)=>(
                    <tr>
                        <td>{item.titleNumber}</td>
                        <td><Link to="opinionDetail">{item.title}</Link></td>
                        <td onClick={linktoDetail}>{item.writer}</td>
                        <td>{item.registerDate}</td>
                        <td>{item.hits}</td>
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
                <div className="relative"><input type="search" name="search" placeholder="검색어를 입력하세요"
                                                 className="pl-10 pr-5 appearance-none h-10 w-full rounded-full text-sm focus:outline-none"/>
                    <button type="submit" className="absolute top-0 mt-3 left-0 ml-4">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                             stroke-linecap="round" stroke-linejoin="round" className="stroke-current h-4 w-4"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </>
}

export default OpinionList;
