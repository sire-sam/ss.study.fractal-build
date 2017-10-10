const fractal = require('@frctl/fractal').create();
const nunj = require('@frctl/nunjucks');
const context = require('./data/context.json');

// Project settings
// ----------------
// Title, will be displayed on top tool-bar
fractal.set('project.title', 'FooCorp Component Library');
// path tor public assets
fractal.web.set('static.path', `${__dirname}/src/public`);
// path to build folder
fractal.web.set('builder.dest', `${__dirname}/build`);


// Components settings
// -------------------
// path to components folder
fractal.components.set('path', `${__dirname}/src/components`);
// set custom engine (nunjucks using frctl adapter)
fractal.components.engine(nunj);
// set template extension
fractal.components.set('ext', '.nunj');
// set Html template used for preview rendering
fractal.components.set('default.preview', '@preview');
// Set variant collated in rendered previews (default: false)
fractal.components.set('default.collated', false);
// Set method for collator rendering (default.collated must be true, obviously)
fractal.components.set('default.collator', (markup, item) => `<!-- Start: @${item.handle} -->\n${markup}\n<!-- End: @${item.handle} -->\n`);
// Set global context available to all component when rendering preview
fractal.components.set('default.context', context);
// Global prefix to apply to all generated handles (default: null)
fractal.components.set('default.prefix', null);
// Set default status for all components (default: 'ready')
fractal.components.set('default.status', 'wip');
// Set label for components nav (default: 'components')
fractal.components.set('label', 'Patterns');
// Set title for collection of components (default: 'Components')
fractal.components.set('title', 'Patterns');
// Customize preview rendering area
fractal.components.set('default.display', {
  'min-width': '320px',
});
// Set available statuses for components
fractal.components.set('statuses', {
  draft: {
    label: 'working draft',
    description: 'Not there yet',
    color: '#141414',
  },
  wip: {
    label: 'WIP',
    description: 'Work in progress. Implement with caution.',
    color: '#FF9233',
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#29CC29',
  },
});


// Documentation settings
// ----------------------
// path to documentation folder
fractal.docs.set('path', `${__dirname}/src/doc`);

module.exports = fractal;
