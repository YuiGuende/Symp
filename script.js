// script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const friendsButton = document.getElementById('friendsButton');
//     const friendsList = document.getElementById('friendsList');

//     friendsButton.addEventListener('click', (event) => {
//         event.preventDefault();  // Ngăn chặn hành vi mặc định của liên kết
//         // Chuyển đổi trạng thái hiển thị của danh sách bạn bè
//         friendsList.style.display = friendsList.style.display === 'block' ? 'none' : 'block';
//     });

//     // Ẩn danh sách bạn bè khi click bên ngoài
//     window.addEventListener('click', (event) => {
//         if (!friendsButton.contains(event.target) && !friendsList.contains(event.target)) {
//             friendsList.style.display = 'none';
//         }
//     });
// });
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const friendsButton = document.getElementById('friendsButton');
    const friendsList = document.getElementById('friendsList');
  
    friendsButton.addEventListener('click', (event) => {
      event.preventDefault();  // Ngăn chặn hành vi mặc định của liên kết
      // Chuyển đổi trạng thái hiển thị của danh sách bạn bè
      friendsList.style.display = friendsList.style.display === 'block' ? 'none' : 'block';
    });
  
    // Ẩn danh sách bạn bè khi click bên ngoài
    window.addEventListener('click', (event) => {
      if (!friendsButton.contains(event.target) && !friendsList.contains(event.target)) {
        friendsList.style.display = 'none';
      }
    });
  });
  
  // Function to initialize event listeners
  function initializeEventListeners() {
    // Correctly adding event listeners
    document.getElementById('button1').addEventListener('click', handleButtonClick1);
    document.getElementById('button2').addEventListener('click', handleButtonClick2);
    // Add other event listeners here
  }
  
  // Event handler functions
  function handleButtonClick1(event) {
    // Your event handling logic for button1
    console.log('Button 1 clicked');
  }
  
  function handleButtonClick2(event) {
    // Your event handling logic for button2
    console.log('Button 2 clicked');
  }
  
  // Call the function to initialize event listeners
  initializeEventListeners();
  
  document.addEventListener('DOMContentLoaded', () => {
    const childLink = document.querySelector('.comment');
    
    if (childLink) {
        childLink.addEventListener('click', (event) => {
            event.stopPropagation(); // Ngăn sự kiện nhấp chuột từ phần tử cha
            const href = childLink.getAttribute('data-href');
            window.location.href = href; // Mở liên kết của phần tử con
        });
    } else {
        console.error('Element with class .comment not found.');
    }
});

function openChat(name,playlist,ava) {
  let chatContainer = document.querySelector('.chat-container');
   if (chatContainer.style.display =='none'){
    chatContainer.style.display ='block';
  }
  // Kiểm tra xem hộp chat đã tồn tại chưas
  let existingChatBox = document.querySelector('.boxchatscreen');
  if (!existingChatBox) {
      // Tạo một hộp chat mới
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
    // Nếu hộp chat đã tồn tại, cập nhật tên và nội dung
    existingChatBox.querySelector('.inforelement img').src = ava;
    existingChatBox.querySelector('.a6').textContent = name;
    existingChatBox.querySelector('.a7').textContent = `In ${playlist}`;
    existingChatBox.querySelector('.chat-input').value = '';
}
}

function chatend(){
  let chatContainer = document.querySelector('.chat-container');
  chatContainer.style.display = 'none';
}

