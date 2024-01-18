import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image3 from "../assets/2.png";
 
const AddUser = () => {
  const [nama, setName] = useState("");
  const [alamat, setAlamat] = useState("");
  const [notelp, setNotelp] = useState("");
  const [medsos, setMedsos] = useState("");
  const [gender, setGender] = useState("");
  const [kategori, setKategori] = useState("");
  const [judul, setJudul] = useState("");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nama,
        alamat,
        notelp,
        medsos,
        gender,
        kategori,
        judul,
      });
      navigate("../user");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="bg-left-bottom h-screen" style={{ backgroundImage:`url(${image3})`}}>
    <div className="container mx-auto py-24">
      <h1 className="text-center font-bold text-5xl mb-12 text-white font-mono">Formulir Pendaftaran</h1>
      <div className="flex flex-wrap justify-center">
        <form onSubmit={saveUser}>
          <div className="w-full lg:mx-auto">
            <label className="font-bold text-white">Nama</label>
            <div className="control">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                value={nama}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama"
              />
            </div>
          </div>
          <div className="w-full lg:mx-auto">
            <label className="font-bold text-white">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat"
              />
            </div>
          </div>
          <div className="w-full lg:mx-auto">
            <label className="font-bold text-white">No Telp</label>
            <div className="control">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                value={notelp}
                onChange={(e) => setNotelp(e.target.value)}
                placeholder="No Telp"
              />
            </div>
          </div>
          <div className="w-full lg:mx-auto">
            <label className="font-bold text-white">Medsos</label>
            <div className="control">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                value={medsos}
                onChange={(e) => setMedsos(e.target.value)}
                placeholder="Medsos"
              />
            </div>
          </div>
          <div className="w-full lg:mx-auto">
            <label className="font-bold text-white">Jenis Kelamin</label>
            <div className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[200px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                >
                  <option value=" "></option>
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full lg:mx-auto">
            <label className="font-bold text-white">Kategori</label>
            <div className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2">
              <div className="select is-fullwidth">
                <select
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[200px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                >
                  <option value=" "></option>
                  <option value="Novel">Novel</option>
                  <option value="Cerpen">Cerpen</option>
                  <option value="Puisi">Puisi</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full lg:mx-auto">
            <label className="font-bold text-white">Judul Karya</label>
            <div className="control">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100 my-2"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul"
              />
            </div>
          </div>
          <div className="h-[80px] flex justify-center items-center">
            <button type="submit" className="text-xl text-white font-bold bg-[#2C74B3] hover:bg-[#1c5c94] rounded-2xl p-4 pl-10 pr-10">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
 
export default AddUser;