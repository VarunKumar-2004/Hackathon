---
description: Optimize Next.js routing and component architecture
---
1. Update `src/app/layout.js` to include global `Navbar` and `Footer`.
// turbo
2. Remove `Navbar` and `Footer` usage from `src/app/page.js`.
// turbo
3. Remove `Navbar` and `Footer` usages from `src/app/faculty/page.js` and switch to using `FacultyClient`.
// turbo
4. Create `src/components/FacultyCard.js` for the card UI.
// turbo
5. Create `src/components/FacultyClient.js` for the search and list logic.
// turbo
6. Delete the old `src/components/Faculty.js`.
// turbo
7. Create `src/app/api/avatar/route.js` for image optimization proxy.
// turbo
8. Update `next.config.mjs` to allow the external image domain locally (fallback) and experimental features.
// turbo
