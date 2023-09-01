import PostCard from "../components/post-card";
import ContactCard from "../components/contact-card";
import { MakeComment } from "../components/comment-field";
function ProfilePage() {
  return (
    <>
      <div className="grid px-2 xl:px-0 max-w-screen-xl md:grid-cols-[250px_auto_100px] lg:grid-cols-[300px_auto_200px] mx-auto gap-4 lg:gap-8 py-4 md:py-8">
        <div className="flex flex-col gap-2 md:gap-10">
          <div className="grid gap-4 ">
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
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
            </ul>
            <button className="font-bold align-text-bottom bg-transparent text-right w-full">
              Se all •••
            </button>
          </div>

          <div className="grid gap-2">
            <h2 className="md:text-xl font-medium text-left px-6">About</h2>
            <ul className="grid text-left gap-2 md:gap-4 md:text-lg rounded-2xl bg-gray-50 px-6 py-4">
              <li className="border border-b-1 border-x-0 border-t-0 py-1 md:py-2 flex gap-2">
                <div>📍</div> <div>From Norway</div>
              </li>
              <li className="border border-b-1 border-x-0 border-t-0 py-1 md:py-2 flex gap-2">
                <div>💼</div> <div>Frontend-developer at zeta</div>
              </li>
              <li className="border border-b-1 border-x-0 border-t-0 py-1 md:py-2 flex gap-2">
                <div>🎂</div> <div>13.july 1992</div>
              </li>
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
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
