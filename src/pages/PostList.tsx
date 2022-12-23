import { useAppSelector } from "../hooks";
import { Post } from "../interfaces";
import PostItem from "../components/PostItem";

const PostList = () => {
  const posts = useAppSelector((state) => state.posts);

  const getList = (posts: Post[]) => {
    if (!posts.length) {
      return <div>작성한 글이 없습니다</div>;
    }
    return (
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post}></PostItem>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>글 목록 조회</h1>
      {getList(posts)}
    </div>
  );
};

export default PostList;
