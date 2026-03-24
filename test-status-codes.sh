#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://infiniterankers.io}"

URLS=(
  "$BASE_URL/"
  "$BASE_URL/about"
  "$BASE_URL/ai-calling-agent"
  "$BASE_URL/1"
  "$BASE_URL/not-a-page"
  "$BASE_URL/fake-service"
)

for url in "${URLS[@]}"; do
  status="$(curl -s -o /dev/null -w "%{http_code}" "$url")"
  echo "$status - $url"
done
