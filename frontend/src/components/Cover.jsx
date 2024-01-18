import { Link } from "react-router-dom";
import image from '../assets/coverr.png'
const Layout = () => {
    return (
      <div className="">
        <section className='bg-right h-screen' style={{ backgroundImage:`url(${image})`}}>
      <div class="flex min-h-full items-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-full space-y-8">
          <div div className="ml-72">
            <h1 className='text-center py-4 font-bold text-5xl text-white font-mono'>Salira Writing Festival</h1>
            <p className='py-4 text-white font-serif text-lg'>Salira Writing Festival telah dibuka!
              <br></br>Syarat & Ketentuan :
              <br></br>- Mengisi Formulir pendaftaran yang telah disediakan
              <br></br>- Maksimal 1 karya untuk satu peserta
              <br></br>- Karya belum pernah dipublikasikan dan orisinal
              <br></br>- Mengunggah karya pada platform yang disediakan
              <br></br>- Cerpen Minimal 10000 kata saat pengumpulan
              <br></br>- Novel Minimal 20000 kata saat pengumpulan
              <br></br>- Puisi Minimal 10000 kata saat pengumpulan
            </p>
            <div className="flex justify-center pt-10">
            <Link to={`add`} className='text-white font-bold text-lg bg-[#2C74B3] hover:bg-[#1c5c94] rounded-3xl p-6 pl-24 pr-24'>Daftar Sekarang</Link>
            </div>
          </div>
        </div>
      </div>
      </section>
      </div>
    )
  };
  
  export default Layout;