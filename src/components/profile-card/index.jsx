function ProfileCard() {
  return (
    <>
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
    </>
  );
}

export default ProfileCard;
