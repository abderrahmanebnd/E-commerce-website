function ModelUser() {
  return (
    <div className="absolute w-[21rem] bg-bgColor px-5 py-7 rounded top-[200%] right-0 border-2 border-text-muted hover:border-text  ">
      <div className="border-b pb-5 border-gray-500">
        <h2 className="font-semibold text-xl mb-1">Hello!</h2>
        <p className="mb-2">Access account and manage orders</p>
        <button className="border  py-2 px-3 border-text-muted hover:border-text">
          Login / Sign up
        </button>
      </div>
    </div>
  );
}

export default ModelUser;
