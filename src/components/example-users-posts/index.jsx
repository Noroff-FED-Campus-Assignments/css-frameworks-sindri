import { useUsersPosts } from "../../lib/my-api";
import { MakeComment } from "../comment-field";
import PostCard from "../post-card";
function ExampleUsersPosts() {
  const userId = 2;
  const { status, error} = useUsersPosts(userId);
  const isLoading = status === "loading";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
    <MakeComment/>
    <PostCard author="Ola Olsen" />
    <PostCard author="Kari Børresen" />
    </>
  );
}

export default ExampleUsersPosts;
