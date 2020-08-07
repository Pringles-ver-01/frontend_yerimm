import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import axios from "axios";
import './opinionRegister.css';
import {useDispatch} from "react-redux";

export const addOpinionAction = data => ({ type: "ADD_OPINION", payload: data })

export const OpinionReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_OPINION": return action.payload
        default: return state
    }
}



const OpinionRegister = () => {
    const [tittle, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState("")
    const dispatch = useDispatch()
    const addOpinion = newOpinion => dispatch(addOpinionAction(newOpinion))// 리듀서


    const changeContent = e => {
        e.preventDefault();
        setContent(e.target.value);
    }
    const submitOpinion = e => {
        e.preventDefault();
        const newOpinion = {
            title: tittle,
            content: content,
            tags: tags
        }
        addOpinion(newOpinion)

        let postOpinion = () => dispatch => {
            axios.post(``)
                .then(response => dispatch(addOpinionAction(response.data)))
                .catch(error => { throw(error) })
        }
        setTitle("")
        setContent("")
        setTags("")
    }

    return <>
        <form onSubmit={submitOpinion} method="POST">
            <table>
                <tr>
                    <td colSpan={2}><h2 className={"text-2xl"}>게시글 작성하기</h2></td>
                </tr>
            </table>
            <input className="form-input input_title" onChange={ event=>{setTitle(event.target.value)} } placeholder="제목을 입력하세요" type="text"/>
            <div className="w-full mb-4">
                <div className="w-full">
                    <ReactQuill theme="snow" onChange={ changeContent } placeholder="내용을 입력하세요"/>
                </div>
            </div>
            <input className={"form-input"} onChange={ event => { setTags(event.target.value)} } placeholder={"#키워드 입력"} type="text"/>
            <div className={"buttons"}>
                <button className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-rounded btn-raised"><Link to="stockList">취소하기</Link></button>
            <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"><Link to="stockList">등록하기</Link></button>
            </div>
        </form>
    </>
}




export default OpinionRegister;