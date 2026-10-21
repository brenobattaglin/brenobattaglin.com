COMPOSE ?= $(shell if command -v podman >/dev/null 2>&1; then echo "podman compose"; elif docker compose version >/dev/null 2>&1; then echo "docker compose"; else echo "docker-compose"; fi)

TAILWIND_VERSION ?= v4.1.8
TAILWIND_BIN := bin/tailwindcss

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
	@set -e; tmp=$$(mktemp bin/tailwindcss.XXXXXX); \
		trap 'rm -f "$$tmp"' EXIT; \
		curl --retry 3 -fSL -o "$$tmp" $(TAILWIND_URL); \
		chmod +x "$$tmp"; \
		mv "$$tmp" $(TAILWIND_BIN)

.PHONY: setup dev build serve clean test lint format format-check docker-up docker-down docker-build shell machine-start tailwind

tailwind: $(TAILWIND_BIN)

setup:
	rustup component add rustfmt clippy
	rustup target add wasm32-unknown-unknown
	cargo fetch --locked

dev: serve

serve: $(TAILWIND_BIN)
	trunk serve --open

build: $(TAILWIND_BIN)
	trunk build --release --locked

clean:
	trunk clean
	cargo clean
	rm -rf style/output.css bin/

lint:
	cargo clippy --target wasm32-unknown-unknown -- -D warnings

format:
	cargo fmt

format-check:
	cargo fmt -- --check

test:
	cargo test

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
