import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostContext } from "../../context/PostContext";
const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  border-radius: 10px;
  gap: 10px;

  padding: 50px;
  width: 400px;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StBtn = styled.button`
  width: 100px;
`;
function PostForm() {
  const { posts, setPosts, addPostSubmit } = useContext(PostContext);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  /* 포스트 글 추가하기 */

  // const [title, setTitle] = useState("");
  // const [text, setText] = useState("");

  // const addTitleHandler = (event) => {
  //   setTitle(event.target.value);
  // };

  // const addTextHandler = (event) => {
  //   setText(event.target.value);
  // };
  const addPostBtnClickHandler = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const text = event.target.text.value;

    // 빈 태그 입력 막기
    if (!title.trim() && text.trim()) {
      alert("제목을 입력해주세요.");
      return;
    } else if (title.trim() && !text.trim()) {
      alert("내용을 입력해주세요");
      return;
    } else if (!title.trim() && !text.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    // 현재 날짜 불러오기
    const date = Date.now();

    // 카드 추가하기
    addPostSubmit({
      userEmail: "userEmail",
      postTitle: title,
      postText: text,
      postImage: "첨부파일",
      postId: crypto.randomUUID(),
      postDate: date
    });

    event.target.reset();
  };
  console.log(posts);
  return (
    <>
      <StMain>
        <Link to="/">홈으로</Link>
        <StForm onSubmit={submitHandler}>
          <StDiv>
            제목
            <select>
              <option value="">면접 후기</option>
              <option value="">취업 정보</option>
              <option value="">회사 정보 공유</option>
            </select>
          </StDiv>
          <input type="text" name="title" placeholder="제목을 입력해주세요." />
          내용
          <input type="text" name="text" placeholder="내용을 입력해주세요." style={{ height: "200px" }} />
          <StDiv>
            <button type="button">첨부파일</button>
            파일 1. jpg
            <button type="button">삭제</button>
          </StDiv>
          <StDiv style={{ justifyContent: "center", gap: "50px" }}>
            <StBtn type="submit" onClick={addPostBtnClickHandler}>
              등록하기
            </StBtn>
            <StBtn type="button">취소하기</StBtn>
          </StDiv>
        </StForm>
      </StMain>
    </>
  );
}

export default PostForm;
