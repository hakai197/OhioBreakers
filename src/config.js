/**
 * OHBreakers – Social Media Configuration
 * Update the values below to point to your real accounts.
 */

const config = {
  youtube: {
    /**
     * Your YouTube channel ID (starts with UC…).
     * Find it at: youtube.com > your channel > More > About > Share channel > Copy channel ID
     * Example: 'UCaBcDeFgHiJkLmNoPqRsTuV'
     */
    channelId: 'YOUR_CHANNEL_ID',

    /** Full URL to your YouTube channel or custom handle page */
    channelUrl: 'https://www.youtube.com/@YourChannel',
  },

  tiktok: {
    /** Your TikTok username WITHOUT the @ symbol */
    username: 'yourUsername',

    /** Full URL to your TikTok profile */
    profileUrl: 'https://www.tiktok.com/@yourUsername',

    /**
     * Optional: TikTok video IDs to embed as featured clips.
     * Get the ID from a TikTok share link:
     *   https://www.tiktok.com/@user/video/1234567890123456789  ← that number is the ID
     * Leave as empty array [] to show a "Follow Us" call-to-action instead.
     */
    featuredVideoIds: [],
  },

  ebay: {
    /** Full URL to your eBay store */
    storeUrl: 'https://www.ebay.com/str/yourstore',

    /** Display name shown on the page */
    storeName: 'OHBreakers',

    /**
     * Your eBay seller username (not the store name — the account username).
     * Used to build the RSS feed that pulls live listings automatically.
     * Find it at: ebay.com → My eBay → Account → Personal Info → Username
     * Example: 'ohbreakers_cards'
     */
    sellerUsername: 'YOUR_EBAY_USERNAME',
  },
};

export default config;
