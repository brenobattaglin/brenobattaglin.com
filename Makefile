.PHONY: dev up down build test lint shell

dev: up

up:
	docker compose up

down:
	docker compose down

build:
	docker compose build

test:
	docker compose exec app npm test

lint:
	docker compose exec app npm run lint

shell:
	docker compose exec app sh
