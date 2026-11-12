# Vepusanan Nanthakumar — Personal Portfolio

A modern, minimal personal portfolio built with **HTML5**, **CSS3**, and **vanilla JavaScript**.

## Features

- Sticky responsive navigation with mobile menu
- Editorial hero with entrance animation
- About, experience timeline, skills, projects, interests, and contact sections
- Scroll reveal animations via Intersection Observer
- Active section indicator in the navbar
- Back-to-top button and dynamic copyright year
- Mobile-first responsive layout (375px → 1440px)

## Project Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Getting Started

Open `index.html` in a browser, or serve the folder locally:

```bash
# From the portfolio directory
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customization

Update these places when personal details change:

| Item | Where to edit |
| --- | --- |
| Name, role, bio, experience | `index.html` |
| Email / LinkedIn / GitHub | Search for `mailto:` and social URLs in `index.html` |
| Resume PDF | Place file at `assets/Vepusanan_Nanthakumar_Resume.pdf` |
| Profile photo | Replace `assets/images/profile-placeholder.svg` |
| Project images | Replace files in `assets/images/` |
| Colors / spacing / type | CSS variables in `css/style.css` (`:root`) |

## Design Tokens

- Background: `#FAFAFA`
- Text: `#171717`
- Muted text: `#737373`
- Accent: `#2563EB`
- Cards: `#FFFFFF`

## Notes

- Social links and email currently use easy-to-replace placeholders.
- Projects without public URLs are marked as private/research (no invented links).
- No frameworks or build step required.
