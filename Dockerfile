FROM node

ENV SERVER /server
RUN mkdir -p ${SERVER}
ENV PORT 3000

ADD ./package.json ${SERVER}

WORKDIR ${SERVER}
RUN npm install

EXPOSE 3000

COPY . .

# ENV NODE_PATH .

# CMD ["npm", "start"]