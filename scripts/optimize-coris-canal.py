"""Create responsive WebP variants for the Coris and Canal+ case studies.

Originals are read from the source portfolio folder and never modified.
Run from the portfolio-site directory:
    python scripts/optimize-coris-canal.py
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
        "Coris Bank - Burkina & Tchad/Print/Branding Camion.jpg",
        "coris/ceremonie",
        [480, 800, 1200, 1800, 2400],
    ),
    (
        "Coris Bank - Burkina & Tchad/Print/512691169_1332024768278766_2074336431579134314_n.jpg",
        "coris/soiree",
        [480, 800, 1200, 1800, 2048],
    ),
    (
        "Coris Bank - Burkina & Tchad/Print/Fond de scène2 coris.jpg",
        "coris/fond-scene",
        [480, 800, 1200, 1800, 2400],
    ),
    (
        "Coris Bank - Burkina & Tchad/Print/CHEVALET-CO.png",
        "coris/chevalet-accueil",
        [480, 800, 1200, 1800, 2500],
    ),
    (
        "Coris Bank - Burkina & Tchad/Print/Chevalet-Ceremonie-012.png",
        "coris/chevalet-ceremonie",
        [480, 800, 1200, 1800, 2500],
    ),
    (
        "Coris Bank - Burkina & Tchad/visuel social/2-46.png",
        "coris/social-epargne",
        [480, 800, 1181],
    ),
    (
        "Coris Bank - Burkina & Tchad/visuel social/conférence de presse .jpg",
        "coris/social-conference",
        [480, 800, 1200, 1800, 2400],
    ),
    (
        "Coris Bank - Burkina & Tchad/visuel social/7-6.png",
        "coris/social-digitale",
        [480, 800, 1181],
    ),
    (
        "Canal Plus - Tchad/CANAL+ CHEVALET DE BIENVENUE.jpg",
        "canal/chevalet-1",
        [480, 800, 1200, 1800, 2500],
    ),
    (
        "Canal Plus - Tchad/CANAL+ CHEVALET DE BIENVENUE 2.jpg",
        "canal/chevalet-2",
        [480, 800, 1200, 1800, 2500],
    ),
    (
        "Canal Plus - Tchad/CANAL+ CHEVALET DE BIENVENUE 3.jpg",
        "canal/chevalet-3",
        [480, 800, 1200, 1800, 2500],
    ),
    (
        "Canal Plus - Tchad/Cube Canal+.jpg",
        "canal/cube",
        [480, 800, 1200, 1800, 2500],
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

    manifest_path = SITE / "scripts" / "coris-canal-manifest.json"
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"Wrote {manifest_path}")


if __name__ == "__main__":
    main()
