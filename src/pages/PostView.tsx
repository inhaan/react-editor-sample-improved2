import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";

const PostView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const posts = useAppSelector((state) => state.posts);

  const id = params.id;
  const post = id && posts.find((x) => x.id === parseInt(id));

  useEffect(() => {
    if (!id || !post) {
      alert("글이 존재하지 않습니다");
      navigate("/react-editor-sample-improved2");
    }
  }, [id, post]);

  if (!id || !post) {
    return null;
  }
  return (
    <div>
      <h1>글 보기</h1>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contents }}></div>
    </div>
  );
};

export default PostView;
