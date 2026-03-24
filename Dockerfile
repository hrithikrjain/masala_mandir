# Use official Node.js LTS image with Alpine for smaller size
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose port 3000 (default React dev server port)
EXPOSE 3000

# Start the React development server with proper host binding
ENV HOST=0.0.0.0
CMD ["npm", "start"]