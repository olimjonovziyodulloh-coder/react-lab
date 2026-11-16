# React Lab — Week 11 class tasks

The class tasks from every Week 11 source — visual lecture, study guide, video
lecture and the Friday slides — rebuilt as working React components.
Same archive theme as the rest of my course work.

**Live:** https://olimjonovziyodulloh-coder.github.io/react-lab/

## Sources and tasks

| Source | Task | Component |
| --- | --- | --- |
| Visual lecture | Lab challenge: fill in the blanks for a student card that shows your own ID | `StudentCard` |
| Study guide | Exercise 1: profile card with a default avatar prop | `ProfileCard` |
| Study guide | Exercise 2: notification list with conditional icons | `NotificationList` |
| Study guide | Exercise 3: reusable card using `props.children` | `Card` |
| Video lecture | Practice challenge: course catalog with a conditional required/elective badge | `CourseCard`, `CourseCatalog` |
| Friday slides | Code challenge: product card with price, star rating and stock label | `ProductCard`, `ProductGrid` |

## React concepts used

- Functional components and JSX
- Props, destructuring and default prop values
- `props.children` for layout composition
- Lists with `.map()` and stable `key`
- Conditional rendering (ternary) for icons and badges
- Component composition (`Section`, `CourseCatalog`)

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
