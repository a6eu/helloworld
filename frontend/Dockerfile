# Use a lightweight base image with Node.js 20.10 (or adjust tag)
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Next.js application (production mode)
RUN npm run build

# Use a smaller image for serving
FROM node:20-alpine
# Assuming same version for serving

# Set working directory
WORKDIR /app

# Copy the built Next.js application and Node.js binary (adjust path if needed)
COPY --from=builder /app/.next .
COPY --from=builder /usr/local/bin/node .
# Replace with actual path in your image

# Expose port (usually 3000 for Next.js apps)
EXPOSE 3000

# Start the Next.js server
CMD [ "npm", "start" ]