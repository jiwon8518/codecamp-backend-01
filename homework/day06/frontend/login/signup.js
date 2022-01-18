// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  // 번호 2,3
  let phoneNum2 = document.getElementById("PhoneNumber02").value;
  let phoneNum3 = document.getElementById("PhoneNumber03").value;

  let recvPhoneNum = "010"+phoneNum2+phoneNum3;
  //alert(recvPhoneNum);

  axios.post('http://localhost:3001/tokens/phone', {
      myphone: recvPhoneNum
  });



  

  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
}

// 회원 가입 API 요청
const submitSignup = async () => {

  let userName = document.getElementById("SignupName").value;
  let SignupPersonal1 = document.getElementById("SignupPersonal01").value;
  let SignupPersonal2 = document.getElementById("SignupPersonal02").value;
  let SignupPersonal = SignupPersonal1 + "-" + SignupPersonal2;
   let site = document.getElementById("SignupPrefer").value;
   let userEmail = document.getElementById("SignupEmail").value;
   let userPassword = document.getElementById("SignupPwd").value;

   let phoneNum2 = document.getElementById("PhoneNumber02").value;
   let phoneNum3 = document.getElementById("PhoneNumber03").value;

   let recvPhoneNum = "010"+phoneNum2+phoneNum3;
  //alert(recvPhoneNum);

  const user = {
    name: userName,
    socialSecurityNumber: SignupPersonal,
    site: site,
    email: userEmail,
    password: userPassword,
    phone: recvPhoneNum
  }

  console.log(user);

  axios.post('http://localhost:3001/users', {
    user: user
  });



  console.log('회원 가입 이메일 전송')
}
