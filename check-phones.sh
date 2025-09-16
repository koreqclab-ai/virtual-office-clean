#!/bin/bash

# Phone Number Verification Script
# Checks for any remaining phone numbers after removal process

echo "🔍 Scanning for remaining phone numbers..."
echo "=================================================="

# Check for Singapore phone patterns
echo "📞 Checking for Singapore phone patterns:"
grep -r --include="*.jsx" --include="*.js" --include="*.ts" --include="*.tsx" --include="*.html" \
  -n "\+65[-\s]?\d{4}[-\s]?\d{4}" src/ index.html 2>/dev/null || echo "  ✅ No Singapore phone patterns found"

# Check for tel: links
echo ""
echo "📱 Checking for tel: links:"
grep -r --include="*.jsx" --include="*.js" --include="*.ts" --include="*.tsx" --include="*.html" \
  -n "tel:\+65" src/ index.html 2>/dev/null || echo "  ✅ No tel: links found"

# Check for specific phone number
echo ""
echo "🎯 Checking for specific number 8183-7101:"
grep -r --include="*.jsx" --include="*.js" --include="*.ts" --include="*.tsx" --include="*.html" \
  -n "8183[-\s]?7101" src/ index.html 2>/dev/null || echo "  ✅ No 8183-7101 found"

# Check for telephone in JSON-LD
echo ""
echo "📋 Checking for 'telephone' in structured data:"
grep -r --include="*.jsx" --include="*.js" --include="*.ts" --include="*.tsx" --include="*.html" \
  -n '"telephone"' src/ index.html 2>/dev/null || echo "  ✅ No telephone fields found"

echo ""
echo "=================================================="
echo "✨ Phone number scan complete!"