function beriPujian(pemenang, jenisPerlombaan) {
    return `Selamat kepada ${pemenang} atas kemenangan dalam perlombaan yang kamu ikuti adalah ${jenisLomba}! Kamu luar biasa!`;
  }
  
  const pemenangLomba = "Dila";
  const jenisLomba = "berenang";
  
  const pesanPujian = beriPujian(pemenangLomba, jenisLomba);
  console.log(pesanPujian);