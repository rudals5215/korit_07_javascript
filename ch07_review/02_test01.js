const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const signupBtn = document.getElementById('signup-btn');

const userList = JSON.parse(localStorage.getItem('user-list')) || [];

userList.forEach((user,index) => {
  const li = document.createElement('li');
  li.className = '';
  if(user.completed) {
      li.classList.add('completed');
    }
})



// // DOM 요소 가져오기
// const signupIdInput = document.getElementById('signup-id');
// const signupPwInput = document.getElementById('signup-pw');
// const signupPwConfirmInput = document.getElementById('signup-pw-confirm');
// const signupBtn = document.getElementById('signup-btn');

// // user-list를 localStorage에서 가져오기 (없으면 빈 배열)
// const userList = JSON.parse(localStorage.getItem('user-list')) || [];

// // 회원가입 처리 함수
// function handleSignup() {
//   const id = signupIdInput.value.trim();
//   const pw = signupPwInput.value.trim();
//   const pwConfirm = signupPwConfirmInput.value.trim();

//   // === 유효성 검사 ===
//   if (!id && !pw) {
//     alert('아이디 및 비밀번호를 입력하세요.');
//     return;
//   }
//   if (!id) {
//     alert('아이디를 입력하세요.');
//     return;
//   }
//   if (!pw) {
//     alert('비밀번호를 입력하세요.');
//     return;
//   }
//   if (pw.length < 6) {
//     alert('비밀번호는 6자 이상이어야 합니다.');
//     return;
//   }
//   if (!pwConfirm) {
//     alert('비밀번호 확인을 입력하세요.');
//     return;
//   }
//   if (pw !== pwConfirm) {
//     alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
//     return;
//   }

//   // 아이디 중복 검사
//   const isDuplicate = userList.some(user => user.id === id);
//   if (isDuplicate) {
//     alert('이미 존재하는 아이디입니다.');
//     return;
//   }

//   // 새 사용자 추가
//   const newUser = { id, pw };
//   userList.push(newUser);

//   // localStorage에 저장
//   localStorage.setItem('user-list', JSON.stringify(userList));

//   alert('회원가입이 완료되었습니다! 🎉');

//   // 로그인 페이지로 이동 (파일명에 맞게 수정)
//   window.location.href = 'login.html';
// }

// // 가입 버튼 클릭 시
// signupBtn.addEventListener('click', handleSignup);

// // Enter 키로 가입 가능하게 하기
// [signupIdInput, signupPwInput, signupPwConfirmInput].forEach(input => {
//   input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//       handleSignup();
//     }
//   });
// });
