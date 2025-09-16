#!/bin/bash
# 🚨 Phone Number Smoke Test Checker
# Blocks commit/deploy if real phone numbers are detected

echo "🔎 Scanning source and dist for phone numbers..."

# Patterns to catch
PATTERNS=(
  "+65[[:space:]-]*[0-9]\{4\}[[:space:]-]*[0-9]\{4\}"
  "tel:[0-9]"
)

# Files to scan
FILES=$(grep -RIl . --include \*.{js,jsx,ts,tsx,html,css} --exclude-dir=node_modules --exclude-dir=.git)

FOUND=0

for pattern in "${PATTERNS[@]}"; do
  if grep -nE "$pattern" $FILES > /dev/null; then
    echo "❌ Found possible phone number pattern: $pattern"
    grep -nE "$pattern" $FILES
    FOUND=1
  fi
done

if [ $FOUND -eq 1 ]; then
  echo "🚨 ERROR: Real phone number(s) detected! Clean before commit/deploy."
  exit 1
else
  echo "✅ Safe: No real phone numbers found. Ready to push/deploy."
fi