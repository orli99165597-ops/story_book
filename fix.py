import re

filename = r"c:\Users\samsung\Downloads\test3\index.html"
with open(filename, "r", encoding="utf-8") as f:
    content = f.read()

# Replace <span class="tts-sent"> with <span class="sentence" data-sentence="N">
i = 1
def replacer(match):
    global i
    res = f'<span class="sentence" data-sentence="{i}">'
    i += 1
    return res

new_content = re.sub(r'<span class="tts-sent">', replacer, content)

with open(filename, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Replaced {i-1} occurrences.")
