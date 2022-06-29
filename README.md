<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/markosneiders/ZillaPot">
    <img src="README_images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">ZillaPot</h3>

  <p align="center">
    First sunk cost game on the Zilliqa chain
    <br />
    Built for the ZILHIVE challenge in the GR14 hackathon
    <br />
    <a href="https://github.com/markosneiders/ZillaPot"><strong>Try it out »</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-gaols">Project Goals</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#creators">Creators</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About The Project
ZillaPot is a virtual crypto casino built for the Zilliqa chain. The concept revolves around pots. The idea is a user creates a pot which starts a clock, when this clock expires the last person to deposit gets the whole pot. The catch is that there is an minimum deposit amount which increases each deposit aswell as the remaining time increases per deposit.


# Project goals
* Provide a fun dapp for Zilliqa users to interact with the community and have fun. 
* Increase Zilliqa's network engagment and trading volume.
* Draw in more ZillaPot and Zilliqa user by prompting to share to web 2.0 social platforms.

# Features
* Ability to view, create, claim and deposit to pots.
* Share your winning moments on web 2.0 social platforms such as Twitter, Facebook, Reddit and more.
* Login with ZilPay.
* Carefully crafted and gorgeous design which is filled to the brim with many small details to enhance the user experience.
* Profile page to view your stats
* Pots page to view all pots

# Pages
## Landing page
A gorgeous landing page welcomes the user to ZillaPot. From here the user can log in with their ZilPay account and by scrolling down get a quick understanding of the app.
[![landing-screen][landing-screen]](https://example.com)
## Pots screen
The pot screen is the main page of ZillaPot. Here a user can view all the pots created on ZillaPot with powerful sorting tools.
The user can view pots by categories such as:
* All pots
* Active pots
* Expired pots
* Joined pots
* Won pots
* Lost pots

And sort them by: 
* Total pot value
* Buy-in amount
* Time left
* Contributions

Clicking on a pot will open the pot buy page.
[![pots-screen][pots-screen]](https://example.com)

## Pot buy-in page
Here the user can view information such as deposit history on all pots (active and expired) aswell as deposit and claim ZIL. There is also an info menu which shows detailed pot details.
[![potBuy-screen][potBuy-screen]](https://example.com)

## Pot creation page
In the pot creation page the user can create a new pot by specifing the parameters. The parameters are as follows:
* Pot starting amount in ZIL
* Minimum deposit increase in %
* Pot time in blocks
* Pot time increase in blocks

Additionally there is a help menu which explains each parameter in great detail.
[![potCreate-screen][potCreate-screen]](https://example.com)


## Help/About page
The help/about page contains information about the dapp and it's creation aswell as some more help cards to guide the user if he is stuck.

[![help-screen][help-screen]](https://example.com)

## Profile page
In the profile page the user can view their stats such as how many pots they have joined, won and lost. Additionally the user can choose to log out of the dapp.

[![profile-screen][profile-screen]](https://example.com)

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Scilla](https://scilla-lang.org/index.html)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
# Getting Started

## Demo

You can try out ZillaPot without installing it locally [here](https://example.com). Simply log in with ZilPay and have fun!


## Prerequisites

Make sure you have the latest [node and npm](https://nodejs.org/en/download/) version. 

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/markosneiders/ZillaPot.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the project
   ```js
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


# Creators
ZillaPot was made with love by @zappingmadnnes and @markosneiders <3
* @zappingmadnnes created the gorgeous front-end
* @markosneiders created the Scilla smart contract which drives the dapp 

We learned so many new things and concepts while creating ZillaPot and would like to thank ZILHIVE for the challenge! 

<!-- LICENSE -->
# License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
# Acknowledgments

* [ZilPay](https://zilpay.io/)
* [Scilla](https://scilla-lang.org/index.html)
* [Zilliqa](https://www.zilliqa.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/markosneiders/ZillaPot.svg?style=for-the-badge
[contributors-url]: https://github.com/markosneiders/ZillaPot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/markosneiders/ZillaPot.svg?style=for-the-badge
[forks-url]: https://github.com/markosneiders/ZillaPot/network/members
[stars-shield]: https://img.shields.io/github/stars/markosneiders/ZillaPot.svg?style=for-the-badge
[stars-url]: https://github.com/markosneiders/ZillaPot/stargazers
[issues-shield]: https://img.shields.io/github/issues/markosneiders/ZillaPot.svg?style=for-the-badge
[issues-url]: https://github.com/markosneiders/ZillaPot/issues
[license-shield]: https://img.shields.io/github/license/markosneiders/ZillaPot.svg?style=for-the-badge
[license-url]: https://github.com/markosneiders/ZillaPot/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: README_images/screenshot.png
[pots-screen]: README_images/pots_screen.png
[landing-screen]: README_images/landing_screen.png
[potBuy-screen]: README_images/potBuy_screen.png
[potCreate-screen]: README_images/potCreate_screen.png
[help-screen]: README_images/help_screen.png
[profile-screen]: README_images/profile_screen.png
