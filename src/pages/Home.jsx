import ExampleUsersPosts from "../components/example-users-posts";
import Searchbar from "../components/searchbar";

function HomePage() {
  return (
    <>
    <div className=" md:w-2/4 mx-auto">
      <Searchbar/>
      
    <ExampleUsersPosts />
    
      
      </div>
    </>
  );
}

export default HomePage;
