const fractal = require('@frctl/fractal').create();

fractal.set('project.title', 'FooCorp Component Library');

fractal.components.set('path', `${__dirname}/src/components`);

fractal.docs.set('path',`${__dirname}/src/doc`);

module.exports = fractal;
