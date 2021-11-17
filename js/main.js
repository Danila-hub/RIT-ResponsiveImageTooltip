// variables with code text ========================//
let leftExampleText = `
<div class="preview__row">
  <div class="preview__img">
    <img src="../path/YourImage.jpeg" alt="image" />
  </div>
  <div class="preview__img">
    <img src="../path/YourImage.jpeg" alt="image" />
  </div>
</div>
`;

let rightExampleText = `
.preview__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.preview__img {
  max-width: 460px;
}
.preview__img img {
  width: 100%;
  padding: 0px 5px;
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
    },
    function () {
      //If fail//
    }
  );
};
//==================================================//
