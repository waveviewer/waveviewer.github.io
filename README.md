# Houqiang Zhong

Personal academic homepage, built with [Academic Pages](https://github.com/academicpages/academicpages.github.io) and published on GitHub Pages at <https://waveviewer.github.io/>.

## Editing the content

| What | Where |
| --- | --- |
| Name, bio, avatar, links | `_config.yml` (`author`) and `_data/navigation.yml` |
| Home page text, research interests, education | `_pages/about.md` |
| Publication list (one file per paper) | `_publications/` |
| Publication entries shown on the home page | the `selected: true` line in a publication file |
| Images | `images/` (avatar, `images/teasers/` for paper figures) |
| Colours, type, spacing | `_sass/_custom.scss` |

## Publication fields

```yaml
---
title: "Paper title"
collection: publications
date: 2026-12-01          # ordering, newest first
venue: "NeurIPS 2026"
authors: "Houqiang Zhong, ..."
selected: true            # optional, shows it on the home page
header:
  teaser: teasers/x.jpg   # optional thumbnail, relative to images/
feature: teasers/y.jpg    # optional larger figure for the home page
paperurl: "https://..."
projecturl: "https://..."
award: "Best Paper"       # optional
---
```

## Local preview

Ruby 3.x with Bundler is required.

```bash
bundle install
bundle exec jekyll serve
```

## Notes

- `assets/js/main.min.js` is committed on purpose. The upstream template builds it with npm during a GitHub Actions deploy, but this repository publishes with the plain Jekyll build of GitHub Pages, which does not run that step.
- The site is designed as a light page only; the palette lives in `_sass/_custom.scss`.
