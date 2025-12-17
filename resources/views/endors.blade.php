@extends('layouts.app')
@section('page', 'Endorsement')

@section('content')
  <section
    id="HeroSection"
    class="relative w-full h-dvh flex items-center overflow-hidden"
  >
    <img
      src="/assets/images/bg/endors.svg"
      alt="bg-endors"
      class="-z-50 absolute -left-0.5 w-full scale-101"
    >
    <div
      class="w-[90%] h-full mt-40 mx-auto flex justify-evenly items-center gap-20"
    >
      <div
        class="w-[40%] flex flex-col gap-10"
      >
        <h1
          class="text-5xl font-bold"
        >Endorsmen with influencer</h1>
        <p>Kami memanfaatkan pengaruh influencer yang tepat untuk membuat produk Anda dipercaya lebih cepat, dibicarakan lebih luas, dan mendorong audiens langsung ke tindakan pembelian.</p>
      </div>
      <img
        src="/assets/images/endors.png"
        alt="endors"
        class="w-[40%]"
      >
    </div>
  </section>

  <section
    id="WhatSection"
    class="-z-50 relative w-full h-full bg-linear-to-tl from-white to-[#999797]"
  >
    <div
      class="absolute top-0 left-[calc(1/2*100%-35%)]"
    >
      <img
        src="/assets/images/endors1.png"
        alt="endors1"
        class="z-0 relative top-10 left-10 w-45"
      >
      <img
        src="/assets/images/endors2.png"
        alt="endors2"
        class="z-1 relative top-0 left-30 w-45"
      >
    </div>
    <div
      class="absolute top-10 left-[calc(1/2*100%-10%)] text-bg"
    >
      <div
        class="w-130 h-fit px-3 py-10 bg-white rounded-4xl shadow-2xl shadow-bg/30"
      >
        <h1
          class="mb-4 text-lg font-bold"
        >Apa itu Endorsment?</h1>
        <p>Endorsement adalah suatu bentuk promosi dimana seorang individu yang sering dikenal sebagai endorser atau influencer, membagikan pendapat atau rekomendasi positif mereka tentang suatu produk atau layanan, yang dapat berdampak signifikan pada persepsi audiens dan proses pengambilan keputusan.</p>
      </div>
      <div
        class="w-130 h-fit mt-8 ml-18 px-3 py-10 bg-white rounded-4xl shadow-2xl shadow-bg/30"
      >
        <h1
          class="mb-4 text-lg font-bold"
        >Mengapa Endorsment?</h1>
        <p>Kami menawarkan layanan dukungan untuk membantu bisnis memanfaatkan kekuatan tokoh berpengaruh dan suara tepercaya untuk meningkatkan reputasi merek, memperluas jangkauan, dan mendorong pertumbuhan bisnis. Kami bekerja sama dengan anda untuk mengidentifikasi endorser yang tepat yang selaras dengan nilai dan tujuan merek anda, memastikan dampak dan kesuksesan maksimum.objectives, ensuring maximum impact and success.</p>
      </div>
    </div>
    <div class="pt-190"></div>
    <div
      class="text-bg"
    >
      <h1
        class="ml-20 mb-6 text-5xl font-bold"
      >Proses Pengaplikasian</h1>
      <div
        class="w-full flex justify-evenly"
      >
        <div>
          <h1
            class="mb-2 ml-4 text-xl font-bold"
          >Langkah 1</h1>
          <p
            class="w-60 h-full px-5 pt-4 bg-white rounded-3xl"
          >Kami akan bekerja sama untuk menentukan jenis endorsement yang sesuai dengan tujuan brand dan audiens target anda. Tentu dengan mempertimbangkan nilai, citra, dan relevansi orang atau merek yang ingin anda dukung.</p>
        </div>
        <div>
          <h1
            class="mb-2 ml-4 text-xl font-bold"
          >Langkah 2</h1>
          <p
            class="w-60 h-full px-5 pt-4 bg-white rounded-3xl"
          >Setelah kami mengidentifikasi endorser potensial, kami menjangkau mereka dan menyajikan proposisi nilai kami sambil memasuki negosiasi yang tepat terkait ketentuan endorsemen.</p>
        </div>
        <div>
          <h1
            class="mb-2 ml-4 text-xl font-bold"
          >Langkah 3</h1>
          <p
            class="w-60 h-full px-5 pt-4 bg-white rounded-3xl"
          >Setelah perjanjian dibuat, kami akan bekerja dengan endorser untuk melaksanakan endorsement. Ini melibatkan pembuatan konten, berpartisipasi dalam acara atau projek, menampilkan endorser dalam materi iklan dan banyak lagi.</p>
        </div>
        <div>
          <h1
            class="mb-2 ml-4 text-xl font-bold"
          >Langkah 4</h1>
          <div
            class="w-60 h-full px-5 pt-4 bg-white rounded-3xl"
          >
            <p>Kami akan secara teratur memantau dan mengukur dampak dari endorsement tersebut.</p>
            <p>Cara nya dengan melacak indikator kinerja utama seperti peningkatan kesadaran brand, traffic website, penjualan produk, dan keterlibatan media sosial.</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative mt-20 pb-20 flex justify-center items-center"
    >
      <img
        src="/assets/images/endors-d.svg"
        alt="endors-d"
        class="w-[80%]"
      >
    </div>
  </section>
@endsection
