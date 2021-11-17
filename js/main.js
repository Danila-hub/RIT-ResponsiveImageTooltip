console.log("test");
document.querySelectorAll("code").forEach(function (element) {
  element.innerHTML = element.innerHTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
});

let leftExample = document.getElementById("htmlExample");
console.log(leftExample);
leftExample.textContent = `
<div class="widthMethod__inner">
    <div class="headingOfExamples">
      <h2>Max-width method:</h2>
      <a href="code_examples/WidthExamples.html" 
        class="bubbly-button"> See an example
      </a>
    </div>
    <div class="widthMethod__column">
      <div class="widthMethod__item">
        <img src="img/1300x200.png" alt="" />
        <img src="img/1300x400.png" alt="" />
      </div>
      <div class="widthMethod__item">
        <div class="widthMethod__row">
          <div class="widthMethod__image">
            <img src="img/400x600.png" alt="" />
          </div>
          <div class="widthMethod__image">
            <img src="img/400x600.png" alt="" />
          </div>
          <div class="widthMethod__image">
            <img src="img/400x600.png" alt="" />
          </div>
        </div>
      </div>
    </div>
</div>`;

let rightExample = document.getElementById("cssExample");
console.log(leftExample);

rightExample.textContent = `
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
/*--------------------*/
.exampleZone__codeInner {
  max-width: 600px;
}`;
