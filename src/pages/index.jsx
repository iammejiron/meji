import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "../components/Footer";
import Links from "../components/Links";
import { Header } from "../components/Header";
import { useCallback, useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handleClick = (e) => {};

export default function Home() {
  const [text, setText] = useState("");
  const [foo, setFoo] = useState(1);
  //let foo = 1;
  const handleClick = (e) => {
    setFoo((foo) => foo + 1);
    setFoo((foo) => foo + 1);
    // foo = foo + 1;
  };
  const [array, setArray] = useState([]);
  const handleAdd = useCallback(() => {
    alert(123);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  console.log(foo);
  console.log(text);

  return (
    <>
      <div
        className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
      >
        <Header />
        <h1>{foo}</h1>
        <button onClick={handleClick}>ボタン</button>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            if (text.length >= 5) {
              alert("5文字以下にして");
              return;
            }
            setText(e.target.value.trim());
          }}
        ></input>
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </ul>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                src/pages/index.js
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
          </ol>
          <Links />
        </main>
        <Footer />
      </div>
    </>
  );
}
