class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .top-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: auto;
        align-items: center;
      
      }

      #header-title {
        font-size: 8.9vmin;
      }
        
      /* slider css */
      /* The switch - the box around the slider */
      .slide {
        float: right;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }
      
      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      
      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      
      input:checked + .slider {
        background-color: #2196f3;
      }
      
      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }
      
      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
      
      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }
      
      .slider.round:before {
        border-radius: 50%;
      }

      .logo {
        vertical-align: middle;
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
      </style>
      <header>
        <div class="top-container">
            <img src="images/number_logo.png" class="logo" />
            <div id="header-title">Mystery Number Hunt</div>
        </div>
      </header>
      <script>
      const slider = document.getElementById('slide')
      //DarkMode js

      slider.addEventListener('click', () => {
          if (docBody.classList.contains('light')) {
              docBody.classList.add('dark')
              docBody.classList.remove('light')
              // buttonContainer
      
          }
          else if (docBody.classList.contains('dark')) {
              docBody.classList.add('light')
              docBody.classList.remove('dark')
          }
      })
      </script>
    `;
  }
}

customElements.define("header-component", Header);
