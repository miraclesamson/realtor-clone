import React, { useState } from "react";

export default function Profile() {
  const [formDate, setFormData] = useState({
    name: "Samson",
    email: "miraclesamson16@gmail.com",
  });
  const { name, email } = formData;
  return (
    <>
      <section>
        <h1 className="text-3xl text=center mmt-6 font-bold">My Profile</h1>
        <div>
          <form>
            {/* Nmae input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-600
            bg-white border border-gray-300 rounded
            transition ease-in-out"
            />
          </form>
        </div>
      </section>
    </>
  );
}
