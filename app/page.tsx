import Splitter from "./components/splitter";

export default function Home() {
  return (

    <div className="mx-auto flex flex-col items-center mt-[8rem]">
      <div className="mb-[4rem]">
        <img src="logo.svg" />
      </div>
      <Splitter />
    </div>
  );
}

