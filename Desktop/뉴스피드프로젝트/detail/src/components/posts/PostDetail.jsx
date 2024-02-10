import { useParams, useNavigate } from "react-router";
import styled from "styled-components";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";

const PostDetail = () => {
  const { postId } = useParams();
  const { posts, setPosts } = useContext(PostContext);
  const navigate = useNavigate();
  const [postCard] = posts.filter((item) => item.postId === postId);
  const postUser = postCard.userEmail;

  const splitUserEmail = postUser.split("@")[0];
  const userNickname = splitUserEmail.slice(0, 3) + "*".repeat(splitUserEmail.length - 3);

  //삭제기능
  const handleDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?") === true) {
      const deleteData = posts.filter((item) => item.postId !== postId);
      setPosts(deleteData);
      navigate("/detail");
    }
  };

  //수정기능

  return (
    <DetailWrapper>
      <DetailTiTle>
        <LinkGoHome
          onClick={() => {
            navigate("/detail");
          }}
        >
          뒤로가기
        </LinkGoHome>
      </DetailTiTle>
      <CardListWrapper>
        <CardListDetail>
          <UserInfoWrapper>
            <UserInfoAndButton>
              <UserInfoTitle>
                <UserImage>
                  <img src={postCard.userProfileImage} alt="유저프로필입니다" />
                </UserImage>
                <UserNickName>{userNickname}</UserNickName>
                <Date>{postCard.postDate}</Date>
              </UserInfoTitle>
              <EditAndDeleteWrapper>
                <button
                  onClick={() => {
                    navigate("detail/write");
                  }}
                >
                  수정
                </button>
                <button onClick={handleDelete}>삭제</button>
              </EditAndDeleteWrapper>
            </UserInfoAndButton>
            <UserTitle>{postCard.postTitle}</UserTitle>
          </UserInfoWrapper>
          <PostListDetail>
            <PostImageDetail>
              <img src={postCard.postImage} alt={postCard.postImage} />
            </PostImageDetail>
          </PostListDetail>
          <UserContent>{postCard.postText}</UserContent>
        </CardListDetail>
      </CardListWrapper>
    </DetailWrapper>
  );
};

export default PostDetail;

export const DetailWrapper = styled.section`
  padding: 80px 40px;
`;

export const DetailTiTle = styled.p`
  text-align: right;
  margin-right: 15px;
`;

export const TiTleInfo = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const CardListWrapper = styled.ul`
  margin-top: 30px;
`;

export const LinkGoHome = styled.p`
  cursor: pointer;
`;

export const CardListDetail = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const UserInfoAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserInfoTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const UserImage = styled.div`
  width: 70px;
  height: 70px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const UserNickName = styled.h3`
  font-weight: 700;
  font-size: 24px;
`;

export const Date = styled.time`
  color: #ccc;
  font-size: 14px;
`;

export const EditAndDeleteWrapper = styled.div`
  & > button {
    border: none;
    background-color: transparent;
  }
  & > button:hover {
    color: red;
  }
`;

export const UserTitle = styled.h3`
  margin-top: 10px;
  font-size: 20px;
`;

export const PostListDetail = styled.div`
  margin: 20px 0;
`;

export const PostImageDetail = styled.div`
  width: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserContent = styled.p`
  line-height: 24px;
`;
