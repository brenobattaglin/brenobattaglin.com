#!/usr/bin/env bash
set -euo pipefail

# Resolve paths from the repository, even when invoked from another directory.
cd "$(dirname "$0")/.."
export PATH="$HOME/.cargo/bin:$PATH"

if ! command -v rustup >/dev/null 2>&1; then
  curl --proto '=https' --tlsv1.2 --retry 3 -fsSL https://sh.rustup.rs | sh -s -- -y --profile minimal --default-toolchain none
fi

# rustup uses the pinned compiler and target in rust-toolchain.toml.
rustup toolchain install --no-self-update
rustup target add wasm32-unknown-unknown

# Trunk 0.21 expects NO_COLOR to be "true" or "false", not "1".
if [[ "${NO_COLOR:-}" == 1 ]]; then
  export NO_COLOR=true
fi

trunk_version=0.21.14
if [[ "$(trunk --version 2>/dev/null || true)" != "trunk $trunk_version" ]]; then
  case "$(uname -s)-$(uname -m)" in
    Linux-x86_64) trunk_target=x86_64-unknown-linux-musl ;;
    Linux-aarch64) trunk_target=aarch64-unknown-linux-musl ;;
    Darwin-arm64) trunk_target=aarch64-apple-darwin ;;
    Darwin-x86_64) trunk_target=x86_64-apple-darwin ;;
    *) echo "Unsupported build platform: $(uname -s)-$(uname -m)" >&2; exit 1 ;;
  esac
  mkdir -p bin
  if [[ "$(./bin/trunk --version 2>/dev/null || true)" != "trunk $trunk_version" ]]; then
    trunk_tmp=$(mktemp -d)
    trap 'rm -rf "$trunk_tmp"' EXIT
    curl --retry 3 -fsSL "https://github.com/trunk-rs/trunk/releases/download/v${trunk_version}/trunk-${trunk_target}.tar.gz" -o "$trunk_tmp/trunk.tar.gz"
    tar xzf "$trunk_tmp/trunk.tar.gz" -C "$trunk_tmp" trunk
    chmod +x "$trunk_tmp/trunk"
    mv "$trunk_tmp/trunk" bin/trunk
  fi
  PATH="$PWD/bin:$PATH"
fi

export TRUNK_SKIP_VERSION_CHECK=true
make build
