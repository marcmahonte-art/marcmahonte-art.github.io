"""Generate the Open Graph image from real project covers.

Usage (from the portfolio-site directory):
    python scripts/generate-og.py

Requires Pillow and TTF versions of the fonts. The repository ships only
WOFF2 files; this script expects converted TTFs in C:/tmp/audit/fonts or
accepts a FONTS_DIR environment variable.
"""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og" / "jean-marc-mahonte.jpg"
FONTS = Path(os.environ.get("FONTS_DIR", "C:/tmp/audit/fonts"))

INK = "#122333"
PAPER = "#F7F6F2"
SLATE = "#536273"
LINE = "#DDD9CE"
TEAL = "#168C88"
OCHRE = "#D98A42"

W, H = 1200, 630


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size)


def cover(relative: str, height: int) -> Image.Image:
    source = ROOT / "public" / "images" / relative
    image = Image.open(source).convert("RGB")
    width = round(image.width * height / image.height)
    return image.resize((width, height), Image.LANCZOS)


def paste_with_shadow(
    base: Image.Image, image: Image.Image, xy: tuple[int, int]
) -> None:
    x, y = xy
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rectangle(
        (x + 6, y + 18, x + image.width + 6, y + image.height + 18),
        fill=(0, 0, 0, 110),
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(16))
    base.alpha_composite(shadow)
    base.paste(image, (x, y))


def main() -> None:
    base = Image.new("RGBA", (W, H), PAPER)
    draw = ImageDraw.Draw(base)

    # Right-hand navy panel
    panel_x = 690
    draw.rectangle((panel_x, 0, W, H), fill=INK)
    draw.rectangle((panel_x, 0, panel_x + 1, H), fill=LINE)

    # Top label
    draw.rectangle((64, 66, 74, 76), fill=OCHRE)
    draw.text(
        (88, 61),
        "PORTFOLIO — JEAN MARC MAHONTÉ",
        font=font("PlexMono-Medium.ttf", 13),
        fill=SLATE,
    )

    # Headline
    title_font = font("Archivo-SemiBold.ttf", 62)
    lines = [
        ("Donner forme", INK),
        ("aux idées.", INK),
        ("Rendre l’impact", INK),
        ("visible.", TEAL),
    ]
    y = 140
    for text, color in lines:
        draw.text((64, y), text, font=title_font, fill=color)
        y += 68

    # Rule and baseline information
    draw.line((64, 470, 360, 470), fill=LINE, width=1)
    draw.text(
        (64, 492),
        "Graphiste senior & directeur créatif indépendant",
        font=font("Inter-Regular.ttf", 21),
        fill=INK,
    )
    draw.text(
        (64, 527),
        "Édition institutionnelle · Identité · Campagnes",
        font=font("Inter-Regular.ttf", 16),
        fill=SLATE,
    )
    draw.text(
        (64, 562),
        "OUAGADOUGOU, BURKINA FASO",
        font=font("PlexMono-Regular.ttf", 12),
        fill=SLATE,
    )

    # Real project covers
    mwinda = cover("fonds-mwinda/newsletter-1800.webp", 416)
    cilss = cover("cilss/newsletter-couverture-540.webp", 300)

    paste_with_shadow(base, cilss, (940, 152))
    paste_with_shadow(base, mwinda, (730, 96))

    # Caption inside the panel
    draw.rectangle((730, 545, 738, 553), fill=OCHRE)
    draw.text(
        (750, 538),
        "SÉLECTION 2026",
        font=font("PlexMono-Regular.ttf", 11),
        fill="#9BA7B4",
    )
    draw.text(
        (730, 564),
        "Fonds Mwinda — newsletter · CILSS — bulletin PRAPS",
        font=font("Inter-Regular.ttf", 14),
        fill=PAPER,
    )
    draw.text(
        (730, 589),
        "Visuels réels, reproduits sans modification.",
        font=font("Inter-Regular.ttf", 12),
        fill="#7F8D9B",
    )

    # Bottom-left signature
    draw.text(
        (64, 594),
        "MARCHAHONTE@GMAIL.COM",
        font=font("PlexMono-Regular.ttf", 11),
        fill="#8A919B",
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    base.convert("RGB").save(OUT, "JPEG", quality=90, optimize=True)
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
