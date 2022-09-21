import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc } from "firebase/firestore";
import { db } from "../firebase";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    try {
      if (auth.currentUser.displayName !== name) {
        //update displayName in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        //update name in firebase
        const docRef = doc(db, "users", auth.currentUser.uid);
      }
    } catch (error) {
      toast.error("could not update profile details");
    }
  }
  return (
    <>
      <section
        className="max-w-6xl mx-auto flex justify-center
      items-center flex-col"
      >
        <h1 className="text-3xl text=center mmt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-600
            bg-white border border-gray-300 rounded
            transition ease-in-out ${
              changeDetail && "bg-blue-400 focus:bg-red-200"
            }`}
            />

            {/* Email Input */}

            <input
              type="Email"
              id="Email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-600
            bg-white border border-gray-300 rounded
            transition ease-in-out"
            />
            <div
              className="flex justify-between whitespace-nowrap
            text-sm sm:text-lg mb-6"
            >
              <p className="flex items-center ">
                Do you Want to Change your name?
                <span
                  onClick={() => {
                    changeDetail && onsubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700
                transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {changeDetail ? "Apply" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800
              transition duration-200 ease-in-out cursor-pointer"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
