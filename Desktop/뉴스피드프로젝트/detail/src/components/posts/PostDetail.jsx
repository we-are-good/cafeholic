import { useState } from "react";
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

  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState(postCard.postTitle);
  const [editingContent, setEditingContent] = useState(postCard.postText);
  const [editingPhotoCard, setEditingPhotoCard] = useState(postCard.postImage);
  const [editingTitleError, setEditingTitleError] = useState("");
  const [editingContentError, setEditingContentError] = useState("");

  //취소버튼
  const onCencelButton = () => {
    setIsEditing(false);
    setEditingTitleError("");
    setEditingContentError("");
  };

  //수정버튼
  const onEditDone = () => {
    // 수정사항이 없을 때의 조건을 수정
    if (editingTitle === postCard.postTitle && editingContent === postCard.postText) {
      setEditingTitleError("수정사항이 없습니다.");
      setEditingContentError("수정사항이 없습니다.");
      return; // 이후 로직 실행을 막기 위해 반환
    } else {
      setEditingTitleError("");
      setEditingContentError("");
    }

    // 수정사항이 있을 때의 로직은 그대로 유지
    const answer = window.confirm("수정하시겠습니까?");
    if (!answer) return;
    alert("수정되었습니다.");
    const newCards = posts.map((item) => {
      if (item.postId === postId) {
        return { ...item, postTitle: editingTitle, postText: editingContent, postImage: editingPhotoCard };
      }
      return item;
    });
    setPosts(newCards);
    setIsEditing(false);
    setEditingTitleError("");
    setEditingContentError("");
  };

  const handleChange = (e) => {
    const newFiles = e.target.files[0];
    const reader = new FileReader(newFiles);
    reader.readAsDataURL(newFiles);
    reader.onloadend = () => {
      setEditingPhotoCard(reader.result);
    };
  };

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
        {isEditing ? (
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
                  <button onClick={onCencelButton}>취소</button>
                  <button onClick={onEditDone}>수정완료</button>
                </EditAndDeleteWrapper>
              </UserInfoAndButton>
              <EditUserTitle>
                <EditInput
                  type="text"
                  autoFocus
                  defaultValue={postCard.postTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <Error>{editingTitleError}</Error>
              </EditUserTitle>
            </UserInfoWrapper>
            <PostListDetail>
              <PostImageDetail>
                <input type="file" onChange={handleChange} />
              </PostImageDetail>
            </PostListDetail>
            <EditUserContent
              defaultValue={postCard.postText}
              onChange={(e) => setEditingContent(e.target.value)}
            ></EditUserContent>
            <Error>{editingContentError}</Error>
          </CardListDetail>
        ) : (
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
                      setIsEditing(true);
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
                {postCard.postImage ? (
                  <img src={postCard.postImage} alt={postCard.postImage} />
                ) : (
                  <img src={postCard.postImage} style={{ display: "none" }} alt="이미지 없음" />
                )}
              </PostImageDetail>
            </PostListDetail>
            <UserContent>{postCard.postText}</UserContent>
          </CardListDetail>
        )}
      </CardListWrapper>
    </DetailWrapper>
  );
};

export default PostDetail;

const DetailWrapper = styled.section`
  padding: 80px 40px;
`;

const DetailTiTle = styled.p`
  text-align: right;
  margin-right: 15px;
`;

const TiTleInfo = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const CardListWrapper = styled.ul`
  margin-top: 30px;
`;

const LinkGoHome = styled.p`
  cursor: pointer;
`;

const CardListDetail = styled.li`
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

const UserInfoAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfoTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const UserImage = styled.div`
  width: 70px;
  height: 70px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const UserNickName = styled.h3`
  font-weight: 700;
  font-size: 24px;
`;

const Date = styled.time`
  color: #ccc;
  font-size: 14px;
`;

const EditAndDeleteWrapper = styled.div`
  & > button {
    border: none;
    background-color: transparent;
  }
  & > button:hover {
    color: red;
  }
`;

const UserTitle = styled.h3`
  margin-top: 10px;
  font-size: 20px;
`;

export const EditUserTitle = styled.h3`
  margin-top: 10px;
  font-size: 20px;
`;

const PostListDetail = styled.div`
  margin: 20px 0;
`;

const PostImageDetail = styled.div`
  width: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const EditInput = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 5px;
`;

const UserContent = styled.p`
  line-height: 24px;
`;

const EditUserContent = styled.textarea`
  line-height: 24px;
  height: 300px;
`;

const Error = styled.p`
  font-size: 14px;
  color: red;
  margin: 5px 0 0 3px;
`;
