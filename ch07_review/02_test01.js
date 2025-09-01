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