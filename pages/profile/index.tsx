import Image from "next/image";

import React from "react";

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      <Image
        src="/profile.png"
        alt="Profile Image"
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL="data:image/png;base64,..."
      />
      <h2>My name</h2>
      <p>This is my profile page.</p>
    </div>
  );
}
