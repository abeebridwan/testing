<!Doctype html>
  <html lang="en-Us">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
    <meta name="description" content="Upage -- portfolio">
    <meta name="keywords" content="Upage,portfolio,HTML,CSS">
    <meta name="author" content="Abeeb Ridwan">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
    <title>Upage....</title>
    <link rel="shortcut icon" type="image/png" href="images/icon.png"/>
    <style>
      *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: arial sans-serif;
        font-size: 1em;
        }
      body{
        padding: 40px;
        display: flex;
        justify-content: space-between;
      }
      aside{
        display: none;
        width: 10%;
        padding-top: 90px;
        text-align: center;
      }
      section{
        width: 100%;
      }
      aside div{
        width: 88%;
        height: 90px;
        margin: 10px auto 15px;
        border: 1px solid white;
      }
      @media only screen and (min-width: 533px) {
        section{
          width: 90%;
           margin-left: 40px;
        }
        aside{
          display: block;
        }
        .projects{
          display: grid;
          grid-template-columns: auto auto;
        }
        .project{
          margin: 5px !important;

        }
      }

      @media only screen and (min-width: 760px) {
        .projects{
          grid-template-columns: auto auto auto;
        }

      }

      #cyan{
        background-color: cyan;
      }
      #grey{
        background-color: grey;
      }
      #brown{
        background-color: brown;
      }
      header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: right;

      }
      hr{
        height: 5px;
        background-color: grey;
        margin-bottom: 45px;
      }
      article{
        margin-top: 20px;
      }
      article div{
        text-align: center;
      }
      article h4{
        margin:25px 0 10px 0;
      }
      .projects{
          margin-top: 20px;
        }
      .project{
        border: 5px solid #595bcc;
        border-radius: 10%;
        margin: 25px auto;
        max-width: 302px;
      }
      .projects a{
        text-decoration: none;
        display: block;
      }
      .projects img{
        border-radius: 10%;
        max-width: 100%;
      }

      /* All css code below are for slideShow images*/
        .mySlides {display: none}
        img {
          vertical-align: middle;
          border-radius: 5%;
          max-width: 100%;
        }

        .slideshow-container {
          max-width: 1000px;
          position: relative;
          margin: auto;
        }

        .prev, .next {
          cursor: pointer;
          position: absolute;
          top: 50%;
          width: auto;
          padding: 16px;
          margin-top: -22px;
          color: #fff;
          font-weight: bold;
          font-size: 40px;
          transition: 0.6s ease;
          border-radius: 0 3px 3px 0;
        }

        .next {
          right: 0;
          border-radius: 3px 0 0 3px;
        }

        .prev {
          left: 0;
        }

        .prev:hover, .next:hover {
          background-color: rgba(192,192,192,0.3);
        }

        .numbertext {
          color: #f2f2f2;
          font-size: 20px;
          padding: 8px 12px;
          position: absolute;
          top: 0;
        }

        .dot {
          cursor: pointer;
          height: 15px;
          width: 15px;
          margin: 0 2px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.6s ease;
        }

        .active, .dot:hover {
          background-color: #717171;
        }

        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 1.5s;
          animation-name: fade;
          animation-duration: 1.5s;
        }

        @-webkit-keyframes fade {
          from {opacity: .4}
          to {opacity: 1}
        }

        @keyframes fade {
          from {opacity: .4}
          to {opacity: 1}
        }

    </style>
  </head>
  <body>
      <aside>
        <div  id="grey"></div>
        <div  id="brown"></div>
        <div id="cyan"></div>
        <p>F8981CC</p>
        <p>BCBBBB</p>
        <p>P8747704</p>
      </aside>
      <section>
        <header>
          <img src="images/icon.png" alt="u-logo" width="70" height="60" />
          <div>
            <h3>ABEEB RIDWAN</h3>
            <p>FRONT-END NINJA</p>
          </div>
        </header>
          <article>
            <hr/>
            <div class="slideshow-container">

                <div class="mySlides fade">
                  <div class="numbertext">1 / 4</div>
                  <img src="images/slideimg2.png" alt="slide image 1"  style="width:100%">
                </div>

                <div class="mySlides fade">
                  <div class="numbertext">2 / 4</div>
                  <img src="images/slideimg3.png" alt="slide image 2"  style="width:100%">
                </div>

                <div class="mySlides fade">
                  <div class="numbertext">3 / 4</div>
                  <img src="images/slideimg4.jpg" alt="slide image 3"  style="width:100%">
                </div>

                <div class="mySlides fade">
                  <div class="numbertext">4 / 4</div>
                  <img src="images/slideimg1.png" alt="slide image 4" style="width:100%">
                </div>

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>

                </div>
                <br>

                <div style="text-align:center">
                  <span class="dot" onclick="currentSlide(1)"></span>
                  <span class="dot" onclick="currentSlide(2)"></span>
                  <span class="dot" onclick="currentSlide(3)"></span>
                  <span class="dot" onclick="currentSlide(4)"></span>
                </div>

          </article>
        <article>
            <h4><strong>Featured Work</strong></h4>
          <div class="projects">

            <div class="project">
              <a href="#" target="_blank">
              <img src="images/projectimg1.jpg" alt="project image" width="300" height="170" />
              <h3><strong>Cat Clicker Premium</strong></h3>
              <p>########1</p>
              </a>
            </div>


            <div class="project">
              <a href="#" target="_blank" >
              <img src="images/projectimg2.png" alt="project image" width="300" height="170"/>
              <h3><strong>Memory Game</strong></h3>
              <p>########2</p>
              </a>
            </div>


            <div class="project">
              <a href="#" target="_blank" >
              <img src="images/projectimg3.jpg" alt="project image" width="300" height="170" />
              <h3><strong>Upgraded portfolio</strong></h3>
              <p>#######3</p>
              </a>
            </div>

            <div class="project">
              <a href="#" target="_blank">
              <img src="images/projectimg1.jpg" alt="project image" width="300" height="170" />
              <h3><strong>Cat Clicker Premium</strong></h3>
              <p>########1</p>
              </a>
            </div>

            <div class="project">
              <a href="#" target="_blank" >
              <img src="images/projectimg2.png" alt="project image" width="300" height="170"/>
              <h3><strong>Memory Game</strong></h3>
              <p>########2</p>
              </a>
            </div>


            <div class="project">
              <a href="#" target="_blank" >
              <img src="images/projectimg3.jpg" alt="project image" width="300" height="170" />
              <h3><strong>Upgraded portfolio</strong></h3>
              <p>#######3</p>
              </a>
            </div>

          </div>
          </article>
      </section>
      <script>
        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        function currentSlide(n) {
          showSlides(slideIndex = n);
        }

        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
        }
      </script>
    </body>
  </html>
