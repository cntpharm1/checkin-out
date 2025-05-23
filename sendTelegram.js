<script>
const scriptURL = 'https://script.google.com/macros/s/AKfycbzMZjK1y9CQchgNy9FwWWBpnuSDxV5cI3OQaaGbEYghdbswOv0pVGRBvzqoxC7TReat/exec';
async function sendMessage(message , chatID) {
  //const message = document.getElementById('messageInput').value;
  //const chatId = document.getElementById('chatIdInput').value;
  //const scriptURL = 'YOUR_APPS_SCRIPT_WEB_APP_URL';

  if (message.trim() === '' || chatId.trim() === '') {
    alert('กรุณาใส่ทั้งข้อความและ Chat ID');
    return;
  }

  try {
    const response = await fetch(`${scriptURL}?message=${encodeURIComponent(message)}&chatId=${encodeURIComponent(chatId)}`);
    const data = await response.json();

    // ... ส่วนการจัดการ response เหมือนเดิม ...

  } catch (error) {
    // ... ส่วนการจัดการ error เหมือนเดิม ...
  } finally {
    // ... ส่วนการเคลียร์ input เหมือนเดิม ...
  }
}

async function sendMessagewithPic(message , chatId ,picURL) {
  //const message = document.getElementById('messageInput').value;
  //const chatId = document.getElementById('chatIdInput').value;
  //const scriptURL = 'YOUR_APPS_SCRIPT_WEB_APP_URL';

  if (message.trim() === '' || chatId.trim() === '' || picUrl.trim() === '') {
        alert('กรุณาใส่คำบรรยาย, Chat ID และ URL รูปภาพ');
        return;
      }

      const formData = new FormData();
      formData.append('message', message);
      formData.append('chatId', chatId);
      formData.append('picUrl', picUrl);

      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.status === 'success') {
          console.log(data.message);
        } else {
          console.log( 'เกิดข้อผิดพลาด: ' + data.message);
        }
      } catch (error) {
        console.log( 'เกิดข้อผิดพลาดในการเชื่อมต่อ: ' + error);
      } finally {
        console.log(response);
      }
}
  
</script>
