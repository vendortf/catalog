FROM node:17-alpine
LABEL name="Run @automatedtf/catalog tests" version="1.0.0"

COPY . .
RUN npm install
CMD npm test