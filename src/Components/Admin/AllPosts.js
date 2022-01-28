import React from "react";
import useAuth from "../../Hooks/useAuth";

const AllPosts = () => {
  const { posts } = useAuth();
  // posts.map((post) => console.log(post));
  // console.log(posts);
  return (
    <div className="bg-white rounded-lg p-5 m-5">
      {/* Modal */}
      <div>
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdropDelete"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Confirm Delete
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4"></div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-700 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table-fixed w-full divide-y divide-dashed">
        <thead className="divide-y divide-dashed">
          <tr className="divide-x divide-dashed">
            <th className="p-2">Post ID</th>
            <th className="p-2">Time</th>
            <th className="p-2">User</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dashed">
          {/* Repeat Start */}
          {posts.length === 0 ? (
            <div className="flex items-center justify-center">
              <div
                class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-amber-600"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {posts.map((post) => (
                <tr key={post._id} className="divide-x divide-dashed">
                  <td className="p-2">{post._id}</td>
                  <td className="p-2">12 AM</td>
                  <td className="p-2">{post.author}</td>
                  <td className="p-2">
                    <div className="flex items-center justify-center">
                      {post.status === "pending" ? (
                        <>
                          <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="green"
                            data-mdb-ripple-duration="1000ms"
                            className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg"
                          >
                            <p className="font-medium text-sm">Pending</p>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="green"
                            data-mdb-ripple-duration="1000ms"
                            className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg"
                          >
                            <p className="font-medium text-sm">Approved</p>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-evenly items-center">
                      <>
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="orange"
                          data-mdb-ripple-duration="1000ms"
                          className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg bg-amber-100"
                        >
                          <p className="font-medium text-sm">View</p>
                        </button>
                        {post.status === "pending" ? (
                          <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="green"
                            data-mdb-ripple-duration="1000ms"
                            className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg bg-green-100"
                          >
                            <p className="font-medium text-sm">Approve</p>
                          </button>
                        ) : (
                          <></>
                        )}
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="red"
                          data-mdb-ripple-duration="1000ms"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdropDelete"
                          className="text-venter p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg bg-red-100"
                        >
                          <p className="font-medium text-sm">Delete</p>
                        </button>
                      </>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          )}
          {/* Repeat End */}
        </tbody>
      </table>
    </div>
  );
};

export default AllPosts;
