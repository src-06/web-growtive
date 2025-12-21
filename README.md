## PJBL - Web Growdience Creative
Website periklanan digital untuk tugas project kuliah.

### Hal-hal yang dipersiapkan sebelum setup project ini

[Arch Linux Based](#instalasi-untuk-arch-linux-based)
[NixOS Based](#instalasi-untuk-nixos-based)
[Debian/Ubuntu Based](#instalasi-untuk-debianubuntu-based)
[Fedora Based](#instalasi-untuk-fedora-based)

### Setup
[Langkah-langkah setup](#langkah-langkah-setup)

#### Package yang diperlukan untuk Arch Linux based!
```bash
sudo pacman -S git php composer nodejs npm
```

#### Package yang diperlukan untuk NixOS based!
1. Edit file `/etc/nixos/configuration.nix` lalu tambahkan packages pada baris ini
	```nix
	environment.systemPackages = with pkgs; [
		...
		git
		php82
		php82Packages.composer
		nodePackages.nodejs
		...
	];
	```
2. Rebuild nixos
	```bash
	sudo nixos-rebuild switch
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

4. Buka broser dan ketik `localhost:8000`
