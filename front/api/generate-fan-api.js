const { codegen } = require('swagger-axios-codegen')
codegen({
  outputDir: '../src/api/fan',
  methodNameMode: 'path',
  remoteUrl: 'http://localhost:5000/swagger/swagger.json',
  useStaticMethod: false,
  multipleFileMode: true,
})
