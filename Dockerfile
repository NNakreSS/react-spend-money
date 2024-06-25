# Stage 1: Build the React app with Vite using Yarn
FROM node:20 AS build

# Install Yarn
RUN npm install -g yarn

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
