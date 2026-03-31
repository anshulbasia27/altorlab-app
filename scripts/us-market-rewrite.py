from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent / "src"
TARGET_SUFFIXES = {".ts", ".tsx"}

REPLACEMENTS: list[tuple[re.Pattern[str], str]] = [
    (re.compile(r"₹50,000\+"), "$5,000+"),
    (re.compile(r"₹50,000"), "$5,000"),
    (re.compile(r"₹799"), "$12"),
    (re.compile(r"₹749"), "$9"),
    (re.compile(r"₹"), "$"),
    (re.compile(r"\bINR\b"), "USD"),
    (re.compile(r"\bIndian apartments\b"), "American homes"),
    (re.compile(r"\bIndian homes\b"), "American homes"),
    (re.compile(r"\bIndian home\b"), "American home"),
    (re.compile(r"\bIndian\b"), "American"),
    (re.compile(r"\bIndia\b"), "the US"),
    (re.compile(r"\b2BHK\b"), "studio and 1-bedroom"),
    (re.compile(r"\b1BHK\b"), "studio"),
    (re.compile(r"\b3BHK\b"), "2-3 bedroom"),
    (re.compile(r"\bMumbai\b"), "New York"),
    (re.compile(r"\bDelhi\b"), "Los Angeles"),
    (re.compile(r"\bBangalore\b"), "San Francisco"),
    (re.compile(r"\bChennai\b"), "Chicago"),
    (re.compile(r"\bHyderabad\b"), "Austin"),
    (re.compile(r"\bKolkata\b"), "Seattle"),
    (re.compile(r"\bPune\b"), "Denver"),
    (re.compile(r"(?<![\w.])hindi\b(?!\s*:)"), "english"),
    (re.compile(r"(?<![\w.])Hindi\b(?!\s*:)"), "English"),
    (re.compile(r"\bMeesho\b"), "Etsy"),
    (re.compile(r"\bFlipkart\b"), "Amazon"),
]


def rewrite_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    updated = original

    for pattern, replacement in REPLACEMENTS:
        updated = pattern.sub(replacement, updated)

    if updated == original:
        return False

    path.write_text(updated, encoding="utf-8")
    return True


def main() -> None:
    changed_files: list[str] = []

    for path in sorted(ROOT.rglob("*")):
        if path.suffix not in TARGET_SUFFIXES or not path.is_file():
            continue

        if rewrite_file(path):
            changed_files.append(str(path.relative_to(ROOT.parent)))

    print(f"Updated {len(changed_files)} file(s).")
    for file_name in changed_files:
        print(file_name)


if __name__ == "__main__":
    main()
