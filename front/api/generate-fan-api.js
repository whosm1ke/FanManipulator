import {codegen} from "swagger-axios-codegen";

await codegen({
  outputDir: '../src/api/fan',
  methodNameMode: 'path',
  remoteUrl: 'http://127.0.0.1:5000/swagger.json',
  useStaticMethod: false,
  multipleFileMode: true,
})
