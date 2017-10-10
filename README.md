# Study case on fractal.build

## Purpose
After reading [Design Systems by Alla Kholmatova](https://www.smashingmagazine.com/design-systems-book/), I was looking for a flexible solution to implement design system.

I will perform a study session on [Fractal](http://fractal.build/) solution, for the following reasons:
- Node.js base
- made with flexibility in mind
- combine patter library and styleguide
- allow usage of [nunjucks](https://mozilla.github.io/nunjucks/) template engine
- has a "good looking" default template (it matter, you know ¯\_(ツ)_/¯)
- documentation looks well detailed

To perform these, I'll follow [Fractal user guide](http://fractal.build/guide).

## Feedback

- Configuration of nunjucks was easy using official [Nunjucks Adapter](https://github.com/frctl/nunjucks)
- no issue for data injection from a js config file
- __render__ "helper" in handlebar seems to __give component context to sub-component__ by nature.
  __For nunjucks__ Adapter, it seems __you have to specifically pass context to sub-component__. Best way I found
  to do so, is by using the `_self.context` property. Ex: `{% render '@subComponent', _self.context %}`
- Flexibility in mind, navigation easily customisable, and ability to create collection
- Has build-in "builder" to generate static website, useful to avoid server configuration and maintenance
