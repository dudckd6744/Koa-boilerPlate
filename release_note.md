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

## to do
