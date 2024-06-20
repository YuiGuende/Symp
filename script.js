

document.addEventListener('DOMContentLoaded', () => {
  const friendsButton = document.getElementById('friendsButton');
  const friendsList = document.getElementById('friendsList');

  friendsButton.addEventListener('click', (event) => {
    event.preventDefault();

    friendsList.style.display = friendsList.style.display === 'block' ? 'none' : 'block';
  });


  window.addEventListener('click', (event) => {
    if (!friendsButton.contains(event.target) && !friendsList.contains(event.target)) {
      friendsList.style.display = 'none';
    }
  });
});


function initializeEventListeners() {

  document.getElementById('button1').addEventListener('click', handleButtonClick1);
  document.getElementById('button2').addEventListener('click', handleButtonClick2);

}


function handleButtonClick1(event) {

  console.log('Button 1 clicked');
}

function handleButtonClick2(event) {

  console.log('Button 2 clicked');
}


initializeEventListeners();

document.addEventListener('DOMContentLoaded', () => {
  const childLink = document.querySelector('.comment');

  if (childLink) {
    childLink.addEventListener('click', (event) => {
      event.stopPropagation();
      const href = childLink.getAttribute('data-href');
      window.location.href = href;
    });
  } else {
    console.error('Element with class .comment not found.');
  }
});

function openChat(name, playlist, ava) {
  let chatContainer = document.querySelector('.chat-container');
  if (chatContainer.style.display == 'none') {
    chatContainer.style.display = 'block';
  }

  let existingChatBox = document.querySelector('.boxchatscreen');
  if (!existingChatBox) {

    let chatBox = document.createElement('div');
    chatBox.className = 'boxchatscreen';

    chatBox.innerHTML = `
        <div class="inforelement">
                <div><img src="${ava}"></div>
                <div class="name_and_status">
                    <div class="a6">${name}</div>
                    <div class="a7">In ${playlist}</div>
                </div>
                <div onclick='chatend()' class="hidden"></div>
            </div>
            
            <div class="chatscreen"></div>
            <div class="chat-footer">
                <input type="text" class="chat-input" placeholder="Nhập tin nhắn...">
            </div>
      `;
    chatContainer.appendChild(chatBox);
    chatBox.style.display = 'block';
  } else {

    existingChatBox.querySelector('.inforelement img').src = ava;
    existingChatBox.querySelector('.a6').textContent = name;
    existingChatBox.querySelector('.a7').textContent = `In ${playlist}`;
    existingChatBox.querySelector('.chat-input').value = '';
  }
}

function chatend() {
  let chatContainer = document.querySelector('.chat-container');
  chatContainer.style.display = 'none';
}

