import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "ㅇㅇ",
    comment: "ㅎㅇㅎㅇ",
    id: 1
  },
  {
    name: "유재석",
    comment: "ㅂㅇㅂㅇ",
    id: 2
  },
  {
    name: "홍길동",
    comment: "퇴근",
    id: 3
  },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment key={comment.id} name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;