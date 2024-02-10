import { useNavigate } from "react-router";
import PostList from "../components/posts/PostList";

function Detail() {
  const navigate = useNavigate();

  return (
    <div>
      Detail
      <button
        onClick={() => {
          navigate("/detail/write");
        }}
      >
        글쓰기
      </button>
      <br />
      <PostList />
    </div>
  );
}

export default Detail;
