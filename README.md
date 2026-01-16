## PJBL - Web Growdience Creative
Website periklanan digital untuk tugas project kuliah.

### Hal-hal yang dipersiapkan sebelum setup project ini

[Arch Linux](#package-yang-diperlukan-untuk-arch-linux-based)

[Debian/Ubuntu](#package-yang-diperlukan-untuk-debianubuntu-based)

[Fedora](#package-yang-diperlukan-untuk-fedora-based)

[Windows](#package-yang-diperlukan-untuk-windows)

### Setup
[Langkah-langkah setup](#langkah-langkah-setup)
[Langkah-langkah setup `nix` + `flake`](#langkah-langkah-setup-nix--flakes)

#### Package yang diperlukan untuk Arch Linux based!
```bash
sudo pacman -S git php composer nodejs npm
```

#### Package yang diperlukan untuk Debian/Ubuntu based!
```bash
sudo apt install git php composer nodejs npm
```

#### Package yang diperlukan untuk Fedora based!
```bash
sudo dnf install git php composer nodejs nodejs-npm
```

#### Package yang diperlukan untuk Windows!
```bash
choco install git php composer nodejs
```

### Langkah-langkah setup
1. Clone repository dan masuk ke folder web-growtive
	```bash
	git clone https://github.com/src-06/web-growtive.git
	cd web-growtive
	```

2. Install package dependencies and setup `.env`
	```bash
	composer setup
	```

3. Tinggal running di local
	```bash
	composer dev
	```

4. Buka browser dan ketik [`localhost:8000`](http://localhost:8000)

### Langkah-langkah setup `nix` + `flakes`
1. Clone repository dan masuk ke folder web-growtive
	```bash
	git clone https://github.com/src-06/web-growtive.git
	cd web-growtive
	```

2. Jalankan nix development
	```bash
	nix develop
	```

3. Install package dependencies and setup `.env`
	```bash
	composer setup
	```

4. Tinggal running di local
	```bash
	composer dev
	```

5. Buka browser dan ketik [`localhost:8000`](http://localhost:8000)
