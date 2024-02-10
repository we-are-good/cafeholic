import styled from "styled-components";
import { useNavigate } from "react-router";

const StLi = styled.li`
  border: 1px solid black;
  border-radius: 10px;

  margin: 10px;
  padding: 10px;

  list-style-type: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const StDivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 5px;
`;
const StDivColume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StImgContainer = styled.div`
  width: 500px;

  overflow: hidden;
`;

const StImg = styled.img`
  width: 100%;
`;

function PostCards({ post }) {
  const { userEmail, postTitle, postText, postImage, postDate, userProfileImage, postId } = post;

  const splitUserEmail = userEmail.split("@")[0];
  const userNickname = splitUserEmail.slice(0, 3) + "*".repeat(splitUserEmail.length - 3);

  const formattedDate = new Date(postDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  const navigate = useNavigate();

  return (
    <article>
      <StLi>
        <StDivRow style={{ width: "500px", alignContent: "flex-start" }}>
          <div>
            <img src={userProfileImage} />
          </div>
          <StDivRow>
            <StDivColume>
              <StDivRow style={{ gap: "10px" }}>
                <span>{userNickname}</span>
                <span>{formattedDate}</span>
              </StDivRow>

              <p>{postTitle}</p>
              <p>{postText}</p>
            </StDivColume>
            <StImgContainer>
              <StImg src={postImage} />
            </StImgContainer>
            <div>⭐️</div>
          </StDivRow>
        </StDivRow>
        <StDivRow style={{ width: "500px", justifyContent: "space-between" }}>
          <div>추천 👍 댓글 : 2</div>
          <button
            onClick={() => {
              navigate(`/detail/${postId}`);
            }}
          >
            상세보기
          </button>
        </StDivRow>
      </StLi>
    </article>
  );
}

export default PostCards;
