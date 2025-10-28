#!/bin/bash

echo "==================================="
echo "DNS Propagation Checker"
echo "Domain: sayalideshpande.co.in"
echo "==================================="
echo ""

echo "Current Nameservers:"
dig NS sayalideshpande.co.in +short

echo ""
echo "Expected Netlify Nameservers:"
echo "  dns1.p02.nsone.net"
echo "  dns2.p02.nsone.net"
echo "  dns3.p02.nsone.net"
echo "  dns4.p02.nsone.net"

echo ""
echo "Domain Resolution:"
dig sayalideshpande.co.in +short

echo ""
echo "==================================="
echo "Run this script every 10-15 minutes"
echo "to check propagation status"
echo "==================================="
