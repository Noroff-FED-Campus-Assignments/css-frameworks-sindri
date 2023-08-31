
function PostCard(props) {
  
  return (
    <div className="m-auto flex flex-col gap-6 rounded-2xl bg-blue-50 px-6 py-4">
      <div className="info flex gap-4">
        <div className="h-14 w-14 rounded-xl bg-gray-300"></div>
        <div className="text-left">
          <div className="md:text-lg font-semibold">{props.author ? props.author: "Navn Navnesen"}</div>
          <div className="flex gap-2 text-gray-500">
            <time>19.apr. 2023</time>
            <div>Norway</div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      <div className="flex justify-center gap-28 border border-x-0 border-b-0 border-t-green-900 py-1 text-gray-500">
        <div>Like 👍</div>
        <div>Comment 💬</div>
      </div>
    </div>
  );
}

export default PostCard;
