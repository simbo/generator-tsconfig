const Generator = require('yeoman-generator');
const mergeOptions = require('merge-options');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.option('generateInto', {
      type: String,
      required: false,
      defaults: '',
      desc: 'Relocate the location of the generated files.'
    });

  }

  initializing() {
    this.props = {
      config: this.fs.readJSON(this.templatePath('tsconfig.json'))
    }
  }

  configuring() {
    this.props = mergeOptions(this.props, this.options.config);
  }

  writing() {
    this.fs.writeJSON(
      this.destinationPath(this.options.generateInto, 'tsconfig.json'),
      this.props.config
    );
  }
};
