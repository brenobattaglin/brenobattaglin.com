# Container compose command (prefers podman compose if podman is installed, falls back to docker compose)
COMPOSE ?= $(shell if command -v podman >/dev/null 2>&1; then echo "podman compose"; elif docker compose version >/dev/null 2>&1; then echo "docker compose"; else echo "docker-compose"; fi)

.PHONY: dev up down build test test-watch lint lint-fix format format-check format\:check shell clean machine-start

machine-start:
	@if command -v podman >/dev/null 2>&1 && [ "$$(uname -s)" = "Darwin" ]; then \
		if ! podman machine info >/dev/null 2>&1; then \
			echo "Starting Podman machine..."; \
			podman machine start; \
		fi \
	fi

dev: up

up: machine-start
	$(COMPOSE) up

down:
	$(COMPOSE) down

build:
	$(COMPOSE) build

test:
	$(COMPOSE) exec app npm run test:run

test-watch:
	$(COMPOSE) exec app npm test

lint:
	$(COMPOSE) exec app npm run lint

lint-fix:
	$(COMPOSE) exec app npm run lint:fix

format:
	$(COMPOSE) exec app npm run format

format-check:
	$(COMPOSE) exec app npm run format:check

format\:check: format-check

shell:
	$(COMPOSE) exec app sh

clean:
	$(COMPOSE) down -v

