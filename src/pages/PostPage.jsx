import Banner from "../components/Banner";
import PostView from "../components/PostView";
import {useParams } from "react-router-dom"

export function PostPage() {
  const postId = useParams().id;
  console.log(postId);
  return (
    <>
      <Banner postId={postId} />
      <PostView postId={postId} />
    </>
  );
}