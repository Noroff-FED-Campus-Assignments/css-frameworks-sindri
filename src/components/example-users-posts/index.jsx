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
    <div className="my-5">
    <PostCard author="Ola Olsen" />
    </div>
    <div className="my-5">
    <PostCard author="Kari Børresen" />
    </div>
    <div className="my-5">
    <PostCard author="Line Hansen" />
    </div>

    </>
  );
}

export default ExampleUsersPosts;
