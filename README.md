## PJBL - Web Growdience Creative
Website periklanan digital untuk tugas project kuliah.

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
