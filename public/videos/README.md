# Platform video

The Platform page player expects the **real** Prestige Growth Pathways
demonstration video at:

```
public/videos/platform-overview.mp4
```

This file is **not** included in the repository and must be supplied. Add the
actual MP4 here (do not commit a placeholder or empty file). Once it is present,
Vite serves it under the site's base path and the player on the Platform page
plays it — no code change needed.

## Recommended encoding (for reliable playback everywhere)
- Container: **MP4**
- Video codec: **H.264** (High/Main profile)
- Audio codec: **AAC**
- Resolution: 1920×1080 or 1280×720, 16:9
- Web-optimised, with the moov atom at the front (`+faststart`)

Example conversion (if your source is not H.264/AAC MP4):

```
ffmpeg -i source.mov -c:v libx264 -profile:v high -pix_fmt yuv420p \
       -c:a aac -b:a 128k -movflags +faststart platform-overview.mp4
```

The poster shown before playback is `public/images/platform-video-thumbnail.webp`.
