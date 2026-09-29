#!/usr/bin/env python3
"""Render SVG posters to PNG 1080x1920 using snap chromium headless.

Snap-confined chromium can only read $HOME (/home/ubuntu), so the wrapper
HTML and any referenced assets are staged under /home/ubuntu/.hermes-svg-render/.
"""
import subprocess, sys, os, shutil

WORKDIR = "/home/ubuntu/svg-render-work"
os.makedirs(WORKDIR, exist_ok=True)

svg_path = os.path.abspath(sys.argv[1])
out_png = os.path.abspath(sys.argv[2])

with open(svg_path) as f:
    svg = f.read()

# Strip XML/DOCTYPE declarations for inline embedding
if svg.lstrip().startswith("<?xml"):
    svg = svg.split("?>", 1)[1]
if "<!DOCTYPE" in svg:
    svg = svg.split(">", 1)[1]

# Cover-fit: fill 1080x1920. The 4:5 posters (1080x1350) get scaled to fill
# width, so they center and crop/extend vertically; 9:16 ones pass through.
page = f"""<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  html,body {{ width:1080px; height:1920px; background:#000; overflow:hidden; }}
  .wrap {{ width:1080px; height:1920px; display:flex;
           align-items:center; justify-content:center; }}
  .wrap > svg {{ display:block; width:1080px; height:1920px; }}
</style></head>
<body><div class="wrap">{svg}</div></body></html>"""

html_path = os.path.join(WORKDIR, "_wrap.html")
with open(html_path, "w") as f:
    f.write(page)

cmd = [
    "/snap/bin/chromium", "--headless=new", "--no-sandbox", "--disable-gpu",
    "--hide-scrollbars", "--force-device-scale-factor=1",
    "--user-data-dir=" + os.path.join(WORKDIR, "profile"),
    "--window-size=1080,1920",
    f"--screenshot={out_png}",
    f"file://{html_path}",
]
r = subprocess.run(cmd, capture_output=True, text=True)
if r.returncode != 0:
    sys.stderr.write(r.stderr[-800:])
sys.exit(r.returncode)
