import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { PostPage } from "./PostPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/postView/:id" element={<PostPage />} />
    </Routes>
  );
}
