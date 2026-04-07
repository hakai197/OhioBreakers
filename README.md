# Ohio Breakers

Ohio Breakers is a trading card community website built for collectors in Ohio and beyond. The site features pack breaks, a card shop, an eBay storefront, video content, and a community hub.

## Features

- **Shop** — Browse and purchase trading card products (Pokémon, MTG, Sports cards) including booster boxes, elite trainer boxes, and blasters
- **Video Gallery** — Watch pack break videos and card opening content
- **eBay Store** — Direct link to the Ohio Breakers eBay storefront
- **Community** — Comment and interact with other collectors
- **Cart** — Add-to-cart shopping experience with auth support

## Admin Dashboard

An admin panel is available for managing site content.

**Login:** Navigate to `/admin`

- **Username:** `admin`
- **Password:** `ohiobreakers2026`

### Admin Features

| Tab | Description |
|---|---|
| **Videos** | Add, edit, and delete YouTube/TikTok videos. Reset to defaults. |
| **Products** | Add, edit, and delete products. Manage stock status, pricing, images, and categories. Reset to defaults. |
| **Site Settings** | Edit hero title/subtitle, set an announcement banner, and update social/eBay links. |

All admin changes are persisted to `localStorage` and take effect immediately across the site.

## Tech Stack

- React 18 with React Router v6
- Tailwind CSS
- React Icons

## Getting Started

```bash
npm install
npm start
```

Runs on [http://localhost:3000](http://localhost:3000).
