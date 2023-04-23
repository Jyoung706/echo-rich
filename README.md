# _실행 방법_

### 1. git clone

```
https://github.com/Jyoung706/echo-rich.git
```

### 2. 패키지 설치

```
npm i
```

### 3. .env 파일 설정

``
PORT = 어플리케이션 포트 번호
MYSQL_HOST = DataBase 주소
MYSQL_PORT = 데이터베이스 포트번호
MYSQL_USERNAME = 데이터 베이스 사용자 이름
MYSQL_PASSWORD = 데이터 베이스 비밀번호
MYSQL_DATABASE = 데이터 베이스 명
DENTAL_API_KEY = 오픈 API KEY (해당 키는 공공데이터포털 경기도_치과병원 현황(병원급)) 에서 오픈키 신청 후 사용하시면 됩니다.
```

### 4. 서버 실행

```
npm run start
npm run dev         // 개발 모드로 실행
```

<br>

**기능의 동작은 [API 명세서](https://documenter.getpostman.com/view/22723440/2s93Y5Nz4X) 참조**

<br>

# _프로젝트 구조_

```
📦echo-rich
┣ 📂src
 ┃ ┣ 📂controllers | 각 API의 요청과 응답 처리 Layer
 ┃ ┃ ┣ 📜dental_info_controller.js
 ┃ ┃ ┣ 📜department_controller.js
 ┃ ┃ ┗ 📜employee_controller.js
 ┃ ┣ 📂middleware | Error 처리 Middleware
 ┃ ┃ ┗ 📜error_handler.js
 ┃ ┣ 📂models | 각 API DataBase 쿼리 처리 Layer
 ┃ ┃ ┣ 📜department_Dao.js
 ┃ ┃ ┗ 📜employee_Dao.js
 ┃ ┣ 📂routers | API Routing 폴더 
 ┃ ┃ ┣ 📜dental_router.js
 ┃ ┃ ┣ 📜department_router.js
 ┃ ┃ ┣ 📜employee_router.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂services | 각 API 비즈니스 로직 처리 Layer
 ┃ ┃ ┣ 📜dental_info_service.js
 ┃ ┃ ┣ 📜department_service.js
 ┃ ┃ ┗ 📜employee_service.js
 ┣ 📜.gitignore
 ┣ 📜app.js
 ┣ 📜db_connection.js | 데이터베이스 연결 파일
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜server.js
```

# 데이터 베이스

#### 데이터 베이스는 Oracle의 HR 스키마의 더미데이터를 사용했습니다.

<br>

# API 명세서

### [API 명세 (클릭시 이동)](https://documenter.getpostman.com/view/22723440/2s93Y5Nz4X)
