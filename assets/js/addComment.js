import axios from 'axios';

const commentList = document.getElementById('jsCommentList');
const commentNumber = document.getElementById('jsCommentNumber');
const addCommentForm = document.getElementById('jsAddComment');
const delBtnArr = document.querySelectorAll('button');

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

function addComment(comment) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
}

const sendComment = async (comment) => {
  const videoId = window.location.href.split('/videos/')[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: 'POST',
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector('input');
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = '';
};

const handleDelete = async (e) => {
  const target = e.currentTarget;
  console.log(target);
  const targetLi = target.parentNode;
  const targetSpan = targetLi.querySelector('span');
  const targetComment = targetSpan.innerText;
  console.log(targetComment);
  const videoId = window.location.href.split('/videos/')[1];
  const response = await axios({
    url: `/api/${videoId}/comment/delete`,
    method: 'POST',
    data: {
      targetComment,
    },
  });
  if (response.status === 200) {
    commentList.removeChild(targetLi);
  }
};

function init() {
  addCommentForm.addEventListener('submit', handleSubmit);
  delBtnArr.forEach((e) => {
    e.addEventListener('click', handleDelete);
  });
}

if (addCommentForm) {
  init();
}
