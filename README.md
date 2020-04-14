<h1>Interactive Frontend Development Milestone Project</h1>
Google Maps API project: I chose to build a platform that allows a user to search for restaurants in the UK.


## Demo
A live demo can be found [here](https://rameez1822534.github.io/interactive-milestone/).

<h2>Wireframes for the site</h2>

here: <a href="projects/interactive-project/wireframes/20200414_235818.jpg">Home </a>| 

<h2>UX</h2>
The purpose is for user to find restaurants in their city or town in the UK . The website will allow the users to find resturants based on their ratings in specific town or city in the UK.

The website uses Google Maps API to allow users search locations, choose what kind of restautrant they want to go and find all the details regarding restaurants available in that areas which
includes their telefone no , ratings and location.


The UX is designed in 3 easy steps. Where to go. What to do. Find out More.

<h2>Wireframes</h2>

<h2>User Stories</h2>
<ul>
<li>As a user, I want to find a restaurant near me in town or city in UK.</li>
<li>As a user, I want to find a restaurant with their customer reveiws.</li>
<li>As a user, I want to find a restaurant and be able to book a table by contacting them via telefone or their website</li>
<li>As a user, I want see this information on a map.</li>
<li>As a user, I want see this information on a table.</li>
</ul>
<h2>Features</h2>
<h3>Existing Features</h3>
Full Width, mobile friendly navigation menu - A navigation Menu that will collapse down when the resolution reduces, making a user-friendly experience no matter what device the user is on.
User-friendly online contact form on the website to allow tourist contact to find out more information about the areas.
A hero image with the search engine 
A maps section with listings section 
A fully interactive and functional contact section with  
Features Left to Implement

<h2>Technologies Used</h2>
<h3><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a></h3>
<li>I used JavaScript from the Google Maps API website and for the reset button</li>
<h3><a href="https://en.wikipedia.org/wiki/HTML5">HTML5</h3></a>
<li>HTML5 was used for the semantic structure and presenting the content of the webpage.</li>
<h3><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">CSS3</h3></a>
<li>CSS3 was used for the styling of the content to produce an aesthetically pleasing viewing experience.</li>
<h3><a href="https://getbootstrap.com/">Bootstrap</h3></a>
<li>Bootstrap provides responsives layouts and components such as the navigation menu for quick, easy, efficient web development, all in a mobile-first approach.</li>
<h3><a href="https://fontawesome.com/">Font Awesome</h3></a>
<li>Font Awesome was used for the social links, mainly the social media icons for a professional finish.</li>
<h3><a href="https://daneden.github.io/animate.css/">animate.css</h3></a>
<li>animate.css was used power bounceInDown effects applied hero text</li>
<h3><a href="https://www.emailjs.com/">Email JS</h3></a>
<li>I used Email JS to power the contact form</li>

<h1>Testing</h1>

Below is testing conducted on the website.

 <li>Initial index.html test on VisualCode Live, using text “Hello” after adding the initial structure (html, body, header, section, and footer). </li>
 
<h2>Testing the Contact form</h2>
<li>First I clicked the 'Send' button - No request was sent as no information was filled in.</li>
<li>I filled out the form without the @ symbol for the e-mail address. As expected the form failed to submit due to incorrect formatting of the e-mail address.</li>
<li>After filling in the form I clicked the 'Send' button again, this time the submission was successful. This is noted by the information appearing in the URL.</li>
<li>succesfully sending a test email using email.js</li>
 
<h2>Testing links betweens pages</h2>
For this section I tested all of the links between the pages, navigation bar and and links built into the page. Testing all of the links resulted in everything linking to another page in the website working as intended by staying within the tab.
All links to which the user is directed to another site opened in a separate browser tab. These links include login page with the sign in form.

<li>This site was tested across multiple browsers (Chrome, Microsorft Edge, FireFox) and on multiple mobile devices (iPhone 4, 5, 7, 8, X, iPad, iPad Pro, Galaxy S5, Pixel 2, and Pixel 2XL) to ensure compatibility and responsiveness.  </li>
<li>For testing the responsive aspect of the website I used a Google Chrome Developer Tools</li>
<li>During the testing phase there were issues with the responsiveness of the navbar as navbar collaspe wasn't working in mobile.</li>
<li>Validating the code was done with the help of <a href="https://validator.w3.org/nu/#textarea">Nu Html Checker</a> and validating of the CSS was done with the help of <a href="https://jigsaw.w3.org/css-validator/">W3C CSS Validation Service, Jigsaw</a></li>
<li>I validated my maps.js and sendemail.js with <a href="https://jshint.com/">JSHint</a></li>

<h1>Depolyment</h1>
The website was developed lovally on AWS cloud 9 anddeployed using Github Pages, you can view it <a href="https://tobinwebdesign.github.io/Interactive-Frontend-Development-Milestone-Project/">here</a>.
<li>To do this I had to create AWS Cloud 9 account.
Create a new GitHub repository and clone is to AWS cloud 9 Next, I committed files to said repository, and finally pushed files up to GitHub.</li>
<li>STEP 1: Create a new GitHub repository and clone is to AWS cloud 9</li>
<li>STEP 2: Commit files developed in AWS Cloud 9 to said repository </li>
<li>STEP 3: Push files up to GitHub  </li>
<li>STEP 4: Click on the settings tab in GitHub</li>
<li>STEP 5: Scroll down to the GitHub Pages section</li>
<li>STEP 6: Select master branch and click "SAVE" to publish to GitHub Pages</li>
<h1>Credits</h1>
<ul>
<li>I got the Google Maps Hotels API code from the <a href="https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch" rel="nofollow">Maps Platform</a> website</li>
<li>I got the Place Types code from the <a href="https://developers.google.com/places/supported_types" rel="nofollow">Place Types</a> page</li>
</ul>

## Credits
- https://www.w3schools.com/
- https://www.stackpath.com/
- https://mdbootstrap.com/
### Media
- The photos used in this site were obtained from www.pexels.com

<h2>Acknowledgements</h2>

<P>I would like to specially mention my mentor dbenga who helped me alot with issue i had with google maps api  </P>
