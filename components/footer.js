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
            style="height: 20px; width: 20px; margin-right: 10px; "
          />
          <a href="https://github.com/themohitkhandal" target="_blank">themohitkhandal</a>
        </div>
      </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
