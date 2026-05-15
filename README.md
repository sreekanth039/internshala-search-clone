# Internshala Search Page Clone

A React/Next.js clone of the [Internshala internship search page](https://internshala.com/internships/), built as an assignment for the SDE (Web) Internship.

## Features

- Fetches live internship data from the Internshala API
- Filter by **Profile**, **Location**, **Duration**, and **Minimum Stipend**
- All filtering is done on the frontend (no additional API calls)
- Responsive layout with a sticky header
- Clean internship cards with company logo, location, stipend, duration, start date
- "Be an early applicant" badge
- Loading and error states

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Next.js API Routes** (server-side proxy for the Internshala API)

## Project Structure

```
app/
  api/internships/route.js   # Server-side proxy for Internshala API
  globals.css
  layout.jsx
  page.jsx                   # Main page with filter state
components/
  Header.jsx                 # Sticky nav header
  FilterSidebar.jsx          # Profile, Location, Duration, Stipend filters
  InternshipCard.jsx         # Individual internship card
next.config.mjs
tailwind.config.js
postcss.config.js
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Design Decisions

- Used **Next.js API routes** to proxy the Internshala API server-side, avoiding CORS issues in the browser.
- All filter options (profiles, locations, durations) are derived dynamically from the fetched data using `useMemo`.
- Filtering logic runs in `useMemo` for efficiency, only recalculating when data or filters change.
- Components are kept small and focused: `FilterSidebar` only handles UI, `page.jsx` owns all state.
