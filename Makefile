.DEFAULT_GOAL := tailwind

COMPOSE ?= $(shell \
	if command -v podman >/dev/null 2>&1; then \
		echo "podman compose"; \
	elif docker compose version >/dev/null 2>&1; then \
		echo "docker compose"; \
	else \
		echo "docker-compose"; \
	fi)

TAILWIND_VERSION ?= v4.1.8
TAILWIND_BIN := bin/tailwindcss
TAILWIND_RELEASE_URL := https://github.com/tailwindlabs/tailwindcss/releases/download/$(TAILWIND_VERSION)

OS := $(shell uname -s)
ARCH := $(shell uname -m)

ifeq ($(ARCH),x86_64)
TAILWIND_ARCH := x64
else ifneq ($(filter arm64 aarch64,$(ARCH)),)
TAILWIND_ARCH := arm64
endif

ifeq ($(OS),Darwin)
TAILWIND_OS := macos
else
TAILWIND_OS := linux
endif

TAILWIND_URL := $(TAILWIND_RELEASE_URL)/tailwindcss-$(TAILWIND_OS)-$(TAILWIND_ARCH)

.PHONY: setup dev serve build clean
.PHONY: lint format format-check test
.PHONY: docker-up docker-down docker-build shell machine-start
.PHONY: tailwind

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

docker-up: machine-start
	$(COMPOSE) up

docker-down:
	$(COMPOSE) down

docker-build:
	$(COMPOSE) build

shell:
	$(COMPOSE) exec app sh

machine-start:
	@if command -v podman >/dev/null 2>&1 && [ "$(OS)" = "Darwin" ]; then \
		if ! podman machine info >/dev/null 2>&1; then \
			echo "Starting Podman machine..."; \
			podman machine start; \
		fi \
	fi

tailwind: $(TAILWIND_BIN)

$(TAILWIND_BIN):
	@mkdir -p bin
	@echo "Downloading standalone Tailwind CSS $(TAILWIND_VERSION)..."
	@set -e; \
		tmp=$$(mktemp bin/tailwindcss.XXXXXX); \
		trap 'rm -f "$$tmp"' EXIT; \
		curl --retry 3 -fSL -o "$$tmp" "$(TAILWIND_URL)"; \
		chmod +x "$$tmp"; \
		mv "$$tmp" "$(TAILWIND_BIN)"
