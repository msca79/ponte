# ----- Stage 1: Build Angular -----
FROM node:20 AS frontend

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build --prod

# ----- Stage 2: Build Spring Boot -----
FROM docker.io/library/maven:3.9-eclipse-temurin-21 AS backend

WORKDIR /app/backend

COPY backend/pom.xml .
COPY backend/src ./src
RUN mvn clean package -DskipTests

# ----- Stage 3: Final image -----
FROM docker.io/eclipse-temurin:21-jdk

WORKDIR /app

# Copy JAR from previous stage
COPY --from=backend /app/backend/target/*.jar app.jar

# Copy Angular dist files into static resources
COPY --from=frontend /app/frontend/dist/browser /static/

# Optional: if Spring Boot serves static files from custom path
# RUN mkdir -p /app/public && cp -r /app/static/* /app/public

# Expose default port
EXPOSE 8080

# Run Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
