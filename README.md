
# π My-Market-Kurly Clone Coding
Market Kurly : https://www.kurly.com

<br>

## π¨βπ§βπ¦ 1. μ μ κΈ°κ° & νμ μκ°

- μ μ κΈ°κ° : 2021.10.18 ~ 2021.10.22
- 6μΈ 1μ‘° ν νλ‘μ νΈ
   - Backend (Node.js)
    ν©μ μ , μμ±μ°¬, μ€μ λ―Ό
    
   - Frontend (React) 
    μ₯μλ°°, μ΄μΉλ―Ό, μ μ λΉ
    
    - Frontend Github
    https://github.com/calvin9150/kurly-frontend
<br>
 
## π¨ 2. κΈ°μ  μ€ν
- `Backend`
  - Node.js
  - Express
  - JWT
  - MongoDB
  - Swagger

- μ¬μ© μΈμ΄
  - Javascript
<br>

## π 3. μμ° λμμ λ§ν¬
![market_kurly](https://user-images.githubusercontent.com/90595291/138447202-80d76971-4a98-4bcd-8396-26793c40be5f.png)
[https://youtu.be/Rln2mID2syc](https://youtu.be/Rln2mID2syc)

<br>

## π₯ 4. API μ€κ³ & WireFrame
[https://www.notion.so/1-Market-Hally-7b93dd22647647678e61fa3d19d18d12]

<br>

## π 5. SWAGGER(API λͺμΈ)
![swagger](https://user-images.githubusercontent.com/59908525/138449937-43175527-0f87-40c3-ad6d-2f1ee4dd5715.PNG)

<br>

## π₯ 6. ν΅μ¬κΈ°λ₯
- λ‘κ·ΈμΈ, νμκ°μ
  - JWTλ₯Ό μ΄μ©νμ¬ νμκ°μκ³Ό λ‘κ·ΈμΈμ κ΅¬ννμμ΅λλ€.
  - μμ΄λλ 6μλ¦¬μ΄μμ ν/μλ¬Έμ, μ«μλ‘ κ΅¬μ±λμ΄μΌν©λλ€.
  - λΉλ°λ²νΈλ ν/μλ¬Έμ(μ/λλ¬Έμ), μ«μ, νΉμλ¬Έμκ° μ΅μ 1μλ¦¬ ν¬ν¨λ 10μλ¦¬ μ΄μμΌλ‘ κ΅¬μ±λμ΄μΌν©λλ€.

- λ¬Όν λͺ©λ‘ λ±λ‘, μ‘°ν
  - DBμ μν λ¬Όνμ λ±λ‘ν  μ μμ΅λλ€. 
  - DBμ μ μ₯λ λ¬Όνλ€μ μ λ³΄λ₯Ό μ‘°νν  μ μμ΅λλ€.

- μ₯λ°κ΅¬λ CRUD
  - μ¬μ©μμΈμ¦μ ν΅νμ¬, μμ μ μ₯λ°κ΅¬λ νμ΄μ§ λͺ©λ‘μ‘°νκ° κ°λ₯ν©λλ€.
  - μ₯λ°κ΅¬λμ λͺ©λ‘μ μΆκ°ν  μ μμ΅λλ€.
  - λ¬Όν μλμ μμ /μ­μ ν  μ μμ΅λλ€.
  
<br>  

## π₯ 7. ν΄κ²°ν λ¬Έμ / μμΌλ‘ ν΄κ²°ν  λ¬Έμ 
- `Backend`
- λΉλ°λ²νΈμ λͺ¨λ  νΉμλ¬Έμλ‘ κ΅¬μ±ν  μ μλλ‘ νμ©μ νλ €λ©΄ μ΄λ»κ² ν κΉμ?         
    ```jsx
        exports.passwordSchema = Joi.object({
           password: Joi.string()
            .pattern(new RegExp(/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/))
            .required(),
        }).unknown();
     ```       
 - νλμ githubκ³Ό νλμ branchμ pushλ₯Ό μΈ μ¬λμ΄ νλ €λ©΄ λ³΅μ‘νμνλ°, μ΄λ»κ² νμ¨λμ?
   - 1. Github conventionμ μμν΄μ νλ€.
   - 2. κ°μμ branchμ λ¨Όμ  push ν, devμ mergeλ₯Ό νλ€
   - 3. devλ₯Ό push, mergeν  λλ μλ‘μκ² μκΈ° ν νκΈ°λ‘ νλ€. 
