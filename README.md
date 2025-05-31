# Aurélien's Issue

## What is the problem?

Layout shift detected by PageSpeed.

## Under what conditions?

I build the app with prerendering enabled and deploy it to a VPS (OVH) or via Cloudflare. In both cases, PageSpeed reports layout shifts. It can also rarely be reproduced with Lighthouse (roughly 1 out of 100 times), even when slowdown settings are maxed out.

### Analysis Screenshot (on my OVH VPS)

![PageSpeed capture 1](/readme_assets/1.png)

### Analysis Screenshot (on a Cloudflare Page)

[https://aurelien-issue.aurelien-dussauge.workers.dev/fr/](https://aurelien-issue.aurelien-dussauge.workers.dev/fr/)

![PageSpeed capture 2](/readme_assets/2.png)

**Note: The analysis detects the layout shift only about one out of three times on Cloudflare, possibly due to the faster connection they provide compared to my VPS located in France.**

## Déploiement CloudFlare

J'ai utilisé cette configuration pour déployer mon repository sur CloudFlare Pages

![CloudFlare Configuration](/readme_assets/3.png)

## Description

In my sample app, I have a `LabelComponent` that applies a CSS class to its host element based on the input. For example, passing `appLabel="Title"` applies a class `label--title` that changes the `font-size` to `3rem`.

PageSpeed provides no specific clues. However, using my browser’s dev tools, I noticed that during a very brief moment (probably during hydration), labels with `appLabel="Title"` briefly revert to the default font size (`16px` in my browser). This might be caused by a temporary disappearance of the host-bound class ?

The issue is hard to reproduce because it results from a very specific and unusual combination of factors:

- The element using the `appLabel` component must also have an additional class, even if it’s not associated with any CSS rules. (See `class="useless-class"` in `home.route.ts`). Removing those classes brings the CLS down to 0.
- `"localize": true` must be enabled in `angular.json`. This is strange because it has no effect at runtime in my app, yet removing this setting also brings CLS to 0.
- The app must use `provideZonelessChangeDetection()`. Reverting to the default zone-based change detection (`provideZoneChangeDetection({ eventCoalescing: true }),`) eliminates the CLS issue.
