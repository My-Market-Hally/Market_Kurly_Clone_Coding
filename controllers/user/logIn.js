const jwt = require('jsonwebtoken');
const User = require('../../schemas/user');
const bcrypt = require('bcrypt');

exports.logInFunc = async function (req, res) {
  const { email, password } = req.body;
  // console.log(email)
  const user = await User.findOne({ email: email }).exec();
  if (!user || email !== user.email) {
    res.status(400).send({
      errorMessage: '이메일 또는 패스워드가 틀렸습니다',
    });
    return;
  }
  if (!bcrypt.compareSync(password, user.password)) {
    res.status(400).send({
<<<<<<< HEAD
      errorMessage: "이메일 또는 패스워드가 잘못됐습니다.",
=======
      errorMessage: '이메일 또는 패스워드가 잘못됐습니다.',
>>>>>>> 9bd4ce99ece8b7cf7de514fa3de27bdb59fe9b38
    });
    return;
  }
  const token = jwt.sign({ userId: user.userId }, process.env.MY_SECRET_KEY);
<<<<<<< HEAD
  console.log("토큰", token);
  res.stauts(200).json({
=======
  console.log('토큰', token);
  res.status(200).json({
>>>>>>> 9bd4ce99ece8b7cf7de514fa3de27bdb59fe9b38
    token,
  });
};

exports.authorization = async function (req, res) {
  console.log('사용자 정보', res.locals);
  const { user } = res.locals; //중간 데이터를 설정할 수 있으며, 해당 데이터를 뷰에서 사용할수 있음.
  res.status(200).send({
    user: {
      email: user.email,
      userId: user.userId,
    },
  });
};
