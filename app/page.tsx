import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "./components/ui/button";
import { InputForm } from "./components/InputForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-full max-w-5xl mx-auto p-6 lg:px-8">
      <div className="grid grid-cols-8">
        {/* TITLE */}
        <div className="col-span-3 mx-auto text-6xl place-self-center">
          <p>Find Routes.</p>
          <p>Be Safe.</p>
        </div>
        {/* INPUT */}
        <div className="col-span-5 ml-10">
          <InputForm />
        </div>
      </div>
      {/* MAP */}
    </main>
  );
}
