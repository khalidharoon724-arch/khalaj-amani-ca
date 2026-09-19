# KHALAJ AMANI CARPETS — Enterprise Website

## Stack
- HTML5 multi-page shell
- TypeScript
- Modern CSS
- Vite build
- Supabase Auth + Postgres + Storage foundation
- Responsive layouts for mobile, tablet and desktop

## Pages
HOME / ABOUT / PRODUCTS / SERVICES / CRAFTSMANSHIP / FAQ / CONTACT / ADMIN

## Supabase setup
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. Create an admin user in Supabase Authentication.
4. Copy that user's UUID into the final SQL comment in `supabase/schema.sql` and run the INSERT into `public.admins`.
5. Put the project URL and anon key in `src/config.ts`.
6. Run `npm install` then `npm run build`.

The public storefront and admin panel both read the same config.

## Admin
Open `/admin.html`. Authentication is required. Site settings and enquiries are database-backed. Product records are seeded in the SQL file and can be expanded through Supabase.

## Important
The supplied brand image was used as visual reference for the local SVG brand asset. Replace `assets/logo.svg` with the exact original logo file when you want pixel-identical brand artwork.

Product photography currently uses clearly replaceable demo image URLs. Replace the three image URLs per product with real front/back/detail photography through Supabase Storage before launch.
