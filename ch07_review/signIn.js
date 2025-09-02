const idInput = document.getElementById('id-input');
const pwInput = document.getElementById('pw-input');
const signinBtn = document.getElementById('login-btn');

const userList = JSON.parse(localStorage.getItem('user-list')) || [];
const userListContainer = document.getElementById('user-list');

function handleLogin() {
  const id = idInput.value.trim();
  const pw = pwInput.value.trim();

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

  const isDuplicate = userList.some(user => user.id === id && user.pw === pw);
  if (isDuplicate) {
    alert('로그인 성공.');
    idInput.value = '';
    pwInput.value = '';
    return;
  } 
  else {
    alert('로그인 실패');
    idInput.value = '';
    pwInput.value = '';
    return;
  }

}

signinBtn.addEventListener('click', handleLogin);


// Enter 키로 가입 가능하게 하기
[idInput, pwInput].forEach(input => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  });
});