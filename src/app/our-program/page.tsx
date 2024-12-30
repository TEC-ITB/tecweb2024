import Image from 'next/image'; 

export default function ourProgram() {
    return (
        <main className="flex flex-col h-full bg-black text-white mt-[80px]">
          <section className="h-[30vw] w-full flex">
            <div className="bg-[url('/group.png')] bg-cover bg-center bg-no-repeat w-full h-full">
              <div className="text-white w-full h-full bg-[#051338] bg-opacity-90 flex flex-col justify-center items-center leading-[1]">
                <h1 className="text-[6vw] font-['helvetica'] text-shadow-glow-light">Our Program</h1>
              </div>
            </div>
          </section>

            <div className="flex-1 mb-16 mx-[10vw] my-[12vw]">
                {/* Company Visit Section */}
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4 gap-2">
                            <div className="overflow-hidden rounded-lg w-full">
                                <Image
                                src="/comvis1.svg" 
                                alt="" 
                                className="w-full"
                                width={200} height={200} 
                                />
                            </div>
                            <div className="overflow-hidden rounded-lg w-full">
                                <Image
                                src="/comvis2.svg" 
                                alt="" 
                                className="w-full"
                                width={200} height={200} 
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[5vw] font-bold mb-4 text-gray-300">Company Visit</h2>
                            <p className="text-gray-500 text-[3vw] md:text-[2vw] leading-relaxed text-justify">
                            Program Company Visit kami memberikan kesempatan untuk melihat langsung operasional perusahaan dan memahami praktik kerja profesional. Setiap peserta TEC dapat belajar dari para ahli di industri dan mendapatkan wawasan baru. Program ini dirancang untuk memperluas pengetahuan serta mempersiapkan langkah karier ke depan.
                            </p>
                        </div>
                    </div>
                    </div>
        
                {/* Training and Development Section */}
                <div className="my-[8vw]">
                    <div className="flex gap-2 flex-col md:flex-row">
                        <h2 className="text-[5vw] font-bold mr-10 text-gray-300">Training and <br/> Development</h2>
                        <p className="text-gray-500 text-[3vw] md:text-[2vw] text-justify flex items-center justify-center">
                        Program Training and Development kami bertujuan membantu peserta meningkatkan keterampilan dan pengetahuan dalam berbisnis.
                        </p>
                    </div>
                    <div className="flex md:flex-row flex-col justify-center items-center gap-10 mt-[5vw]">
                      <div className='w-full overflow-hidden rounded-lg'>
                        <Image src="/tnd1.svg" alt="Personal branding presentation" className="w-full" width={200} height={200} />
                      </div>
                      <div className='w-full overflow-hidden rounded-lg'>
                        <Image src="/tnd2.svg" alt="Training session" className="w-full" width={200} height={200} />
                      </div>
                      <div className='w-full overflow-hidden rounded-lg'>
                        <Image src="/tnd3.svg" alt="Work culture presentation" className="w-full" width={200} height={200} />
                      </div>
                    </div>
                </div>
        
                {/* IncubaTEC Section */}
                <div className="my-[8vw]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <h2 className="md:hidden flex text-[5vw] font-bold text-gray-300">IncubaTEC</h2>
                        <div className='w-full overflow-hidden rounded-lg flex justify-center items-center'>
                        <Image 
                        src="/incubatec1.svg" 
                        alt=""
                        className="w-full rounded-lg"
                        width={200} height={200}
                        />
                        </div>
                        <div className="items-center">
                            <h2 className="hidden md:flex text-[5vw] font-bold mb-4 text-gray-300">IncubaTEC</h2>
                            <p className="text-gray-500 text-[3vw] md:text-[2vw] text-justify">
                            Program Business Incubator kami dirancang untuk mendukung perkembangan ide bisnis. Peserta akan mendapatkan bimbingan intensif, akses ke mentor ahli, dan jaringan untuk mempercepat pertumbuhan ide bisnis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
  }