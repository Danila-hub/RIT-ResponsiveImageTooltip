// variables max-width with code text ========================//
let leftExampleText = `<div class="preview__row">
  <div class="preview__item">
    <div class="preview__image">
    </div>
    <div class="preview__text">
      <h3>Your heading</h3>
      <p>
        Your text
      </p>
    </div>
  </div>
  <div class="preview__item">
    <div class="preview__image">
    </div>
    <div class="preview__text">
      <h3>
        Your heading
      </h3>
      <p>
        Your text
      </p>
    </div>
  </div>
</div>
`;

let rightExampleText = `.preview__row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.preview__item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}
.preview__text {
  flex: 1 0 150px;
  padding-left: 12px;
}
.preview__item h3 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
.preview__item p {
  font-size: 14px;
}
.preview__image {
  width: 96px;
  height: 96px;
  background-image: url('../path/YourImage.jpeg');
  background-size: cover;
  border-radius: 50%;
}
@media screen and (max-width: 960px) {
  .preview__row {
    flex-wrap: wrap;
  }
  .preview__item {
    padding: 10px 10px;
  }
  .preview__image {
    width: 46px;
    height: 46px;
  }
  .preview__item h3 {
    font-size: 16px;
  }
  .preview__item p {
    font-size: 12px;
  }
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
