# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json to cache dependency installation
COPY package*.json ./
RUN npm ci

# Copy the rest of the application files and build
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy a basic Nginx configuration to support SPA routing (fallback to index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files from the first stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
