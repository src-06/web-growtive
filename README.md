## PJBL - Web Growdience Creative
Website periklanan digital untuk tugas project kuliah.

### Hal-hal yang dipersiapkan sebelum setup project ini
**Note**: _Instalasi hanya untuk arch linux based_
1. Install git
	```bash
	sudo pacman -S git
	```

2. Install Node.js dan NPM
	```bash
	sudo pacman -S nodejs npm
	```

3. Install composer
	```bash
	sudo pacman -S composer
	```
4. Install PHP v8.2+
	```bash
	sudo pacman -S php
	```

### Langkah-langkah setup
1. Clone repository dan masuk ke folder web-growtive
	```bash
	git clone https://github.com/src-06/web-growtive.git
	cd web-growtive
	```

2. Copy/cut/rename file '.env.example' jadi '.env'
3. Install package dependencies

	```bash
	npm install
	composer install
	```

4. Generate APP_KEY
	```bash
	php artisan key:generate
	```

5. Migrasi database

	```bash
	php artisan migrate
	```

6. Tinggal running di local

	```bash
	npm run dev
	php artisan serve
	```
