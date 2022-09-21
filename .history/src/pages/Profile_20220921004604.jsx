import React, { useState } from "react";

export default function Profile() {
  const [formDate, setFormData] = useState({
    name: "Samson",
    email: "miraclesamson16@gmail.com",
  });
  return (
    <>
      <section>
        <h1 className="text-3xl text=center mmt-6 font-bold">My Profile</h1>
        <div>
          <form>
            {/* Nmae input */}
            <input type="text" id="name" value={name} />
          </form>
        </div>
      </section>
    </>
  );
}
