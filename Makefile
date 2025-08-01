be:
	cd backend && ./mvnw spring-boot:run


fe:
	cd frontend && ng serve

d:
	docker build -t my-fullstack-app .
	docker run -p 8081:8080 my-fullstack-app