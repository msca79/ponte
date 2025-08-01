
# Készen van
 - Lapozható lista backenden
 - Swagger
 - WSL alapú fejlesztői környezet VSCode-ban
 - Backend Springboot, jpa, restapi
 - Frontend Angular, router, bootstrap
 - Docker 
 - Flyway alapú adatbázis verziókezelő
 - Makefile alapú fordítási leírás

![Lista](list.png)

![Szerkesztés](detail.png)

![Swaggerui](swaggerui.png)

## Ami még hátra lenne
 
### Backend
 - Security (LDAP/AD alapú auth)
 - Admin felhasználó
 - Önálló regisztráció
 - Végpontok levédése
 Junit és integrációs tesztek
 Kapcsolattartó-Telefonok-Címek relációk létrehozása
 Postgresql
 Api first átalakítás

### Frontend
 -  reactive form validáció
 -  reszponzívabb design
 -  Többféle adattípus használata (dátum, szám)

### CICD
  - Jenkins

# Tisztázandó funckió: 
 - biztosíts egy funkciót, amellyel a felhasználók egy gombnyomással törölhetik személyes adataikat az adatbázisból


## Pár lépés a fejlesztői környezet összerakásához
```
wsl --install -d Ubuntu
wsl --export Ubuntu ubuntu-base.tar
wsl --import ponte-poc D:\WSL\ponte-poc ubuntu-base.tar
wsl -d ponte-poc
```

### SDK
```
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install java 17.0.9-tem
sdk use java 17.0.9-tem
java -version
```

### NVM
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 22.17.1
nvm use 22.17.1
```

### Docker (podman)
```
apt install -y podman
echo "alias docker=podman" >> ~/.bashrc
update-alternatives --config iptables
Válaszd ki a iptables-legacy verziót, ha elérhető.
```

### BACKEND
spring initializer weboldal

### FRONTEND
```
npm install -g @angular/cli@20
ng new frontend --routing --style=scss
cd frontend
npm start
```

## VSCODE
```
code .
```


