const express = require('express');
const app = express();

// const port = 3000
const port = process.env.port || 3000;

// dotenv 모듈
const dotenv = require('dotenv');
dotenv.config();

// cors 연결, cors를 프론트와 연결하기 위해 오픈한 것
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// schemas와 연결
const connect = require('./schemas');
connect();

//api 설정
const postRouters = require('./routers/postRouter');
const userRouters = require('./routers/userRouter');
const cartRouters = require('./routers/cartRouter');

app.use('/user', [userRouters]);
app.use('/post', [postRouters]);
app.use('/api', [cartRouters]);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
