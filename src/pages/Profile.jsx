import PostCard from "../components/post-card";
import ContactCard from "../components/contact-card";
import { MakeComment } from "../components/comment-field";
import AboutCard from "../components/about-card";
import ProfileCard from "../components/profile-card";
function ProfilePage() {
  return (
    <>
      <div className="grid px-2 xl:px-0 max-w-screen-xl md:grid-cols-[250px_auto_100px] lg:grid-cols-[300px_auto_200px] mx-auto gap-4 lg:gap-8 py-4 md:py-8">
        <div className="flex flex-col gap-2 md:gap-10">
          <ProfileCard />

          <div className="md:hidden mt-2">
            <h2 className="md:text-xl font-medium">Contacts</h2>
            <ul className="md:hidden flex justify-evenly my-2">
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
            </ul>
            <button className="font-bold align-text-bottom bg-transparent text-right w-full">
              See all •••
            </button>
          </div>

          <div className="grid gap-2">
            <h2 className="md:text-xl font-medium text-left px-6">About</h2>
            <AboutCard />
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
