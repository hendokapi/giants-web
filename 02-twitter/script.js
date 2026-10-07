const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usernameInput = document.querySelector("#username");
  const tweetInput = document.querySelector("#tweet");
  console.log("sta funzionando");
  const username = usernameInput.value;
  const tweetContent = tweetInput.value;
  console.log(username, tweetContent);

  const tweetElement = document.createElement("div"); // <div></div>
  tweetElement.classList.add("tweet"); // <div class="tweet"></div>
  tweetElement.innerHTML = `
    <p>
        <strong>${username}: </strong>
        ${tweetContent}
    </p>
  `;
  // <div class="tweet"><p><strong>${username}</strong>${tweetContent}</p></div>
  tweetsContainer.insertBefore(tweetElement, tweetsContainer.firstChild);
  usernameInput.value = "";
  tweetInput.value = "";
});
