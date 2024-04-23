# inherit from a existing image to add the functionality
FROM node:latest

# Set the working directory
WORKDIR /src

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./


# Install the dependencies.
RUN npm install --production

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# # Run the application.
# RUN npm start

CMD ["npm" ,"run" , "dev"]