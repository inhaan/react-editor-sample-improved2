import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  const PostList = lazy(() => import("./pages/PostList"));
  const PostWrite = lazy(() => import("./pages/PostWrite"));
  const PostView = lazy(() => import("./pages/PostView"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/react-editor-sample-improved2" element={<Layout />}>
          <Route index element={<PostList />} />
          <Route
            path="/react-editor-sample-improved2/PostWrite"
            element={<PostWrite />}
          />
          <Route
            path="/react-editor-sample-improved2/PostView/:id"
            element={<PostView />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
