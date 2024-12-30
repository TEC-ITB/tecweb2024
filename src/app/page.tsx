import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black h-full w-full pt-[80px]">
      <section className="h-[60vw] md:h-[45vw] w-full flex">
        <div className="bg-[url('/group.png')] bg-cover bg-center bg-no-repeat w-full h-full">
          <div className="text-white w-full h-full bg-[#051338] bg-opacity-50 flex flex-col justify-center items-center leading-[1] text-shadow-glow-light">
            <h1 className="text-[6vw] font-bold font-['helvetica']">TEC ITB</h1>
            <h2 className="text-[4vw] font-bold">Kabinet Lakskarsa</h2>
          </div>
        </div>
      </section>
      <section id="about-us" className="h-full bg-black font-['Helvetica'] ">
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

            <div className="mt-12 text-white">
              <h1 className="text-[5vw] md:text-[3vw] flex justify-center items-center font-semibold">
                Our Program
              </h1>
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 md:mx-16 py-[8vw]">
                <Image src="/our-program-1.svg" className="w-3/4 md:w-1/4 h-auto" alt="our-program-1" width={200} height={200} />
                <Image src="/our-program-2.svg" className="w-3/4 md:w-1/4 h-auto" alt="our-program-2" width={200} height={200} />
                <Image src="/our-program-3.svg" className="w-3/4 md:w-1/4 h-auto" alt="our-program-3" width={200} height={200} />
              </div>
            </div>
        </section>
    </div>
  );
}
