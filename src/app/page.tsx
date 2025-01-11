import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black h-full w-full pt-[80px]">
      <section className="h-[60vw] md:h-[45vw] w-full flex">
        <div className="bg-[url('/group.png')] bg-cover bg-center bg-no-repeat w-full h-full">
          <div className="text-white w-full h-full bg-[#051338] bg-opacity-50 flex flex-col justify-center items-center leading-[1] text-shadow-glow-light">
            <h1 className="text-[6vw] font-bold ">TEC ITB</h1>
            <h2 className="text-[4vw] font-bold">Kabinet Lakskarsa</h2>
          </div>
        </div>
      </section>
      <section id="about-us" className="h-full bg-black ">
          <div className="pt-12">
            <div className="bg-[url('/bg-visi-misi.svg')] px-[10vw] h-[40vw] text-white bg-contain bg-no-repeat justify-center flex flex-col bg-[center_top_50%]">
                <h1 className="text-[10vw] md:text-[8vw] text-left">
                    Our Vision
                </h1>
                <h2 className="text-[5vw] md:text-[3vw]">
                    <span style={{ color: '#5493ef' }}>Eskalasi alterasi</span> TEC ITB sebagai wadah aktualisasi diri yang inklusif dan kolaboratif serta berdampak secara global
                </h2>
            </div>

            <div className="bg-[#002b6a] py-[2vw] mt-[12vw] flex justify-center items-center">
                <h1 className="text-white text-[5vw] md:text-[3vw] flex justify-center items-center">
                    Lakskarsa Mission
                </h1>
            </div>
          </div>

            <div className="grid md:grid-cols-3 gap-2 md:gap-0 px-[8vw] py-[10vw] border-b-4 border-[#002B6A] bg-[#0E0E0E]">
                <div className="flex items-center gap-4 ">
                    <h1 className="text-[10vw] md:text-[8vw] font-bold text-gray-500">1</h1>
                    <h2 className="text-[3vw] md:text-[1.5vw] text-gray-300">
                        Meningkatkan efisiensi dan keberlanjutan operasional pada berbagai program kerja sesuai dengan tujuan yang telah ditetapkan.
                    </h2>
                </div>
                <div className="flex items-center gap-4 ">
                    <h1 className="text-[10vw] md:text-[8vw] font-bold text-gray-500">2</h1>
                    <h2 className="text-[3vw] md:text-[1.5vw] text-gray-300">
                        Mengubah dan menyempurnakan berbagai aspek yang memiliki potensi untuk menghasilkan dampak signifikan.
                    </h2>
                </div>
                <div className="flex items-center gap-4 ">
                    <h1 className="text-[10vw] md:text-[8vw] font-bold text-gray-500">3</h1>
                    <h2 className="text-[3vw] md:text-[1.5vw] text-gray-300">
                        Menciptakan ekosistem pembelajaran yang dinamis dan inovatif untuk mendukung pengembangan keterampilan dan pengetahuan kewirausahaan anggota.
                    </h2>
                </div>
                <div className="flex items-center gap-4 ">
                    <h1 className="text-[10vw] md:text-[8vw] font-bold text-gray-500">4</h1>
                    <h2 className="text-[3vw] md:text-[1.5vw] text-gray-300">
                        Mendorong anggota untuk saling berkolaborasi dengan mengedepankan profesional dan harmonisasi.
                    </h2>
                </div>
                <div className="flex items-center gap-4">
                    <h1 className="text-[10vw] md:text-[8vw] font-bold text-gray-500">5</h1>
                    <h2 className="text-[3vw] md:text-[1.5vw] text-gray-300">
                        Mengembangkan dan memperluas jaringan kerjasama dengan berbagai organisasi.
                    </h2>
                </div>
            </div>

            <div className="mt-12 text-white flex flex-col items-center justify-center">
              <h1 className="text-[5vw] md:text-[3vw] flex justify-center items-center font-semibold">
                Our Program
              </h1>
              <div className="px-12 w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 md:mx-16 pt-[4vw] pb-[1vw]">
                <Image src="/program1.png" className="w-full h-auto" alt="our-program-1" width={2200} height={2200} />
                <Image src="/program2.png" className="w-full h-auto" alt="our-program-2" width={2200} height={2200} />
                <Image src="/program3.png" className="w-full h-auto" alt="our-program-3" width={2200} height={2200} />
              </div>
              <Link href="/our-program">
                <button className="bg-[#002B6A] text-white text-[3vw] md:text-[1vw] py-2 px-4 rounded-lg mt-4 mb-6 hover:bg-[#002a6a9f] transition-colors hover:scale-[1.05]">See More</button>
              </Link>
            </div>
        </section>
    </main>
  );
}
