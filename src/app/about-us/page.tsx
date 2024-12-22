export default function aboutUs() {
    return (
        <div className="h-screen bg-black font-['Helvetica'] ">
            <div className="bg-[url('/bg-visi-misi.svg')] bg-contain bg-no-repeat h-5/6 justify-center flex flex-col bg-[center_top_50%]">
                <h1 className="text-9xl ml-32 mr-32 text-left">
                    Our Vision
                </h1>
                <h2 className="text-5xl ml-32 mr-32">
                    <span style={{ color: '#5493ef' }}>Eskalasi alterasi</span> TEC ITB sebagai wadah aktualisasi diri yang inklusif dan kolaboratif serta berdampak secara global
                </h2>
            </div>

            <div className="bg-[#002b6a] h-20 flex justify-center items-center">
                <h1 className="text-5xl flex justify-center items-center">
                    Lakskarsa Mission
                </h1>
            </div>

            <div className="grid grid-cols-3 ml-32 mr-32 mt-20">
                <div className="flex items-center gap-4 mr-11">
                    <h1 className="text-9xl font-bold text-gray-500">1</h1>
                    <h2 className="text-lg text-gray-300">
                        Meningkatkan efisiensi dan keberlanjutan operasional pada berbagai program kerja sesuai dengan tujuan yang telah ditetapkan.
                    </h2>
                </div>
                <div className="flex items-center gap-4 mr-11">
                    <h1 className="text-9xl font-bold text-gray-500">3</h1>
                    <h2 className="text-lg text-gray-300">
                        Menciptakan ekosistem pembelajaran yang dinamis dan inovatif untuk mendukung pengembangan keterampilan dan pengetahuan kewirausahaan anggota.
                    </h2>
                </div>
                <div className="flex items-center gap-4 mr-16">
                    <h1 className="text-9xl font-bold text-gray-500">5</h1>
                    <h2 className="text-lg text-gray-300">
                        Mengembangkan dan memperluas jaringan kerjasama dengan berbagai organisasi.
                    </h2>
                </div>
                <div className="flex items-center gap-4 mr-11">
                    <h1 className="text-9xl font-bold text-gray-500">2</h1>
                    <h2 className="text-lg text-gray-300">
                        Mengubah dan menyempurnakan berbagai aspek yang memiliki potensi untuk menghasilkan dampak signifikan.
                    </h2>
                </div>
                <div className="flex items-center gap-4 mr-11">
                    <h1 className="text-9xl font-bold text-gray-500">4</h1>
                    <h2 className="text-lg text-gray-300">
                        Mendorong anggota untuk saling berkolaborasi dengan mengedepankan profesional dan harmonisasi.
                    </h2>
                </div>
            </div>

            <div className="mt-12 border-t-4 border-[#002b6a]"></div>

            <div className="mt-10 mb-44">
                <h1 className="text-5xl flex justify-center items-center font-semibold">
                    Our Program
                </h1>
                <div className="flex justify-center items-center gap-32 md:mx-16 mt-20">
                    <img src="/our-program-1.svg" className="w-1/4 h-auto" alt="our-program-1" />
                    <img src="/our-program-2.svg" className="w-1/4 h-auto" alt="our-program-2" />
                    <img src="/our-program-3.svg" className="w-1/4 h-auto" alt="our-program-3" />
                </div>
            </div>
        </div>
    );
}