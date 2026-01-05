# Favicon Setup Guide - PUBLOX

## 📋 Overview

This guide explains how to generate and install favicon files for the PUBLOX website using the black "P" logo.

## 🎯 Required Files

Place all files directly in `/public`:

1. **favicon.ico** - Multi-size ICO file (16x16, 32x32, 48x48)
2. **favicon-32x32.png** - 32x32 PNG
3. **favicon-48x48.png** - 48x48 PNG
4. **apple-touch-icon.png** - 180x180 PNG (for iOS)
5. **android-chrome-512x512.png** - 512x512 PNG (for Android)

## 🛠️ How to Generate Favicons

### Option 1: Online Tools (Recommended)

1. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - Upload your PUBLOX logo (PNG/SVG with black "P" on transparent background)
   - Configure:
     - iOS: 180x180
     - Android: 512x512
     - Windows: 32x32, 48x48
     - Favicon: 16x16, 32x32, 48x48
   - Download the generated package
   - Extract files to `/public`

2. **Favicon.io** (https://favicon.io/)
   - Upload your logo
   - Generate all sizes
   - Download and extract to `/public`

### Option 2: Image Editing Software

If you have the original logo file:

1. **Open in image editor** (Photoshop, GIMP, Figma, etc.)
2. **Ensure:**
   - Logo is black (#000000 or #1A1A1A)
   - Background is transparent
   - Logo is centered
3. **Export each size:**
   - 16x16 → favicon-16x16.png
   - 32x32 → favicon-32x32.png
   - 48x48 → favicon-48x48.png
   - 180x180 → apple-touch-icon.png
   - 512x512 → android-chrome-512x512.png
4. **Create favicon.ico:**
   - Use online converter (https://convertio.co/png-ico/) or
   - Use ImageMagick: `convert favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico`

### Option 3: Command Line (ImageMagick)

If you have ImageMagick installed:

```bash
# Create individual PNGs from source logo
convert logo.png -resize 16x16 favicon-16x16.png
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 48x48 favicon-48x48.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 512x512 android-chrome-512x512.png

# Create multi-size ICO
convert favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico
```

## ✅ File Requirements

### favicon.ico
- **Format:** ICO (multi-size)
- **Sizes:** 16x16, 32x32, 48x48
- **Background:** Transparent
- **Color:** Black logo
- **Location:** `/public/favicon.ico`

### favicon-32x32.png
- **Format:** PNG
- **Size:** 32x32 pixels
- **Background:** Transparent
- **Color:** Black logo
- **Location:** `/public/favicon-32x32.png`

### favicon-48x48.png
- **Format:** PNG
- **Size:** 48x48 pixels
- **Background:** Transparent
- **Color:** Black logo
- **Location:** `/public/favicon-48x48.png`

### apple-touch-icon.png
- **Format:** PNG
- **Size:** 180x180 pixels
- **Background:** Transparent (or white if needed for iOS)
- **Color:** Black logo
- **Location:** `/public/apple-touch-icon.png`

### android-chrome-512x512.png
- **Format:** PNG
- **Size:** 512x512 pixels
- **Background:** Transparent
- **Color:** Black logo
- **Location:** `/public/android-chrome-512x512.png`

## 🔧 Configuration

The favicon system is already configured in `lib/metadata.ts`. The icons are automatically referenced in the HTML metadata.

**No additional configuration needed** - just place the files in `/public` and they will be automatically detected by Next.js.

## 🧪 Testing

After adding the files:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the dev server:**
   ```bash
   npm run dev
   ```

3. **Check the browser tab:**
   - Open `http://localhost:3000`
   - The PUBLOX "P" favicon should appear in the browser tab

4. **Verify in HTML:**
   - View page source
   - Look for `<link rel="icon">` tags in `<head>`

## 📝 Notes

- Next.js automatically detects `favicon.ico` in `/public`
- The metadata configuration in `lib/metadata.ts` adds additional icon references
- All icons should use the black "P" logo on transparent background
- Ensure icons are optimized (small file sizes)
- Test on different devices/browsers for best results

## ✅ Checklist

- [ ] favicon.ico created and placed in `/public`
- [ ] favicon-32x32.png created and placed in `/public`
- [ ] favicon-48x48.png created and placed in `/public`
- [ ] apple-touch-icon.png created and placed in `/public`
- [ ] android-chrome-512x512.png created and placed in `/public`
- [ ] All icons show black "P" logo clearly
- [ ] All icons have transparent background
- [ ] Build passes without errors
- [ ] Favicon appears in browser tab

---

**Once all files are in place, the favicon system will work automatically!**

