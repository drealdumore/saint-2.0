"use client";

const Profile = () => {
  return (
    <>
      <div className="w-full flex flex-col pb-4 mb-12">
        <div className="w-full">
          {/* <div className="w-full relative h-48 "> */}
          <div className="w-full relative md:h-48 h-[9rem]">
            <div className="rounded-2xl w-full md:max-w-2xl inset-0 bg-neutral-900/5 max-w-xl bg-[url('/bg/random.jpg')] bg-cover bg-center mx-auto ml-0  h-full">
              {/* <div className="rounded-2xl w-full md:max-w-2xl inset-0  bg-neutral-900/5 max-w-xl bg-[url('/bg/bg.png')] bg-cover bg-center mx-auto ml-0  h-full"> */}
              <div className="w-full  max-w-nav mx-auto left-1/2 -translate-x-1/2 absolute -bottom-12">
                <img
                  title="cover image"
                  src="/avatars/laptop-avatar.png"
                  width="130"
                  height="130"
                  id="avatar"
                  className="ring-4 ring-neutral-700/20 aspect-square rounded-full"
                  alt="saint avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
