# Ohio Breakers

Ohio Breakers is a sports card breaking community website built for collectors in Ohio and beyond. The site features pack break videos, an eBay storefront for purchasing cards and sealed product, and a community hub.

## Features

- **eBay Shop** — Browse sports card products (baseball, basketball, football, hockey) with direct links to eBay listings
- **Video Gallery** — Watch pack break videos and card opening content from YouTube and TikTok
- **Community** — Comment and interact with other collectors
- **Admin Dashboard** — Manage videos, products, and site settings

---

## How to Use the Site

### For Visitors

- Browse the **Home** page to see featured videos and products
- Click **Shop** in the nav to view all products and eBay listings
- Click **Videos** to filter and watch break videos
- Click **Community** to join the discussion (sign in required to post)

### User Accounts

Anyone can create an account by clicking the user icon in the navbar. This lets you:
- Post comments in the Community section
- Like videos and products

---

## Admin Guide

### Logging In

1. Navigate to `/admin` in the browser (e.g., `http://localhost:3000/admin`)
2. Enter the credentials:
   - **Username:** `admin`
   - **Password:** `ohiobreakers2026`
3. You'll be taken to the Admin Dashboard

### Managing Videos

From the **Videos** tab you can:
- **Add a video** — Click "Add Video" and fill in the title, platform (YouTube or TikTok), embed ID, uploader name, date, and category
- **Edit a video** — Click the edit icon on any video to update its details
- **Delete a video** — Click the trash icon to remove a video
- **Reset to defaults** — Restore the original demo videos

> **Finding a YouTube embed ID:** In a YouTube URL like `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the embed ID is `dQw4w9WgXcQ` (the value after `v=`).
>
> **Finding a TikTok embed ID:** In a TikTok URL like `https://www.tiktok.com/@user/video/7345678901234567890`, the embed ID is `7345678901234567890` (the number at the end).

### Managing Products

From the **Products** tab you can:
- **Add a product** — Click "Add Product" and fill in the name, category, type (Hobby Box, Blaster, etc.), price, image URL, description, set name, and stock status
- **Edit a product** — Click the edit icon to update any details
- **Delete a product** — Click the trash icon to remove it
- **Reset to defaults** — Restore the original demo products

### Site Settings

From the **Site Settings** tab you can:
- **Hero Title & Subtitle** — Update the text shown on the home page
- **Announcement Banner** — Set a message that appears at the top of every page (leave blank to hide)
- **Social Links** — Update your eBay store URL, YouTube channel, TikTok, and Instagram links

### Data Persistence

All changes are saved to the browser's `localStorage` and take effect immediately. Data persists across page refreshes but is per-browser (changes on one device won't appear on another).

| localStorage Key | Content |
|---|---|
| `ohio_breakers_videos` | All video data |
| `ohio_breakers_products` | All product data |
| `ohio_breakers_site_settings` | Hero text, announcement, social links |

---

## Tech Stack

- React 18 with React Router v6
- Tailwind CSS
- Spring Boot backend (JWT authentication)
- React Icons

## Getting Started

```bash
npm install
npm start
```

Runs on [http://localhost:3000](http://localhost:3000).

### Backend (optional — needed for admin login)

```bash
cd backend/ohiobreakers
./mvnw spring-boot:run
```

Requires a MySQL database. See `backend/ohiobreakers/src/main/resources/application.properties` for connection settings.
