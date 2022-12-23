import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { add, PostWithoutId } from "../store/postsSlice";

const PostWrite = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const editorElRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    if (editorElRef.current) {
      editorRef.current = new Editor({
        el: editorElRef.current,
        height: "500px",
        initialValue: " ",
        previewStyle: "vertical",
      });
    }
  }, []);

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onClickSave = useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const post: PostWithoutId = {
      title,
      contents: editorRef.current.getHTML(),
    };
    dispatch(add(post));
    navigate("/react-editor-sample-improved2");
  }, [title, dispatch]);

  return (
    <div>
      <h1>글 작성하기</h1>
      <div>
        <label>제목</label>
        <input type="text" value={title} onChange={onChangeTitle}></input>
      </div>
      <div>
        <label>내용</label>
        <div ref={editorElRef}></div>
      </div>
      <div>
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  );
};

export default PostWrite;
