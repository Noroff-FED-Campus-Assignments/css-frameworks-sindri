import PostCard from "../components/post-card";
import { MakeComment } from "../components/comment-field";
function ProfilePage() {
  return (
    <>
      <div className="grid px-2 xl:px-0 max-w-screen-xl md:grid-cols-[250px_auto_100px] lg:grid-cols-[300px_auto_200px] mx-auto gap-4 lg:gap-8 py-4 md:py-8">
        <div className="flex flex-col gap-2 md:gap-10">
          <div className="grid gap-4">
            <div className="overflow-hidden object-cover object-center rounded-3xl aspect-square h-32 mx-auto md:w-full md:h-full">
              <img
                src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="cat"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold lg:text-2xl">
                Firstname Lastname
              </h1>
            </div>
          </div>

          <div className="md:hidden mt-2">
            <h2 className="md:text-xl font-medium">Contacts</h2>
            <ul className="md:hidden flex justify-evenly my-2">
              <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
              <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
              <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
              <button>See more</button>
            </ul>
          </div>

          <div className=" p-2 grid gap-2">
            <h2 className="md:text-xl font-medium text-left px-6">About</h2>
            <ul className="grid text-left gap-2 md:gap-4 md:text-lg rounded-2xl bg-gray-50 px-6 py-4">
              <li>📍 From Norway</li>
              <li>💼 Frontend-developer at zeta</li>
              <li>🎂 13.july 1992</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <MakeComment />
          <div className="grid gap-2 md:gap-4">
            <h2 className="text-left font-medium md:text-xl">
              Firstnames posts:
            </h2>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
        <div className="hidden md:block">
          <h2 className="md:text-xl font-medium text-left px-6">Contacts</h2>
          <ul className="hidden md:grid lg:grid-cols-2 gap-2 justify-items-center mt-2">
            <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
            <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
            <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
            <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
            <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
            <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
            <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
            <li className="bg-gray-200 w-14 h-14 md:w-20 md:h-20 rounded-xl"></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
