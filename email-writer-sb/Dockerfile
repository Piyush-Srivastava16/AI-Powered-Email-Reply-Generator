# --- Stage 1: Build the application ---
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy the pom.xml and source code
COPY pom.xml .
COPY src ./src

# Build the application and skip tests for faster deployment
RUN mvn clean package -DskipTests

# --- Stage 2: Run the application ---
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app

# Copy the built jar file from the build stage
# Note: Ensure the jar name matches what Maven generates in your target folder
COPY --from=build /app/target/*.jar app.jar

# Expose the port Spring Boot will run on
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]