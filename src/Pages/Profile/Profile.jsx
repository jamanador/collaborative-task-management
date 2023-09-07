const Profile = () => {
  const localData = localStorage.getItem("userInfo");
  let userdetail = JSON.parse(localData);
  return (
    <div className="flex justify-center items-center mt-14">
<div className="text-center py-14 border border-slate-300 w-96 rounded-xl">
      <h3 className="font-bold">Name : {userdetail?.name}</h3>
      <h3 className="font-medium">Bio : {userdetail?.bio}</h3>
      <p>Email: {userdetail?.email}</p>
    </div>
    </div>
  );
};

export default Profile;
