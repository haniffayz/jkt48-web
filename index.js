let header = document.querySelector('header', '.navbar a');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})

let search = document.querySelector('.search-box')
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active')
    menu.classList.remove('active')
}

let menu = document.querySelector('.navbar')
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active')
    search.classList.remove('active')
}


// menonaktifkan klik kanan pada komponen Img
document.addEventListener(
 "contextmenu", (e)=> {
     e.preventDefault()
  },
    false
)

const Data = [
    {
        id: 1,
        img: 'img/alya.jpeg',
        nama: `Alya Amanda`,
        namaPanggilan: `Alya`,
        golDarah: `A`,
        tanggalLahir: `26 Agustus 2006`,
        tinggiBadan: '168',
        akunIg: `@jkt48.alya_`,
    },
    {
        id: 2,
        img: 'img/michie.jpeg',
        nama: `Michelle Alexandra`,
        namaPanggilan: `Michie`,
        golDarah: `O`,
        tanggalLahir: `22 April 2009`,
        tinggiBadan: '160',
        akunIg: `@jkt48.michie_`,
    },
    {
        id: 3,
        img: 'img/anindya.jpeg',
        nama: `Anindya Ramadhani`,
        namaPanggilan: `Anin`,
        golDarah: `O`,
        tanggalLahir: `18 Oktober 2005`,
        tinggiBadan: '154',
        akunIg: `@jkt48.anindya_`,
    },
    {
        id: 4,
        img: 'img/celine.jpeg',
        nama: `Celine Thefani`,
        namaPanggilan: `Celine`,
        golDarah: `O`,
        tanggalLahir: `9 April 2007`,
        tinggiBadan: '163',
        akunIg: `@jkt48.elin_`,
    },
    {
        id: 5,
        img: 'img/Danella.jpeg',
        nama: `Dena Natalia`,
        namaPanggilan: `Danella`,
        golDarah: `O`,
        tanggalLahir: `16 Desember 2005`,
        tinggiBadan: '162',
        akunIg: `@jkt48.danella`,
    },
    {
        id: 6,
        img: 'img/greesella.jpeg',
        nama: `Greesella Adhalia`,
        namaPanggilan: `Greesella`,
        golDarah: `O`,
        tanggalLahir: `10 Januari 2006`,
        tinggiBadan: '165',
        akunIg: `@jkt48.greesel`,
    },
    {
        id: 7,
        img: 'img/nixie.jpeg',
        nama: `Cathleen Nixie`,
        namaPanggilan: `Cathy`,
        golDarah: `A`,
        tanggalLahir: `28 Mei 2009`,
        tinggiBadan: '158',
        akunIg: `@jkt48.cathy`,
    },
    {
        id: 8,
        img: 'img/jeane.jpeg',
        nama: `Jeane Victoria`,
        namaPanggilan: `Jeane`,
        golDarah: `O`,
        tanggalLahir: `5 Juni 2006`,
        tinggiBadan: '164',
        akunIg: `@jkt48.jeane`,
    },
    {
        id: 9,
        img: 'img/Gracie.jpeg',
        nama: `Grace Octaviani`,
        namaPanggilan: `Gracie`,
        golDarah: `B`,
        tanggalLahir: `18 Oktober 2007`,
        tinggiBadan: '165',
        akunIg: `@jkt48.gracie`,
    },
    {
        id: 10,
        img: 'img/Daisy.jpeg',
        nama: `Desy Natalia`,
        namaPanggilan: `Daisy`,
        golDarah: `O`,
        tanggalLahir: `16 Desember 2005`,
        tinggiBadan: '165',
        akunIg: `@jkt48.daisy`,
    },
    {
        id: 11,
        img: 'img/Gendis.jpeg',
        nama: `Gendis Mayrannisa`,
        namaPanggilan: `Gendis`,
        golDarah: `B`,
        tanggalLahir: `23 Juni 2010`,
        tinggiBadan: '160',
        akunIg: `@jkt48.gendis`,
    },
    {
        id: 12,
        img: 'img/chyntia.jpeg',
        nama: `Chyntia Yaputera`,
        namaPanggilan: `Chyntia`,
        golDarah: `O`,
        tanggalLahir: `22 November 2003`,
        tinggiBadan: '158',
        akunIg: `@jkt48.chythia`,
    },
    {
        id: 13,
        img: 'img/chelsea.jpg',
        nama: `Chelsea Davina`,
        namaPanggilan: `Chelsea`,
        golDarah: `B`,
        tanggalLahir: `23 Desember 2009`,
        tinggiBadan: '168',
        akunIg: `@jkt48.chelsea`,
    },
]


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      console.log(j)
    }
  }

  shuffleArray(Data)
  

const Member = document.querySelector('#member')
Member.classList.add('member')

Data.forEach((item) => {

    // Container
    const container = document.createElement('div')
    container.classList.add('container')
    Member.appendChild(container)

    // Img
    const Img = document.createElement('img')
    Img.src= item.img
    Img.classList.add('img')
    container.appendChild(Img)

    // Description
    const description = document.createElement('div')
    container.appendChild(description)
    description.classList.add('description')

    // h1
    const nama = document.createElement('h1') 
    nama.classList.add('h1')
    nama.innerHTML = `Nama: ${item.nama}`
    description.appendChild(nama)

    const namaPanggilan = document.createElement('h1')
    namaPanggilan.classList.add('h1')
    namaPanggilan.innerHTML = `Nama Panggilan: ${item.namaPanggilan}`
    description.appendChild(namaPanggilan)

    const golDarah = document.createElement('h1')
    golDarah.classList.add('h1')
    golDarah.innerHTML = `Golongan Darah: ${item.golDarah}`
    description.appendChild(golDarah)

    const tanggalLahir = document.createElement('h1')
    tanggalLahir.classList.add('h1')
    tanggalLahir.innerHTML = `Tanggal Lahir: ${item.tanggalLahir}`
    description.appendChild(tanggalLahir)

    const tinggiBadan = document.createElement('h1')
    tinggiBadan.classList.add('h1')
    tinggiBadan.innerHTML = `Tinggi Badan:  ${item.tinggiBadan} cm`
    description.appendChild(tinggiBadan)

    const akunIg = document.createElement('h1')
    akunIg.classList.add('h1')
    akunIg.innerHTML = `Instagram: ${item.akunIg}`
    description.appendChild(akunIg)

})
