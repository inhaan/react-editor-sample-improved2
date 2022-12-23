import { Link } from "react-router-dom";
import { Post } from "../interfaces";
import styled from "styled-components";
import { memo } from "react";

interface PostItemProps {
  post: Post;
}

const PostLink = styled(Link)`
  text-decoration: underline;

  &:hover {
    color: #333;
  }
`;

const PostItem = ({ post }: PostItemProps) => {
  return (
    <li>
      <PostLink to={`/react-editor-sample-improved2/PostView/${post.id}`}>
        {post.title}
      </PostLink>
    </li>
  );
};

export default memo(PostItem);
