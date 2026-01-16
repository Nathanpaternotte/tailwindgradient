import Image from "next/image";
import Colors from "./components/Colors";
import Visualizer from "./components/Visualizer";
import Settings from "./components/Settings";
import { Archivo_Black } from "next/font/google";
const archivo = Archivo_Black({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div className="md:h-screen w-full  flex items-end justify-center bg-neutral-100">
      <div className="md:w-3/4 md:h-9/10 bg-white  rounded-t-lg p-4 md:p-8 flex flex-col gap-4">
        <h1 className={`md:text-5xl text-3xl text-center ${archivo.className}`}>
          Free Gradient tool for Tailwind CSS
        </h1>
        <div className="grid md:grid-cols-2 gap-4 mx-auto w-full md:mt-12 ">
          <Visualizer />
          <Colors />
        </div>
        <Settings />
      </div>
    </div>
  );
}
