# Node.js is a JavaScript-based platform for server-side and networking applications
# https://hub.docker.com/_/node
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy local code to the container image
COPY . .

# Install app dependencies
RUN npm install

# Expose app
EXPOSE 8080

# Display an output similar to `products_after_30_days.txt`
# Run the test suite and display the coverage report on browser window
CMD npm run after-30-days && npm run test