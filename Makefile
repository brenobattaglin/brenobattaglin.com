# Container compose command (prefers podman compose if podman is installed, falls back to docker compose)
COMPOSE ?= $(shell if command -v podman >/dev/null 2>&1; then echo "podman compose"; elif docker compose version >/dev/null 2>&1; then echo "docker compose"; else echo "docker-compose"; fi)

TAILWIND_VERSION ?= v4.1.8
TAILWIND_BIN := bin/tailwindcss

# Determine platform for standalone Tailwind binary
OS := $(shell uname -s | tr '[:upper:]' '[:lower:]')
ARCH := $(shell uname -m)
ifeq ($(ARCH),x86_64)
    ARCH_NAME := x64
else ifeq ($(ARCH),arm64)
    ARCH_NAME := arm64
else ifeq ($(ARCH),aarch64)
    ARCH_NAME := arm64
endif

ifeq ($(OS),darwin)
    TAILWIND_URL := https://github.com/tailwindlabs/tailwindcss/releases/download/$(TAILWIND_VERSION)/tailwindcss-macos-$(ARCH_NAME)
else
    TAILWIND_URL := https://github.com/tailwindlabs/tailwindcss/releases/download/$(TAILWIND_VERSION)/tailwindcss-linux-$(ARCH_NAME)
endif

$(TAILWIND_BIN):
	@mkdir -p bin
	@echo "Downloading standalone Tailwind CSS $(TAILWIND_VERSION)..."
	@curl -sLo $(TAILWIND_BIN) $(TAILWIND_URL)
	@chmod +x $(TAILWIND_BIN)

.PHONY: dev build serve clean test lint format docker-up docker-down docker-build shell machine-start tailwind

tailwind: $(TAILWIND_BIN)

# Development (local)
dev: serve

serve: $(TAILWIND_BIN)
	trunk serve --open

build: $(TAILWIND_BIN)
	trunk build --release

clean:
	trunk clean
	cargo clean
	rm -rf style/output.css bin/

# Linting and formatting
lint:
	cargo clippy --target wasm32-unknown-unknown -- -D warnings

format:
	cargo fmt

format-check:
	cargo fmt -- --check

# Testing
test:
	cargo test

# Docker
machine-start:
	@if command -v podman >/dev/null 2>&1 && [ "$$(uname -s)" = "Darwin" ]; then \
		if ! podman machine info >/dev/null 2>&1; then \
			echo "Starting Podman machine..."; \
			podman machine start; \
		fi \
	fi

docker-up: machine-start
	$(COMPOSE) up

docker-down:
	$(COMPOSE) down

docker-build:
	$(COMPOSE) build

shell:
	$(COMPOSE) exec app sh
