# 2022-01-15

    - Koa 프레임웤을 이용한 보일러플레이트 구축
        - OOP, FP
    - OOP 우선순위!

# 2022-01-16

    - OOP
        - 기초 셋팅 완료
        - server.ts
            - 서버 시작점
        - APP.ts
            - 시작에 필요한 미들웨어 생성 후 적용

# 2022-01-17

    - OOP
        - exception 처리에대한 분석
            - middleware 방식이 express 와는 다르다. 분석이 좀더 필요

# 2022-01-18

    - OOP
        - exception 처리 미들웨어 작성

# 2022-01-19

    - OOP
        - mysql 연동
        - success wrapper 분석 및 구현 진행

# 2022-01-20

    - OOP
        - AUTH 미들웨어 적용
            - 모든 api 첫 우선으로 exception 미들웨어를 거쳐 try블록안에 next()를 바라본다.
            - AUTH 미들웨어로 넘어가서 로직을처리
                - 정상작동시 return next()
                    - 필요한 데이터를 담아서 api로 넘겨준다.
                - err 발생시 return next().then(err => throw new Error())
                    - exception 미들웨어로 넘어가서 catch 블록안에 err 를 반환
        - AUTH 집가서 조금더 분석후 최적화 예정
            - 분석후 로직 완성
        - 서버Arch 구성
    - koa 프레임워크에대한 이해도 높이기 용으로 OOP boilerPlate 구현 종료

# 2022-01-21

    - FP
        - 기초셋팅 완료
        - server.js
            - 서버 시작점
        - index.js
            - 서버 시작에 필요한 구성요소 설정
            - router 설정
                - 모듈을 써서 라우터 관리를 해야될것같다.

# 2022-01-22

    - FP
        - awilix-koa 설치
            - 라우팅 관련 설정

# 2022-01-24

    - FP
        - 라우팅 설정 완료
        - exception 미들웨어 구현
        - success wrapper 적용중이었으나 조금더 분석이필요

# 2022-01-26
    - FP
        - koa 프레임워크에 대한 이해도 높이기 용으로 FP boilerPlate 구현 종료
    - 끝
        - 개인프로젝트 끝난후 다시 제대로 다듬을 예정

## to do
