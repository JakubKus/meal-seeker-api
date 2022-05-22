FROM node:alpine
ENV NODE_ENV=DEV

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001
CMD ["npm", "run", "start:dev"]
