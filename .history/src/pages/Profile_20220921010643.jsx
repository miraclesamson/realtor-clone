import React, { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "Samson",
    email: "miraclesamson16@gmail.com",
  });
  const { name, email } = formData;
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
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-600
            bg-white border border-gray-300 rounded
            transition ease-in-out"
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
            text-sm sm:text-lg"
            >
              <p>
                Do you Want to Change your name?
                <span>Edit</span>
              </p>
              <p>Sign Out</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
