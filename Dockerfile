# inherit from a existing image to add the functionality
FROM node:latest
WORKDIR /app
COPY package*.json ./

RUN npm install --frozen-lockfile

COPY . .

EXPOSE 5173

# # Run the application.
# RUN npm start

CMD ["npm" ,"run" , "dev"]
