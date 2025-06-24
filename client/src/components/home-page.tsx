// import Image from "next/image";
// import { Button } from "@/components/ui/button";
'use client'; // if using Next.js App Router

import { useEffect, useState } from 'react';
import { fetchFirstUser, User } from '@/services/firstUserService';

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchFirstUser()
      .then(setUser)
      .catch((err) => console.error('Error fetching user:', err));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">First User</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.surname}
      </p>
    </div>
  );
}
//      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
