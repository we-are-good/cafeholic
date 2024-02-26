import { createContext, useState } from "react";
import detailListDummyData from "../data/detailListDummyData.json";

export const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(detailListDummyData);
  // console.log(posts);

  /* 포스트 글 추가하기 */
  const addPostSubmit = (newpost) => {
    setPosts((posts) => [newpost, ...posts]);
  };

  return <PostContext.Provider value={{ posts, setPosts, addPostSubmit }}>{children}</PostContext.Provider>;
};

export default PostProvider;
