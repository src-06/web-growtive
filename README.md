## PJBL - Web Growdience Creative
Website periklanan digital untuk tugas project kuliah.

### Hal-hal yang dipersiapkan sebelum setup project ini
**Note**: _Instalasi hanya untuk arch linux based_
1. Install Node.js dan NPM
	```bash
	sudo pacman -S nodejs npm
	```

2. Install composer
	```bash
	sudo pacman -S composer
	```
3. Install PHP v8.2+
	```bash
	sudo pacman -S php
	```

### Langkah-langkah setup
1. Copy/cut/rename file '.env.local' jadi '.env'
2. Install package dependencies

	```bash
	npm install
	composer install
	```

3. Migrasi database

	```bash
	php artisan migrate
	```

4. Tinggal running di local

	```bash
	npm run dev
	php artisan serve
	```
