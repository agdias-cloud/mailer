FROM node:20.17.0-slim
WORKDIR /app
COPY app/ /app/
EXPOSE 3000
ENTRYPOINT ["npm run dev"]
