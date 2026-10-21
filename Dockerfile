# Stage 1: Build CSS and WASM with standalone Tailwind and Trunk
FROM rust:1-alpine AS builder
RUN apk add --no-cache musl-dev pkgconfig openssl-dev curl
RUN curl -L https://github.com/trunk-rs/trunk/releases/download/v0.21.14/trunk-x86_64-unknown-linux-musl.tar.gz | tar xz -C /usr/local/bin
RUN rustup target add wasm32-unknown-unknown
WORKDIR /app

# Download standalone Tailwind CLI (Linux x64)
RUN mkdir -p bin && \
    curl -sLo bin/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/download/v4.1.8/tailwindcss-linux-x64 && \
    chmod +x bin/tailwindcss

COPY Cargo.toml Cargo.lock* ./
COPY src/ src/
COPY style/ style/
COPY public/ public/
COPY index.html Trunk.toml ./
RUN trunk build --release

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
