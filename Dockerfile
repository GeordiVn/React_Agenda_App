FROM node:18-alpine
WORKDIR /react-docker-example/
COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/
COPY .env.local /react-docker-example/
COPY .env.development /react-docker-example/
COPY .env.development.local /react-docker-example/
RUN npm install
EXPOSE 3000
CMD ["npm", "run","dev"]