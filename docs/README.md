# Portfolio Content Guide

This site is data-driven. Most future edits happen in one file:

- `docs/content.js`

## Add A New Project
1. Open `docs/content.js`
2. Find `projects: [ ... ]`
3. Add a new object inside that array:

```js
{
  title: "My New Project",
  description: "One sentence about what it does.",
  tech: ["HTML", "CSS", "JavaScript"],
  gradient: "linear-gradient(135deg, #70cfff, #b8e7ff)",
}
```

Notes:
- `title`: card heading.
- `description`: short summary.
- `tech`: tags shown on the card.
- `gradient`: top visual strip color.

## Edit About Page
In `docs/content.js`, edit the `about` object:

```js
about: {
  name: "Jane Doe",
  role: "Full Stack Developer & Designer",
  location: "San Francisco, CA",
  experience: "5+ years experience",
  heading: "About Me",
  paragraph1: "First paragraph...",
  paragraph2: "Second paragraph...",
  note: "Short highlighted note",
},
```

## Edit Experience Timeline
In `docs/content.js`, edit the `experience` object:

```js
experience: {
  title: "Experience",
  subtitle: "A timeline of the roles and projects that shaped my work",
  items: [
    {
      year: "2025",
      role: "Senior Full Stack Developer",
      company: "Northstar Labs",
      summary: "Short summary of the role",
      points: [
        "Impact point one",
        "Impact point two",
      ],
    },
  ],
},
```

## Rename Tabs
In `docs/content.js`, edit `tabs`.

Template:

```js
{ key: "projects", label: "Projects", color: "#b5e48c", active: "#99d98c" }
```

## Project Filters (Main + More)
Filters are auto-generated from each project's `tech` array.

To control which filters show first, edit `projectFilterConfig.primaryFilters` in `docs/content.js`:

```js
projectFilterConfig: {
  primaryFilters: ["React", "TypeScript", "Node.js", "Python"],
},
```

Behavior:
- `All` + `primaryFilters` are shown by default.
- `More Filters` expands to show the remaining auto-generated tech filters.
- If you add new tech tags to projects, they appear automatically under `More Filters` (unless listed in `primaryFilters`).

## Contact Links/Text
Contact items are currently rendered in `docs/script.js` inside `renderContact()`.

## Publish On GitHub Pages
1. Push this repository.
2. In GitHub repo settings: Pages.
3. Set source to `Deploy from a branch`.
4. Select your branch and `/docs` folder.

## TODO
 - [ ] diff style switch
 - [x] fix bg container
 - [x] certs & other experiences toggle on experience tab
 - [ ] blog/ study notes
 - [ ] other projects
 - [ ] finish experience timeline properly
 - [ ] finish about page properly
