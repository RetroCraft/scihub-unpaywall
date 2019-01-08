if (typeof chrome !== "undefined") {
  browser = chrome;
}

function save_options() {
  console.log("click");

  var showOaColor = document.getElementById("show-oa-color").checked;
  var useSciHub = document.getElementById("use-sci-hub").checked;

  browser.storage.local.set({
    showOaColor,
    useSciHub
  });

  var status = document.getElementById("status");
  status.textContent = "Preference saved.";

  setTimeout(function() {
    status.textContent = "";
  }, 1000);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  browser.storage.local.get(
    {
      showOaColor: false,
      useSciHub: false
    },
    function(items) {
      document.getElementById("show-oa-color").checked = items.showOaColor;
      document.getElementById("use-sci-hub").checked = items.useSciHub;
    }
  );
}

document.addEventListener("DOMContentLoaded", restore_options);
document
  .getElementById("show-oa-color")
  .addEventListener("click", save_options);
document.getElementById("use-sci-hub").addEventListener("click", save_options);
