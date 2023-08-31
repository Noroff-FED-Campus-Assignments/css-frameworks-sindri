import { useUsersPosts } from "../../lib/my-api";
import { MakeComment } from "../comment-field";
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
    
    </>
  );
}

export default ExampleUsersPosts;
