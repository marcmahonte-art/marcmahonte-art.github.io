"""Create responsive WebP variants for the additional case studies.

Originals are read from the source portfolio folder and never modified.
Run from the portfolio-site directory:
    python scripts/optimize-additional.py
"""

from __future__ import annotations

import json
import unicodedata
from pathlib import Path

from PIL import Image

SITE = Path(__file__).resolve().parent.parent
SOURCE = SITE.parent
OUT = SITE / "public" / "images"

ITEMS = [
    (
        "GreenMax Capital - Cameroun/presentation/Greenmax Corporate Profile April 2026-CJA-Alex DE CORRECTION V3-1.png",
        "greenmax/couverture",
        [480, 800, 1200, 1800, 2400],
    ),
    (
        "OEACP - Belgique/A-15.png",
        "oeacp/carte-voeux",
        [480, 800, 1200, 2000],
    ),
    (
        "Azalai Hotel - Burkina Faso/visuel social media/AZALAÎ03.jpg",
        "azalai/experience",
        [480, 800, 1080],
    ),
    (
        "Azalai Hotel - Burkina Faso/visuel social media/az3-1.png",
        "azalai/mobile",
        [480, 800, 1200, 2000],
    ),
    (
        "Azalai Hotel - Burkina Faso/visuel social media/az4.png",
        "azalai/architecture",
        [480, 800, 1200, 2000],
    ),
    (
        "Azalai Hotel - Burkina Faso/visuel social media/az10.png",
        "azalai/evenement",
        [480, 800, 1080],
    ),
    (
        "Laborex - Burkina Faso/2E-CARTE-DE-VOEUX-DIGITAL.jpg",
        "laborex/voeux-digital",
        [480, 800, 1080],
    ),
    (
        "Laborex - Burkina Faso/2E-CARTE-DE-VOEUX-RECTO-.jpg",
        "laborex/voeux-print",
        [480, 800, 1200, 1800, 2160],
    ),
    (
        "Laborex - Burkina Faso/goodies/2-2.jpg",
        "laborex/roll-up",
        [480, 800, 1200, 1800, 2400],
    ),
    (
        "Laborex - Burkina Faso/goodies/Bloc-n mpk03 Laborex2.jpg",
        "laborex/carnet",
        [480, 800, 1200, 1800, 2400],
    ),
    (
        "Youth Konnect-Madagascar/viseul social/f-6.png",
        "youth/campagne",
        [480, 800, 1080],
    ),
    (
        "Youth Konnect-Madagascar/Presentation/Youth Connekt-4.png",
        "youth/contexte",
        [480, 800, 1200, 1800, 2400],
    ),
    (
        "Youth Konnect-Madagascar/Presentation/Youth Connekt-11.png",
        "youth/accompagnement",
        [480, 800, 1200, 1800, 2400],
    ),
    (
        "Youth Konnect-Madagascar/viseul social/b-28.png",
        "youth/reseau-vert",
        [480, 800, 1080],
    ),
    (
        "Youth Konnect-Madagascar/viseul social/c-23.png",
        "youth/reseau-bleu",
        [480, 800, 1080],
    ),
    (
        "Youth Konnect-Madagascar/viseul social/e-9.png",
        "youth/portrait-orange",
        [480, 800, 1080],
    ),
    (
        "Youth Konnect-Madagascar/viseul social/g-1.png",
        "youth/portrait",
        [480, 800, 1080],
    ),
]


def resolve(relative: str) -> Path:
    direct = SOURCE / relative
    if direct.exists():
        return direct

    parent = direct.parent
    expected = unicodedata.normalize("NFC", direct.name)
    for candidate in parent.iterdir():
        if unicodedata.normalize("NFC", candidate.name) == expected:
            return candidate

    raise FileNotFoundError(direct)


def main() -> None:
    manifest = []

    for relative, base, widths in ITEMS:
        source = resolve(relative)
        image = Image.open(source)
        if image.mode != "RGB":
            image = image.convert("RGB")

        target_dir = OUT / Path(base).parent
        target_dir.mkdir(parents=True, exist_ok=True)

        generated = []
        for width in widths:
            if width > image.width:
                continue
            height = round(image.height * width / image.width)
            resized = image.resize((width, height), Image.LANCZOS)
            target = OUT / f"{base}-{width}.webp"
            resized.save(target, "WEBP", quality=82, method=6)
            generated.append(width)

        manifest.append(
            {
                "base": base,
                "source": relative,
                "width": image.width,
                "height": image.height,
                "widths": generated,
            }
        )
        print(f"{base}: {image.width}x{image.height} -> {generated}")

    manifest_path = SITE / "scripts" / "additional-manifest.json"
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"Wrote {manifest_path}")


if __name__ == "__main__":
    main()
