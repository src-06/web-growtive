@extends('layouts.app')

@section('title', 'Beranda')

@section('content')
  <section
    id="Hero"
  >
    <img
      src="{{ Vite::asset('resources/img/bg-header.jpg') }}"
      alt="Background Header"
      class="w-full"
    >
  </section>

  <section
    id="About"
    class="w-[90%] mx-auto mt-40"
  >
    <div
      class="flex gap-33"
    >
      <img
        src="https://indie.co.id/growtive/wp-content/uploads/2024/01/about1h1.jpg"
        alt="Image About"
        class="w-120 rounded-xl"
      >
      <div
        class="flex flex-col gap-6"
      >
        <h1
          class="text-xl text-black/60 font-bold"
        >
          <span
            class="text-blue-600"
          >//</span>
          Tentang Kami
        </h1>
        <p
          class="text-black/60"
        >Kami akan mengiklankan produk anda dengan maksimal agar produk anda menjadi lebih terkenal.</p>
        <ul
          class="flex flex-col gap-4 text-lg font-bold"
        >
          <li>Mengiklankan produk anda.</li>
          <li>Iklankan di media sosial</li>
          <li>Mengelola akun media sosial</li>
        </ul>
      </div>
    </div>
  </section>

  <section
    id="Services"
    class="w-[90%] mx-auto mt-20"
  >
    <div
      class="grid grid-cols-4 gap-8"
    >
      <div>
        <h1
          class="text-xl text-black/60 font-bold"
        >
          <span
            class="text-blue-600"
          >//</span>
          Layanan
        </h1>
        <h2
          class="text-5xl font-bold"
        >Layanan Yang Kami Tawarkan</h2>
      </div>

      <x-card.service
        img="https://indie.co.id/growtive/wp-content/uploads/2024/01/Web1h4.jpg"
        name="Periklanan"
      >@svg('iconsax-bro-lamp-on')</x-card.service>
      <x-card.service
        img="https://indie.co.id/growtive/wp-content/uploads/2024/01/about2h4.jpg"
        name="Pengiklanan Lewat Medsos"
      >@svg('iconsax-out-image')</x-card.service>
      <x-card.service
        img="https://indie.co.id/growtive/wp-content/uploads/2024/01/Contact1h1.jpg"
        name="Layanan Pengiklanan"
      >@svg('iconsax-bol-forward-15-seconds')</x-card.service>
    </div>
  </section>

  <section
    id="Testimonial"
    class="w-full mt-40 py-20 bg-stone-900 text-white"
  >
    <div
      class="w-[90%] mx-auto grid grid-cols-3"
    >
      <div
        class="col-span-1 flex flex-col gap-2"
      >
        <h1
          class="text-xl text-current/60 font-bold"
        >
          <span
            class="text-blue-600"
          >//</span>
          Testimoni Kami
        </h1>
        <h2
          class="text-5xl font-bold"
        >Apa yang mereka bicarakan tentang kami</h2>
        <p
          class="my-8"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus a nostrum quibusdam!</p>
      </div>

      <div
        class="col-span-2 w-full h-90 ml-18 mt-8 flex justify-between items-center gap-10 overflow-x-scroll"
      >
        <x-card.testimonial
          icon="https://indie.co.id/growtive/wp-content/uploads/2022/11/testimonial-3.jpg"
          name="Jessica Markdown"
          role="Desainer"
          testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam obcaecati architecto nisi veritatis consectetur consequuntur nam ducimus veniam culpa."
        />
        <x-card.testimonial
          icon="https://indie.co.id/growtive/wp-content/uploads/2022/11/testimonial-2.jpg"
          name="Audio Jack"
          role="Desainer"
          testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam obcaecati architecto nisi veritatis consectetur consequuntur nam ducimus veniam culpa."
        />
        <x-card.testimonial
          icon="https://indie.co.id/growtive/wp-content/uploads/2022/11/testimonial-1.jpg"
          name="Lindsey Livewire"
          role="Desainer"
          testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam obcaecati architecto nisi veritatis consectetur consequuntur nam ducimus veniam culpa."
        />
      </div>
    </div>
  </section>

  <section
    id="Contact"
    class="w-full mt-20 flex justify-between gap-10"
  >
    <div
      class="w-[40%] ml-20"
    >
      <div
        class="flex flex-col gap-2"
      >
        <h1
          class="text-xl text-current/60 font-bold"
        >
          <span
            class="text-blue-600"
          >//</span>
          Kontak Kami
        </h1>
        <h2
          class="text-5xl font-bold"
        >Hubungi tim kami</h2>
      </div>
      <form
        action=""
        class="mt-8 flex flex-col gap-5"
      >
        <input
          type="text"
          placeholder="Nama"
          class="p-4 bg-stone-200 rounded-lg"
        >
        <input
          type="email"
          placeholder="emailkamu@contoh.com"
          class="p-4 bg-stone-200 rounded-lg"
        >
        <textarea
          name="message"
          placeholder="Kirim pesan kepada kami..."
          rows="5"
          class="p-4 bg-stone-200 rounded-lg"
        ></textarea>
        <input
          type="button"
          value="Kirim Pesan"
          class="w-fit px-12 py-4 text-white bg-blue-600 rounded-lg"
        >
      </form>
    </div>
    <div
      class="relative w-fit h-fit"
    >
      <div class="-z-10 absolute top-14 -left-5 w-150 h-[calc(100%-3.5rem)] bg-blue-600 rounded-tl-lg"></div>
      <img
        src="{{ Vite::asset('resources/img/bg-contact.jpg') }}"
        alt="Image Contact"
        class="w-150 h-auto rounded-tl-lg"
      >
    </div>
  </section>
@endsection
