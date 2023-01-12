import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateKartu() {
    const [id_peserta,setIdPeserta] = useState("");
  const [id_kloter, setIdKloter] = useState("");
  const [msg, setMsg] = useState("");
  const Navigate = useNavigate();

  const regis = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kartu", {
        id_peserta, id_kloter
      });
      Navigate("/ujian");
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };
  return (
    <div className="vh-100">
      <div className="container-fluid h-custom mb-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          {/* <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={siswa} />
          </div> */}
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={regis}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"></div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-auto mb-0">Tambah Data Pendaftar</p>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">ID Peserta</label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid id user login"
                  value={id_peserta}
                  onChange={(e) => setIdPeserta(e.target.value)}
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label">ID Kloter</label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter id_kloter User"
                  value={id_kloter}
                  onChange={(e) => setIdKloter(e.target.value)}
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary ">
        <div class="text-white mb-3 mb-md-0">Bani Usman Manunggalz</div>
      </div>
    </div>
  );
}

export default CreateKartu