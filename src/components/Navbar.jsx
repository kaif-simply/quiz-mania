"use client";

import Image from "next/image";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const [name, setName] = useState("");
  useEffect(() => {
    const quizmaniaInit = JSON.parse(sessionStorage.getItem("quizmaniaInit"));

    if (quizmaniaInit) {
      console.log("quizmaniaInit", quizmaniaInit);
      setName(quizmaniaInit?.name);
    } else {
      console.log("No data found in sessionStorage for quizmaniaInit");
    }
  }, []);
  return (
    <nav className="bg-gray-100 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/QUIZMania.svg"
            width={150}
            height={50}
            alt="Picture of the author"
          />
        </div>
        {pathname === "/test" && <Button theme="secondary">Exit Quiz</Button>}
        {pathname === "/result" && <p>{name || ""}</p>}
      </div>
    </nav>
  );
}
