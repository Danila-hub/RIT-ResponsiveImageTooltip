// variables max-width with code text ========================//
let leftExampleText = `<div class="preview__row">
  <div class="preview__item">
    <img src="../path/YourImage.jpeg" alt="" />
  </div>
  <div class="preview__item">
    <img src="../path/YourImage.jpeg" alt="" />
  </div>
  <div class="preview__item">
    <img src="../path/YourImage.jpeg" alt="" />
  </div>
  <div class="preview__item">
    <img src="../path/YourImage.jpeg" alt="" />
  </div>
</div>
`;

let rightExampleText = `.preview__row {
  display: flex;
  flex-flow: row wrap;
}
.preview__item {
  width: calc(100% / 4);
  margin: 0px 4px;

  height: 0;
  position: relative;
  overflow: hidden;
  padding-bottom: calc(56.25% / 4);
}
.preview__item img {
  width: 100%;
  height: auto;
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  margin: auto;
}
`;

//==================================================//
// replace code elements ===========================//

document.querySelectorAll('code').forEach(function (element) {
  element.innerHTML = element.innerHTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
});

//==================================================//

// add code examples to html code tag ==============//

let leftExample = document.getElementById('htmlExample');
leftExample.textContent = leftExampleText;

let rightExample = document.getElementById('cssExample');
rightExample.textContent = rightExampleText;

//==================================================//

// Copy buttons script =============================//

let copyHtmlButton = document.getElementById('copyHtmlButton');
copyHtmlButton.onclick = function () {
  navigator.clipboard.writeText(leftExampleText).then(
    function () {
      copyHtmlButton.textContent = 'Copied!';
      setTimeout(() => {
        copyHtmlButton.textContent = `Copy`;
        let iconFont = document.createElement('span');
        iconFont.setAttribute('class', 'icon-copyIcon copyButtonIcon');
        console.log(iconFont);
        copyHtmlButton.appendChild(iconFont);
      }, 1000);
    },
    function () {
      //If fail//
    }
  );
};

let copyCssButton = document.getElementById('copyCssButton');
copyCssButton.onclick = function () {
  navigator.clipboard.writeText(rightExampleText).then(
    function () {
      copyCssButton.textContent = 'Copied!';
      setTimeout(() => {
        copyCssButton.textContent = `Copy`;
        let iconFont = document.createElement('span');
        iconFont.setAttribute('class', 'icon-copyIcon copyButtonIcon');
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
