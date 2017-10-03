const fractal = require('@frctl/fractal').create();
const nunj = require('@frctl/nunjucks');

fractal.set('project.title', 'FooCorp Component Library');

fractal.components.set('path', `${__dirname}/src/components`);
fractal.components.engine(nunj);
fractal.components.set('ext', '.nunj');

fractal.docs.set('path', `${__dirname}/src/doc`);

module.exports = fractal;
