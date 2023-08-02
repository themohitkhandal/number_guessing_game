class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        .bottom-link {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          a:link {
            text-decoration: none;
          }
          
          a:visited {
            text-decoration: none;
          }
          
          a:hover {
            text-decoration: underline;
          }
          
          a:active {
            text-decoration: underline;
          }
        </style>
        <footer style="position: fixed;
        bottom: 0;
        width: 100%;
        margin-bottom: 20px
        ">
        <!-- <p>Developer: Mohit Khandal</p> -->
        <div class="bottom-link">
          <img
            src="/images/github-mark.svg"
            alt="github"
            style="height: 20px; width: 20px; margin-right: 10px;"
          />
          <a href="https://github.com/themohitkhandal" target="_blank">themohitkhandal</a>
        </div>
      </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
