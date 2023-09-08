const Profile = () => {
  const localData = localStorage.getItem("userInfo");
  let userdetail = JSON.parse(localData);
  return (
    <div className="flex justify-center items-center mt-14 text-left py-14 border border-slate-300 w-96 rounded-xl">
      <img src={userdetail?.photo} className="w-16 rounded-full m-2" alt="" />
      <div className="">
        <h3 className="font-bold">Name : {userdetail?.name}</h3>
        <h3 className="font-medium">Bio : {userdetail?.bio}</h3>
        <p>Email: {userdetail?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
