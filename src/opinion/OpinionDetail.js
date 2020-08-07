import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./opinionDetail.css";
import {useSelector, useDispatch} from "react-redux";

export const addCommentAction = data => ({ type: "ADD_COMMENT", payload: data});

export const CommentReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_COMMENT": return action.payload
        default: return state
    }
}

const OpinionDetail = () => {
    const [titleNumber] = useSelector(state => state.titleNumber);
    const [title] = useSelector(state => state.title);
    const [userId] = useSelector(state => state.userId);
    const [content] = useSelector(state => state.content);
    const [tags] = useSelector(state => state.tags);
    const [registerDate] = useSelector(state => state.registerDate);
    const [hits] = useSelector(state => state.hits);
    const [arr, setArr] = useState({
        titleNumber: titleNumber,
        title: title,
        userId: userId,
        registerDate: registerDate,
        hits: hits,
        content: content,
        tags: tags
    })

    const [commenter] = useSelector(state => state.commenter);
    const [comment] = useSelector(state => state.comment);
    const [commentRegistDate] = useSelector(state => state.commentRegistDate);
    const [commentArr, setCommentArr] = useState({
        commenter: commenter,
        comment: comment,
        commentRegistDate: commentRegistDate
    })

    const dispatch = useDispatch()
    const addComment = newComment => dispatch(addCommentAction(newComment));

    const commentSubmit = e => {
        e.preventDefault();
        const newComment = {
            commenter: commenter,
            comment: comment,
            commentRegistDate: commentRegistDate
        }
        addComment(newComment)
        setCommentArr([])
    }

    return <>
        {arr.map((item) => (
            <table className="whole_table">
                <tr className="table_head">
                    <td className="text-lg text-grey-500">{item.titleNumber}</td>
                    <td className="text-2xl">{item.title}</td>
                    <td className="text-lg text-grey-500">{item.userId}</td>
                    <td className="text-lg text-grey-500">{item.registerDate}</td>
                    <td className="text-lg text-grey-500">{item.hits}</td>
                </tr>
                <tr>
                    <td colSpan={5}>
                    <span>
                        <div className="w-full mb-4">
                            {item.content}
                        </div>
                    </span>
                    </td>
                </tr>
                <tr>
                    <td className="keywords">
                        <span className="badge badge-sm bg-red-700 text-red-100 rounded-lg">{item.tags}</span>
                    </td>
                </tr>
            </table>
        ))}

        <button className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-rounded btn-raised go_back"><Link to="stockList">돌아가기</Link></button><br/>
        <div className="comments">
            <input name="name" type="text" className="form-input border-0 bg-grey-100 ml-2 writing_comments"
                   placeholder="댓글을 입력하세요"/>
            <button onClick={commentSubmit}
                className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded">댓글달기</button>


            {commentArr.map(() => (
                <div className="flex items-start justify-start space-x-4 p-4">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col w-full comment">
                            <div className="text-base font-bold">귀여운 강아지</div>
                            <div className="text-base">집값 문제로 온 나라가 뜨겁다. 최근 몇 년 사이 20평형 아파트 값이 수억 원 올랐단다. 영혼까지 끌어 모아 집을 사야 한다며 젊은 세대들도 ‘내 집 마련 전쟁’에 뛰어들고 있다. 정권의 위기라는 얘기까지 나올 지경이다. 지난 7월 10일 다주택자들에 대한 세금 강화 처방이 먼저 나왔고, 주택공급 방안들도 곧 발표될 것 같다. 집값 문제 어떻게 풀어야 할까?
                                집값은 증후와 같다. 사람 몸의 체온이 올라 열이 나는 이유가 있듯 집값을 오르게 하는 원인이 있기에 집값이 오른다. </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="text-grey-500 lg:ml-1">2020.07.29 12:43</div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </>
}

export default OpinionDetail;
