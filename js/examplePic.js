// variables max-width with code text ========================//
let leftExampleText = `<picture class="preview__picTag">
  <source
    srcset="../path/YourImage.jpeg"
    media="(min-width: 1140px)"
  />
  <source
    srcset="../path/YourImage.jpeg"
    media="(min-width: 900px)"
  />
  <source
    srcset="../path/YourImage.jpeg"
    media="(min-width: 700px)"
  />
  <source
    srcset="../path/YourImage.jpeg"
    media="(min-width: 700px)"
  />
  <img src="../path/YourImage.jpeg" alt="default image" />
</picture>
`;

let rightExampleText = `/* If you use IE 
you see the default image  */
.preview__picTag {
  max-width: 1140px;
}
.preview__picTag * {
  width: 100%;
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
