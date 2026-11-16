# React Lab — Week 11 class exercises

Eight class exercises from Week 11, rebuilt as working React components in the same
archive theme as the rest of my course work.

**Live:** https://olimjonovziyodulloh-coder.github.io/react-lab/

## Exercises

| # | Exercise | Component |
| --- | --- | --- |
| 01 | First component, used three times | `Greeting` |
| 02 | Student card with name, ID and major | `StudentCard` |
| 03 | Profile card with a default `avatarUrl` prop | `ProfileCard` |
| 04 | Notification list with conditional icons | `NotificationList` |
| 05 | Reusable layout component using `props.children` | `Card` |
| 06 | Product card with price, stars and stock label | `ProductCard`, `ProductGrid` |
| 07 | Student list rendered with `.map()` and keys | `StudentList` |
| 08 | Conditional rendering: `null`, `&&` and ternary | `ConditionalDemo` |

## React concepts used

- Functional components and JSX
- Props, destructuring and default prop values
- `props.children` for layout composition
- Lists with `.map()` and stable `key`
- Conditional rendering with `null`, `&&` and the ternary operator
- `useState` in `ConditionalDemo` to toggle the logged-in state
- Component composition (`Section`, `ProductGrid`)

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
npx gh-pages -d dist
```

`vite.config.js` sets `base: '/react-lab/'` so the build works on GitHub Pages.

## Author

Olimjonov Ziyodulloh — Student ID 202537557 — Web Programming K0126_002
