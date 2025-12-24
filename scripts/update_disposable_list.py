import requests
from pathlib import Path

URL_A = "https://raw.githubusercontent.com/disposable/disposable-email-domains/refs/heads/master/domains.txt"
URL_B = "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/refs/heads/main/disposable_email_blocklist.conf"

def load_domains(url):
    resp = requests.get(url, timeout=30)
    resp.raise_for_status()
    return set(
        line.strip().lower()
        for line in resp.text.splitlines()
        if line.strip() and not line.startswith("#")
    )

domains_a = load_domains(URL_A)
domains_b = load_domains(URL_B)

# TRUE superset (everything)
all_domains = sorted(domains_a | domains_b)

# ALWAYS write next to this script
OUT = Path(__file__).parent / "my-disposable-list.txt"
OUT.write_text("\n".join(all_domains) + "\n")

print(f"TOTAL disposable domains written: {len(all_domains)}")
print(f"Wrote file to: {OUT}")
