
# 📝 My-Market-Kurly Clone Coding
Market Kurly : https://www.kurly.com


## 👨‍👧‍👦 1. 제작 기간 & 팀원 소개

- 제작 기간 : 2021/10/11 ~ 2021/10/16
- 6인 1조 팀 프로젝트
   - Backend (Node.js)
    황유정, 임성찬, 오정민
    
   - Frontend (React)
    장원배, 이승민, 신유빈

 
## 🔨 2. 기술 스택
- `Backend`
  - Node.js
  - Express
  - JWT
  - MongoDB
  - Swagger

- 사용 언어
  - Javascript
  
## 🖥 3. API 설계 & WireFrame
[https://www.notion.so/1-Market-Hally-7b93dd22647647678e61fa3d19d18d12]

## 🖥 4. SWAGGER(API 명세)
![swagger](https://user-images.githubusercontent.com/59908525/138449937-43175527-0f87-40c3-ad6d-2f1ee4dd5715.PNG)

## 🖥 5. 핵심기능
- 로그인, 회원가입
  - JWT를 이용하여 회원가입과 로그인을 구현하였습니다.
  - 아이디는 6자리이상의 한/영문자, 숫자로 구성되어야합니다.
  - 비밀번호는 한/영문자(소/대문자), 숫자, 특수문자가 최소 1자리 포함된 10자리 이상으로 구성되어야합니다.

- 물품 목록 등록, 조회
  - DB에 상품 물품을 등록할 수 있습니다. 
  - DB에 저장된 물품들의 정보를 조회할 수 있습니다.

- 장바구니 CRUD
  - 사용자인증을 통하여, 자신의 장바구니 페이지 목록조회가 가능합니다.
  - 장바구니에 목록을 추가할 수 있습니다.
  - 물품 수량을 수정/삭제할 수 있습니다.

## 🖥 6. 해결한 문제/ 앞으로 해결할 문제
- `Backend`
    - 개인 프로필 정보를 삭제할 때, 전체 User전체 db를 지우지 않고,  특정 db값만 지우고 싶으면 어떡해야 할까?
    - User.deleteOne() 을 사용하면 User 정보 안에 있는 _id, userId, password, userPic, userIntro가 전부 지워진다.
    - 그래서 userPic과 userIntro를 지우기 위해서, findOneAndUpdate( )를 쓰고, userPic 과 userIntro에 null값을 부여했다.
        
        ```jsx
        await User.findOneAndUpdate(
                    { userId: user.userId },
                    { $set: { userIntro : null, userPic : null }}
        )
        ```
        
- 개인 프로필 정보를 조회하기 위해서, back에서 front로 user 정보를 전부 보내는데, 이것이 보안상 위험한데 어떡해 해결 하실 건가요?
    - 비밀번호를 bcrypt를 이용해서 암호화를 한 후, 넘겨줘야 한다.
    - 저희 팀은 bcrypt를 이용하지 않았는데, 앞으로 보안을 탄탄하게 하려면 이용을 해야겠다.
- BackEnd에서 작업을 하다가 정해진 API 설계 그대로 못 하고, 중간에 url을 바꾸게 되는 경우가 생기는데 그때마다 서로 맞추는 것보다 더 효율적인 방법이 있을까요?
    - swagger를 쓰면 된다! → 저희 팀은 안 쓰긴 했는데, 다른 팀이 쓴 것을 보니 front, back에 둘 다 좋은 것 같다.


## 🔗 7. 시연 동영상 링크
![market_kurly](https://user-images.githubusercontent.com/90595291/138447202-80d76971-4a98-4bcd-8396-26793c40be5f.png)
[https://youtu.be/Rln2mID2syc](https://youtu.be/Rln2mID2syc)