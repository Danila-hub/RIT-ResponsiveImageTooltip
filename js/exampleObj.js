// variables max-width with code text ========================//
let leftExampleText = `<div class="preview__objectFitRow">
    <div class="preview__objectFitItem">
        <img src="../img/400x600.png" alt="" />
    </div>
    <div class="preview__objectFitItem">
        <img src="../img/600x800.png" alt="" />
    </div>
    <div class="preview__objectFitItem">
        <img src="../img/800x400.png" alt="" />
    </div>
</div>
`;

let rightExampleText = `.preview__objectFitRow {
  display: flex;
  flex-flow: row nowrap;
}
.preview__objectFitItem {
  height: 300px;
  padding: 0 5px;
}
.preview__objectFitItem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* If you are using a smartphone 
with a display resolution of up 
to 556px you see this example:  */
@media screen and (max-width: 566px) {
  .preview__objectFitRow {
    display: flex;
    flex-flow: column nowrap;
  }
  .preview__objectFitItem {
    height: 170px;
    padding: 5px 5px;
  }
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
