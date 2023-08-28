FROM node:20

WORKDIR /frontend/

COPY package*.json /frontend/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]