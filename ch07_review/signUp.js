// DOM 요소 가져오기
const signupIdInput = document.getElementById('id-input');
const signupPwInput = document.getElementById('pw-input');
const signupBtn = document.getElementById('signup-btn');

const userList = JSON.parse(localStorage.getItem('user-list')) || [];
const userListContainer = document.getElementById('user-list');

function renderUserList() {
  userListContainer.innerHTML = '';  // 기존 내용 초기화
}

function handleSignup() {
  const id = signupIdInput.value.trim();
  const pw = signupPwInput.value.trim();

  if (!id && !pw) {
    alert('아이디 및 비밀번호를 입력하세요.');
    return;
  }
  if (!id) {
    alert('아이디를 입력하세요.');
    return;
  }
  if (!pw) {
    alert('비밀번호를 입력하세요.');
    return;
  }

  const isDuplicate = userList.some(user => user.id === id);
  if (isDuplicate) {
    alert('이미 존재하는 아이디입니다.');
    return;
  }

  userList.push({ id, pw });
  localStorage.setItem('user-list', JSON.stringify(userList));

  alert('회원가입이 완료되었습니다! 🎉');

  signupIdInput.value = '';
  signupPwInput.value = '';

  renderUserList();  // 목록 업데이트

  window.location.href='signIn.html';
}

signupBtn.addEventListener('click', handleSignup);


// 페이지가 로드될 때 한번 실행해서 기존 사용자 보여주기
window.onload = function() {
  renderUserList();
};

// Enter 키로 가입 가능하게 하기
[signupIdInput, signupPwInput].forEach(input => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleSignup();
    }
  });
});
