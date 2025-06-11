 document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const webhookUrl = "https://discord.com/api/webhooks/1382479692401213480/Fdzn3AlM7rgJjeBexo4CvZeLlFacsnB-rVbC499i8XovfPUe2K4u9Idto2Ee3IyHmSor"; // <-- replace this with your actual webhook

    const payload = {
      content: `📬 **New Contact Submission**\n\n👤 **Name:** ${name}\n📧 **Email:** ${email}\n💬 **Message:**\n${message}`
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(res => {
      if (res.ok) {
        alert("✅ Message sent successfully!");
        document.getElementById('contact-form').reset();
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    })
    .catch(err => {
      console.error("Error sending to webhook:", err);
      alert("⚠️ Error sending message.");
    });
  });
