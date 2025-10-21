const conversationItems = document.querySelectorAll(".conversation-item");
const chatArea = document.getElementById("chatArea");

conversationItems.forEach((item) => {
  const unread = Number(item.dataset.unread || 0);
  const badge = item.querySelector(".unread-badge");
  if (!badge) return;
  if (unread > 0) {
    badge.textContent = unread > 99 ? "99+" : unread;
    badge.classList.remove("invisible");
  } else {
    badge.classList.add("invisible");
  }
});

conversationItems.forEach((item) => {
  item.addEventListener("click", () => {
    const name = item.dataset.name;
    const message = item.dataset.message;
    const badge = item.querySelector(".unread-badge");

    if (badge) {
      badge.classList.add("invisible");
      item.dataset.unread = "0";
      badge.textContent = "0";
    }

    chatArea.innerHTML = `
            <div class="flex flex-col h-full w-full">
              <div class="flex justify-between items-center border-b border-gray-400 pb-3 mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <span class="text-sm font-medium text-gray-700">${getInitials(
                      name
                    )}</span>
                  </div>
                  <h2 class="text-lg font-semibold text-gray-900">${escapeHtml(
                    name
                  )}</h2>
                </div>
                <div class="text-sm text-gray-500">Active</div>
              </div>

              <div class="flex-1 overflow-y-auto space-y-4 p-2">
                <!-- sample chat bubbles -->
                <div class="max-w-prose">
                  <div class="bg-blue-50 rounded-lg p-3 w-fit">
                    <p class="text-gray-700 text-sm">${escapeHtml(message)}</p>
                  </div>
                </div>

                <div class="max-w-prose ml-auto">
                  <div class="bg-gray-100 rounded-lg p-3 w-fit">
                    <p class="text-gray-700 text-sm">Thanks for the update we'll review and respond.</p>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex gap-2">
                <input
                  id="messageInput"
                  type="text"
                  placeholder="Type a message..."
                  class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none"
                />
                <button id="sendBtn" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2">
                  <i data-lucide="send" class="w-4 h-4"></i>
                  <span class="text-sm">Send</span>
                </button>
              </div>
            </div>
          `;
    lucide.createIcons();

    const sendBtn = document.getElementById("sendBtn");
    const messageInput = document.getElementById("messageInput");

    sendBtn.addEventListener("click", () => {
      const text = messageInput.value.trim();
      if (!text) return;
      const container = chatArea.querySelector(".flex-1");
      const wrapper = document.createElement("div");
      wrapper.className = "max-w-prose ml-auto";
      wrapper.innerHTML = `<div class="bg-gray-100 rounded-lg p-3 w-fit"><p class="text-gray-700 text-sm">${escapeHtml(
        text
      )}</p></div>`;
      container.appendChild(wrapper);
      messageInput.value = "";
      container.scrollTop = container.scrollHeight;
    });
  });
});

// helper: create initials for avatar
function getInitials(name = "") {
  return (
    name
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
      .replace(/[^A-Z]/g, "") || "U"
  );
}

// helper: escape HTML to avoid injection in demo
function escapeHtml(unsafe) {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Tabswitch

document.addEventListener("DOMContentLoaded", () => {
  const tabs = {
    Messages: document.getElementById("Messages"),
    Announcement: document.getElementById("Announcement"),
    StaffDirectory: document.getElementById("StaffDirectory"),
    Meetings: document.getElementById("Meetings"),
  };

  document.getElementById("btnMessages").addEventListener("click", () => {
    showTab("Messages");
  });
  document.getElementById("btnAnnouncement").addEventListener("click", () => {
    showTab("Announcement");
  });
  document.getElementById("btnStaff").addEventListener("click", () => {
    showTab("StaffDirectory");
  });
  document.getElementById("btnMeeting").addEventListener("click", () => {
    showTab("Meetings");
  });

  function showTab(tabName) {
    Object.values(tabs).forEach((tab) => tab.classList.add("hidden"));
    tabs[tabName].classList.remove("hidden");
  }

  showTab("Messages");
});

document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
  const tabContent = [
    document.getElementById("Messages"),
    document.getElementById("Announcement"),
    document.getElementById("StaffDirectory"),
    document.getElementById("Meetings"),
  ];

  if (!tabBtns.length) return;

  tabBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      // Reset all tabs to inactive (white/gray)
      tabBtns.forEach((b) => {
        b.classList.remove(
          "bg-emerald-600",
          "text-white",
          "border-emerald-600",
          "shadow"
        );
        b.classList.add(
          "bg-white",
          "text-gray-700",
          "border",
          "border-gray-200"
        );
      });

      // Activate clicked tab: stronger emerald + white text + subtle shadow
      btn.classList.remove("bg-white", "text-gray-700", "border-gray-200");
      btn.classList.add(
        "bg-emerald-600",
        "text-white",
        "border-emerald-600",
        "shadow"
      );

      // Hide all tab contents, then show selected
      tabContent.forEach((content) => {
        if (content) content.classList.add("hidden");
      });
      if (tabContent[idx]) tabContent[idx].classList.remove("hidden");
    });
  });

  // Set default active tab once (first tab)
  tabBtns[0].click();
});
