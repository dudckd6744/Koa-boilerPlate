# Koa-boilerPlate
koa 프레임워크를 이용한 boiler-plate 
- 일단은 틀만 잡아 놓고 기능이해에만 중점을 둔 프로젝트입니다. 더 나아가 완전한 boiler-plate 로 구현 시킬 예정입니다.
  - oop ,fp 로 둘다 해놓을 예정입니다.
# OOP
### tsc 를 사용하여 구현

#### tsconfig.json (scripts)

| name | description |
| ------------------ | -------------------------------- |
| module |자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳입니다.commonjs는 require 문법es2015, esnext는 import 문법을 사용합니다. 어느정도 IE 호환성을 원하시면 es5, commonjs가 국룰임 |
| target |어떤 버전으로 컴파일할지 작성|
| outDir |컴파일 후 생성되는 js파일이 생성될 폴더명|
| esModuleInterop |모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호 운용성이 생기게할 지 여부, 'allowSyntheticDefaultImports'를 암시적으로 승인합니다.|
| sourceMap |.map 파일 생성 유무|
| exclude |컴파일 대상을 제외하는 옵션 |
| include |컴파일할 파일 경로를 설정합니다. [ src폴더 하위의 모든 .ts 확장자를 가진 파일 ]|



#### package.json (scripts)

| name  | commend    | description |
| ------------------ | ------------ | -------------------------------- |
| dev   |`nodemon --watch 'src/**/*' -e ts --exec ts-node ./src/server.ts`|nodemon 이 src 디렉토리 내 ts 파일들을 주시하다 해당 파일들이 변경, 저장될 때마다 src 디렉토리의 server.ts 파일을 ts-node 로 transpile 하여 다시 실행|
| build |`tsc`| ts 파일 컴팔일러 시켜주는 명령어|
| start |`node dist/server.js`| 컴파일러된 server.js 실행|

# FP

## 문제점
#### OOP 에서 router 관리할때처럼 FP 에서도 시도해보았는데 되지않았다
- 인스턴스화를시키지 못했다.
## 해결
#### awlilx-koa 라는 lib 를 사용하여 router 를 좀더 가독성있고 확장성있게 구현하였다.
