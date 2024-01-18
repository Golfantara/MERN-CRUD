import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image2 from "../assets/4.png";
 
const UserList = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
 
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="h-screen" style={{ backgroundImage:`url(${image2})`}}>
    <div className="container mx-auto pt-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white font-mono">DATA PESERTA</h1>
      </div>
      <div className="">
      <div className="my-12 flex justify-center mx-4">
        <table className="border-2 shadow-sm border-[#205295]">
          <thead className="border-b-2 border-[#205295] bg-[#2C74B3]">
            <tr className="text-white">
              <th className="py-3 px-9">No</th>
              <th className="py-3 px-9">Nama</th>
              <th className="py-3 px-9">Alamat</th>
              <th className="py-3 px-9">No Telp.</th>
              <th className="py-3 px-9">Medsos</th>
              <th className="py-3 px-9">Gender</th>
              <th className="py-3 px-9">Kategori</th>
              <th className="py-3 px-9">Judul</th>
              <th className="py-3 px-9">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className='text-white'>
                <td className="py-3 px-9">{index + 1}</td>
                <td className="py-3 px-9">{user.nama}</td>
                <td className="py-3 px-9">{user.alamat}</td>
                <td className="py-3 px-9">{user.notelp}</td>
                <td className="py-3 px-9">{user.medsos}</td>
                <td className="py-3 px-9">{user.gender}</td>
                <td className="py-3 px-9">{user.kategori}</td>
                <td className="py-3 px-9">{user.judul}</td>
                <td className="py-3 px-9 flex">
                  <Link
                    to={`edit/${user.id}`}
                    className="bg-[#2C74B3] hover:bg-[#1c5c94] text-white px-4 py-2 rounded-xl mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="ml-2 px-4 py-2 rounded-xl text-white bg-[#2C74B3] hover:bg-[#1c5c94]">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
      <Link to={`/`} className="text-white font-bold bg-[#2C74B3] hover:bg-[#1c5c94] rounded-md p-4">
          Kembali
        </Link>
      </div>
      </div>
    </div>
    </div>

  );
};
 
export default UserList;