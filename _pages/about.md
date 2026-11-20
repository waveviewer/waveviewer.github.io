---
permalink: /
title: "Houqiang Zhong"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<p class="lead">PhD candidate in Electronic and Information Engineering at Shanghai Jiao Tong University, advised by Prof. Li Song and Prof. Qiang Hu.</p>

I work on volumetric video: how to capture a moving scene with dozens of cameras, how to represent it with 4D Gaussians compactly enough to stream, and how to reconstruct it from as few views as possible.

{% assign recent = site.publications | sort: "date" | reverse %}
{% assign featured = recent | first %}
{% assign feature_img = featured.feature | default: featured.header.teaser %}

## Selected work

<div class="featured">
  <a href="{{ featured.projecturl | default: featured.paperurl }}">
    <img src="{{ '/images/' | append: feature_img | relative_url }}" alt="Teaser figure of {{ featured.title }}">
  </a>
  <h3 class="featured__title"><a href="{{ featured.projecturl | default: featured.paperurl }}">{{ featured.title }}</a></h3>
  <p class="pub__authors">{{ featured.authors | replace: "Houqiang Zhong", "<strong>Houqiang Zhong</strong>" }}</p>
  <p class="pub__venue">{{ featured.venue }}{% if featured.award %} · <span class="pub__award">{{ featured.award }}</span>{% endif %}</p>
  <p class="pub__links">
    {% if featured.paperurl %}<a href="{{ featured.paperurl }}">Paper</a>{% endif %}
    {% if featured.projecturl %}<a href="{{ featured.projecturl }}">Project page</a>{% endif %}
  </p>
</div>

{% assign selected = site.publications | where: "selected", true | sort: "date" | reverse %}
{% comment %} The newest selected paper is the featured block above; list the rest. {% endcomment %}
<div class="pub-list">
  {% for post in selected offset:1 %}
    {% include publication-row.html post=post %}
  {% endfor %}
</div>

<p class="more-link"><a href="/publications/">All publications</a></p>

## Research interests

<ul class="interest-list">
  <li><strong>3D/4D reconstruction.</strong> Dynamic scene reconstruction from multi-view and egocentric video, including novel-view synthesis from sparse or degraded captures.</li>
  <li><strong>Gaussian compression.</strong> Rate-aware and hierarchical compression of dynamic 3D Gaussian representations.</li>
  <li><strong>Volumetric streaming.</strong> Free-viewpoint video delivery with real-time decoding on mobile devices.</li>
</ul>

## Education

<ul class="timeline">
  <li><span class="timeline__years">2024 – now</span><span class="timeline__body">PhD in Electronic and Information Engineering, Shanghai Jiao Tong University</span></li>
  <li><span class="timeline__years">2020 – 2023</span><span class="timeline__body">M.S. in Computer Science, ShanghaiTech University</span></li>
  <li><span class="timeline__years">2016 – 2020</span><span class="timeline__body">B.S. in Computer Science, Shanghai University</span></li>
</ul>
