import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import image4 from "../assets/3.png"
 
const EditUser = () => {
  const [nama, setName] = useState("");
  const [alamat, setAlamat] = useState("");
  const [notelp, setNotelp] = useState("");
  const [medsos, setMedsos] = useState("");
  const [gender, setGender] = useState("");
  const [kategori, setKategori] = useState("");
  const [judul, setJudul] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
 
  useEffect(() => {
    getUserById();
  }, []);
 
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
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
 
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.nama);
    setAlamat(response.data.alamat);
    setNotelp(response.data.notelp);
    setMedsos(response.data.medsos);
    setGender(response.data.gender);
    setKategori(response.data.kategori);
    setJudul(response.data.judul);
  };
 
  return (
    <div className="bg-right-bottom h-screen" style={{ backgroundImage:`url(${image4})`}}>
    <div className="flex justify-center items-center h-[800px]">
      <div className="bg-white shadow-xl rounded-[30px] w-[350px] h-[650px]">
        <form onSubmit={updateUser} className="h-[500px]">
          <div className="h-[100px] flex justify-center items-center">
            <h1 className="text-2xl text-[#144272] font-bold">Edit Data</h1>
          </div>
          <div className="h-[70px]">
            <div className="pl-[50px] py-1">
              <label className="font-bold text-[#144272]">Nama</label>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                value={nama}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="h-[70px]">
            <div className="pl-[50px] py-1">
              <label className="font-bold text-[#144272]">Alamat</label>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat"
              />
            </div>
          </div>
          <div className="h-[70px]">
            <div className="pl-[50px] py-1">
              <label className="font-bold text-[#144272]">No Telp</label>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                value={notelp}
                onChange={(e) => setNotelp(e.target.value)}
                placeholder="No telp"
              />
            </div>
          </div>
          <div className="h-[70px]">
            <div className="pl-[50px] py-1">
              <label className="font-bold text-[#144272]">Medsos</label>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                value={medsos}
                onChange={(e) => setMedsos(e.target.value)}
                placeholder="Medsos"
              />
            </div>
          </div> 
          <div>
            <div className="pl-[50px] py-1">
              <label className="font-bold text-[#144272]">Jenis Kelamin</label>
            </div>
            <div className="pl-[50px]">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                >
                  <option value=" "></option>
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="pl-[50px] py-1">
              <label className="font-bold text-[#144272]">Kategori</label>
            </div>
            <div className="pl-[50px]">
              <div className="select is-fullwidth">
                <select
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                >
                  <option value=" "></option>
                  <option value="Novel">Novel</option>
                  <option value="Cerpen">Cerpen</option>
                  <option value="Puisi">Puisi</option>
                </select>
              </div>
            </div>
            <div className="h-[70px]">
            <div className="pl-[50px] py-1">
              <label className="font-bold text-[#144272]">Judul</label>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="shadow-sm rounded-md border-none outline-none bg-sky-50 w-[250px] h-[30px] px-[15px] focus:shadow-md duration-500 focus:bg-sky-100"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul"
              />
            </div>
          </div> 
          </div>
          <div className="h-[80px] flex justify-center items-center">
            <button type="submit" className="bg-[#2C74B3] hover:bg-[#1c5c94] w-[90px] h-[30px] rounded-md text-white duration-500">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
 
export default EditUser;