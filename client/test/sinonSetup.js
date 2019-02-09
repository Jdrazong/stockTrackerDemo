const sinon = require('sinon');

global.sinonSandbox = sinon.createSandbox();

afterEach(() => {
    global.sinonSandbox.restore();
});
