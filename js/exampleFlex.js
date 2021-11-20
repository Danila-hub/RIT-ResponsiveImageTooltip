// variables max-width with code text ========================//
let leftExampleText = `<div class="preview__rowFlex">
  <div class="preview__itemFlex">
    <img src="../path/YourImage.jpeg" alt="" />
  </div>
  <div class="preview__itemFlex">
    <img src="../path/YourImage.jpeg" alt="" />
  </div>
</div>
`;

let rightExampleText = `.preview__rowFlex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.preview__itemFlex {
  flex: 0 1 350px;
  padding: 0 5px;
}
.preview__itemFlex img {
  width: 100%;
  border-radius: 15px;
}
`;

//==================================================//
// replace code elements ===========================//

document.querySelectorAll("code").forEach(function (element) {
  element.innerHTML = element.innerHTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
});

//==================================================//

// add code examples to html code tag ==============//

let leftExample = document.getElementById("htmlExample");
leftExample.textContent = leftExampleText;

let rightExample = document.getElementById("cssExample");
rightExample.textContent = rightExampleText;

//==================================================//

// Copy buttons script =============================//

let copyHtmlButton = document.getElementById("copyHtmlButton");
copyHtmlButton.onclick = function () {
  navigator.clipboard.writeText(leftExampleText).then(
    function () {
      copyHtmlButton.textContent = "Copied!";
      setTimeout(() => {
        copyHtmlButton.textContent = `Copy`;
        let iconFont = document.createElement("span");
        iconFont.setAttribute("class", "icon-copyIcon copyButtonIcon");
        console.log(iconFont);
        copyHtmlButton.appendChild(iconFont);
      }, 1000);
    },
    function () {
      //If fail//
    }
  );
};

let copyCssButton = document.getElementById("copyCssButton");
copyCssButton.onclick = function () {
  navigator.clipboard.writeText(rightExampleText).then(
    function () {
      copyCssButton.textContent = "Copied!";
      setTimeout(() => {
        copyCssButton.textContent = `Copy`;
        let iconFont = document.createElement("span");
        iconFont.setAttribute("class", "icon-copyIcon copyButtonIcon");
        console.log(iconFont);
        copyCssButton.appendChild(iconFont);
      }, 1000);
    },
    function () {
      //If fail//
    }
  );
};
//==================================================//
