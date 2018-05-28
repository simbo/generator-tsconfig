const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testApp = () => helpers.run(require.resolve('../generators/app'));

describe('generator-tsconfig:app', () => {
  it('creates `tsconfig.json`', () =>
    testApp().then(() => {
      assert.file(['tsconfig.json']);
    }));

  describe('with option `generateInto`', () => {
    it('creates `tsconfig.json` in desired path', () =>
      testApp()
      .withOptions({
        generateInto: 'subfolder'
      })
      .then(() => {
        assert.file(['subfolder/tsconfig.json']);
      }));
  });
});
