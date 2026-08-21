/*
 * Client-side password gate for the DM site.
 *
 * GitHub Pages is static hosting — there's no server to check a password
 * against, so this is a table-only deterrent (keeps a curious player from
 * casually browsing /dm), not real security. Anyone who opens dev tools
 * can read this file. That tradeoff is intentional for a one-shot.
 *
 * To change the password: edit PASSWORD below before you publish.
 */
(function () {
  var PASSWORD = "ferrox";
  var STORAGE_KEY = "benediction-of-dis-dm-auth";

  if (localStorage.getItem(STORAGE_KEY) === "ok") {
    return;
  }

  document.documentElement.style.visibility = "hidden";

  document.addEventListener("DOMContentLoaded", function () {
    var style = document.createElement("style");
    style.textContent =
      "#dm-gate-overlay{position:fixed;inset:0;background:#0B0C0F;" +
      "display:flex;align-items:center;justify-content:center;z-index:99999;" +
      "font-family:'JetBrains Mono',monospace;}" +
      ".dm-gate-box{background:#14161B;border:1px solid #2A2D34;border-radius:8px;" +
      "padding:32px 36px;text-align:center;box-shadow:0 40px 80px rgba(0,0,0,0.65);}" +
      ".dm-gate-tag{color:#C1502E;font-size:11px;letter-spacing:2px;margin-bottom:14px;" +
      "text-transform:uppercase;}" +
      ".dm-gate-label{color:#E9E4D8;font-size:13px;margin-bottom:14px;}" +
      ".dm-gate-row{display:flex;gap:8px;justify-content:center;}" +
      ".dm-gate-input{background:#0F1013;border:1px solid #3A3F4A;border-radius:4px;" +
      "color:#E9E4D8;padding:8px 10px;font-family:inherit;font-size:13px;width:180px;}" +
      ".dm-gate-btn{background:#D4AF37;border:none;border-radius:4px;color:#0B0C0F;" +
      "padding:8px 16px;font-family:inherit;font-weight:600;cursor:pointer;}" +
      ".dm-gate-error{color:#C1502E;font-size:11px;margin-top:10px;min-height:14px;}";
    document.head.appendChild(style);

    var overlay = document.createElement("div");
    overlay.id = "dm-gate-overlay";
    overlay.innerHTML =
      '<div class="dm-gate-box">' +
      '<div class="dm-gate-tag">DM Materials</div>' +
      '<div class="dm-gate-label">Enter the table password</div>' +
      '<div class="dm-gate-row">' +
      '<input type="password" class="dm-gate-input" id="dm-gate-input" autocomplete="off" />' +
      '<button class="dm-gate-btn" id="dm-gate-btn" type="button">Enter</button>' +
      "</div>" +
      '<div class="dm-gate-error" id="dm-gate-error"></div>' +
      "</div>";
    document.body.appendChild(overlay);
    document.documentElement.style.visibility = "visible";

    var input = document.getElementById("dm-gate-input");
    var btn = document.getElementById("dm-gate-btn");
    var err = document.getElementById("dm-gate-error");

    function tryUnlock() {
      if (input.value === PASSWORD) {
        localStorage.setItem(STORAGE_KEY, "ok");
        overlay.remove();
      } else {
        err.textContent = "Incorrect password.";
        input.value = "";
        input.focus();
      }
    }

    btn.addEventListener("click", tryUnlock);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") tryUnlock();
    });
    input.focus();
  });
})();
