import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black h-screen w-full pt-[80px]">
      <section className="h-full w-full flex">
        <div className="bg-[url('/group.png')] bg-cover bg-center bg-no-repeat w-full h-full">
          <div className="text-white w-full h-full bg-[#051338] bg-opacity-50 flex flex-col justify-center items-center leading-[1]">
            <h1 className="text-[6vw] font-bold font-['helvetica']">TEC ITB</h1>
            <h2 className="text-[4vw] font-bold">Kabinet Lakskarsa</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
