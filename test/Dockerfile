FROM cypress/base:22.12.0

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install
RUN npx cypress install

CMD ["npm", "run", "TestRun-wxMPLE"]
CMD ["npm", "run", "TestRun-wxMPLE2"]
