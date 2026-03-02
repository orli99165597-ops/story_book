import re
import json

filename = r"c:\Users\samsung\Downloads\test3\index.html"
with open(filename, "r", encoding="utf-8") as f:
    html = f.read()

sentences = re.findall(r'<span class="sentence"[^>]*>(.*?)</span>', html)
print(json.dumps(sentences, ensure_ascii=False, indent=2))
