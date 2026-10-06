console.log("List dimulai ");
//mengambil elemen html
const inputTugas = document.getElementById("tugas-input");
const btnTambah = document.getElementById("btn-tambah");
const daftarTugas = document.getElementById("daftar-tugas");
const jumlahTugas = document.getElementById("jumlah-tugas");

let totalTugas = 0; // menghitung jumlah Tugas
function updateJumlahTugas() {
  jumlahTugas.innerText = totalTugas;
}

// membuat fungsi untuk menambahkan tugas baru
function tambahTugas() {
  const teksTugas = inputTugas.value.trim();
  if (teksTugas === "") {
    alert("catatan tidak boleh kosong!");
    return;
  }

  //   buat li baru
  const tugasBaru = document.createElement("li");

  // membuat checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  tugasBaru.appendChild(checkbox);

  // membuat span untuk teks tugas
  const teksTugasBaru = document.createElement("span");
  teksTugasBaru.innerText = teksTugas;
  tugasBaru.appendChild(teksTugasBaru);

  //bikin tombol hapus di java
  const tombolHapus = document.createElement("button");
  tombolHapus.innerText = "Hapus";
  tugasBaru.appendChild(tombolHapus);

  // even checkbox
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      teksTugasBaru.style.textDecoration = "line-through";
    } else {
      teksTugasBaru.style.textDecoration = "none";
    }
  });

  // event tombol hapus
  tombolHapus.addEventListener("click", function () {
    if (checkbox.checked) { 
      tugasBaru.remove();
      totalTugas--;
      updateJumlahTugas();
    } else {
        alert("Tugas harus dicentang sebelum dihapus!");
    }
  });

  //memasukkan tugas baru ke  dalam html
  daftarTugas.appendChild(tugasBaru);

  //mengosongkan input
  inputTugas.value = "";

  // menambahkan jumlah tugas
  totalTugas++;
  updateJumlahTugas();

  console.log(`Tugas berhasil ditambahkan: ${teksTugas}`);
}

// event tombol tambah
btnTambah.addEventListener("click", function () {
  tambahTugas();
});

// event enter
inputTugas.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {  
    tambahTugas();
  }
});