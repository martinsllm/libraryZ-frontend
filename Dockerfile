FROM node:alpine

WORKDIR /app-frontend

COPY package* .

RUN npm install

COPY . . 

ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]

