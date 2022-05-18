FROM node:alpine
ENV NODE_ENV=DEV

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm", "run", "start:dev"]
