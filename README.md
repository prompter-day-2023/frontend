## 꾸미 Frontend 동작 방법 ✨
> node 버전은 20을 사용해주세요.

### Local 동작 방법 ☁️
1. Dependencies install
    ```
    npm install
    ```
2. Start
    ```
    npm start
    ```

### Docker 동작 방법
1. Image build
    ```
    docker build -t ggoomi-frontend  .
    ```

2. Container Start
    ```
    docker run -it -p 3000:3000 --rm --name ggoomi-frontend ggoomi-frontend
    ```