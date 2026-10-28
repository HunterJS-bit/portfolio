# Step 1: Base image
FROM node:24-alpine AS base
WORKDIR /app

# Step 2: Install dependencies and build the project
FROM base AS build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Step 3: Production runner
FROM base AS runner
ARG PORT=4004
ENV NODE_ENV=production
ENV PORT=${PORT}
ENV HOST=0.0.0.0

# Copy only the necessary files for production (standalone mode)
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
COPY --from=build /app/content ./content

# Expose the port for the application
EXPOSE ${PORT}

# Command to run the Next.js application (standalone mode)
CMD ["node", "server.js"]