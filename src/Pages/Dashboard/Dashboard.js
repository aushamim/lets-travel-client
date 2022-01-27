import AllPosts from "../../Components/Admin/AllPosts";
import MakeAdmin from "../../Components/Admin/MakeAdmin";
import Header from "../../Components/Header/Header";
import AdminPanel from "../../Components/Sidebar/AdminPanel";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const { adminView } = useAuth();
  return (
    <>
      <Header></Header>
      <div className="md:grid grid-cols-5">
        <div className="col-span-4">
          {adminView === "posts" ? (
            <div>
              <AllPosts></AllPosts>
            </div>
          ) : (
            <div>
              <MakeAdmin></MakeAdmin>
            </div>
          )}
        </div>
        <div>
          <AdminPanel></AdminPanel>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
