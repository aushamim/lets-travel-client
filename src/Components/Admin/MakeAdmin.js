import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const { users } = useAuth();
  const [mail, setMail] = useState("");
  const [userName, setUserName] = useState("");

  const handleAdmin = () => {
    const user = { mail };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Admin Added");
        }
      });
  };
  return (
    <div className="bg-white rounded-lg p-5 m-5">
      {/* Modal */}
      <div>
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop"
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
                  Please Confirm
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                Adding <span className="font-semibold"> {userName}</span> as an{" "}
                <span className="text-purple-500 font-semibold">Admin</span>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  data-bs-dismiss="modal"
                  onClick={handleAdmin}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table-fixed w-full divide-y divide-dashed">
        <thead className="divide-y divide-dashed">
          <tr className="divide-x divide-dashed">
            <th className="p-2">User ID</th> <th className="p-2">Name</th>
            <th className="p-2">Email</th> <th className="p-2">Role</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dashed">
          {/* Repeat Start */}
          {users.length === 0 ? (
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
              {users?.map((x) => (
                <tr key={x._id} className="divide-x divide-dashed">
                  <td className="p-2">{x._id}</td>
                  <td className="p-2">{x.displayName}</td>
                  <td className="p-2">{x.email}</td>
                  <td className="p-2">
                    <div className="flex items-center justify-center">
                      {x.role === "user" ? (
                        <>
                          <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="green"
                            data-mdb-ripple-duration="1000ms"
                            className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg"
                          >
                            <p className="font-medium text-sm">User</p>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="purple"
                            data-mdb-ripple-duration="1000ms"
                            className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg"
                          >
                            <p className="font-medium text-sm">Admin</p>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center items-center">
                      {x.role === "user" ? (
                        <>
                          <button
                            onClick={() => {
                              setMail(x?.email);
                              setUserName(x.displayName);
                            }}
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="purple"
                            data-mdb-ripple-duration="1000ms"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg bg-purple-100"
                          >
                            <p className="font-medium text-sm">Make Admin</p>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="red"
                            data-mdb-ripple-duration="1000ms"
                            className="text-center p-2.5 leading-tight transition duration-150 ease-in-out rounded-lg bg-red-100"
                          >
                            <p className="font-medium text-sm">Remove Admin</p>
                          </button>
                        </>
                      )}
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

export default MakeAdmin;
