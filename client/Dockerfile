FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm audit fix
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node","build/index.js"]