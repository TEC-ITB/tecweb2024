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

            <div className="flex-1 mb-16 mx-32 mt-24">
                {/* Company Visit Section */}
                <div className="mb-16 mx-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="overflow-hidden rounded-lg">
                                <img 
                                src="/comvis1.svg" 
                                alt="" 
                                className="h-4/6"
                                />
                            </div>
                                <div className="overflow-hidden rounded-lg">
                                    <img 
                                    src="/comvis2.svg" 
                                    alt="" 
                                    className="h-4/6"
                                    />
                                </div>
                            </div>
                        <div>
                            <h2 className="text-6xl font-bold mb-4 text-gray-300">Company Visit</h2>
                            <p className="text-gray-500 text-3xl leading-relaxed text-justify">
                            Program Company Visit kami memberikan kesempatan untuk melihat langsung operasional perusahaan dan memahami praktik kerja profesional. Setiap peserta TEC dapat belajar dari para ahli di industri dan mendapatkan wawasan baru. Program ini dirancang untuk memperluas pengetahuan serta mempersiapkan langkah karier ke depan.
                            </p>
                        </div>
                    </div>
                    </div>
        
                {/* Training and Development Section */}
                <div className="mb-16 mx-16 mt-48">
                    <div className="flex flex-row">
                        <h2 className="text-6xl font-bold mr-10 text-gray-300">Training and <br/> Development</h2>
                        <p className="text-gray-500 text-3xl text-justify">
                        Program Training and Development kami bertujuan membantu peserta meningkatkan keterampilan dan pengetahuan dalam berbisnis.
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-10 md:mx-16 mt-10">
                        <img src="/tnd1.svg" alt="Personal branding presentation" className="w-1/3 h-full" />
                        <img src="/tnd2.svg" alt="Training session" className="w-1/3 h-full"/>
                        <img src="/tnd3.svg" alt="Work culture presentation" className="w-1/3 h-full"/>
                    </div>
                </div>
        
                {/* IncubaTEC Section */}
                <div className="mb-16 mx-16 mt-48">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <img 
                        src="/incubatec1.svg" 
                        alt=""
                        className="h-5/6"
                        />
                        <div className="items-center ml-8">
                            <h2 className="text-6xl font-bold mb-4 text-gray-300">IncubaTEC</h2>
                            <p className="text-gray-500 text-3xl text-justify">
                            Program Business Incubator kami dirancang untuk mendukung perkembangan ide bisnis. Peserta akan mendapatkan bimbingan intensif, akses ke mentor ahli, dan jaringan untuk mempercepat pertumbuhan ide bisnis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
  }