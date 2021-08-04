<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D :D :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
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
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ShenShu2016/uwcssa_ca">
    <img src="https://user-images.githubusercontent.com/21266146/127352310-1b20acac-c326-421d-8fd0-0c7e94f484e3.PNG" alt="Logo" width="365" height="460">
    
  </a>
  
  
  <h3 align="center">Web Development of CSSA - University of Windsor Chinese Student & Scholar Association</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/ShenShu2016/uwcssa_ca"><strong>Explore the docs »</strong></a>
    <br />
  <a> The UWCSSA project is a web development project designed to provide an efficient working platform for the University of Windsor Chinese Students and Scholars Association and a student forum for University of Windsor students.</a>
  <br/>
    <a href="https://uwcssa.ca">View Demo</a>
    ·
    <a href="https://github.com/ShenShu2016/uwcssa_ca/issues">Report Bug</a>
    ·
    <a href="https://github.com/ShenShu2016/uwcssa_ca/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#motiation">Motiation</a></li>
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#support">Support</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description`

### Motiation
* To optimize the management of the student council (UWINCSSA) as well as its efficient operation. 
* To build relationships among the student council, students and the local community and have them engaged.
* To improve accessibility.


### Built With
* [<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][webdevplaylist]<br />
* [<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][webdevplaylist]<br />
* [<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][webdevplaylist]<br />
* [<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />][webdevplaylist]<br />
* [<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />][webdevplaylist]<br />
* [<img align="left" alt="SQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" />][webdevplaylist]<br />
* [<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][webdevplaylist]<br />
* [<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />][webdevplaylist]<br />
* [<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][webdevplaylist]<br />


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ShenShu2016/uwcssa_ca.git
   ```
2. Prepare & start Frontend Docker Contanier
   ```sh
   cd ../uwcssa_ca/frontend
   docker-compose build
   docker-compose up
   ```
3. Prepare & start Backend & PostgreSQL Docker Contaniers
   ```sh
   cd ../uwcssa_ca/backend
   docker-compose build
   docker-compose up
   ```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).

<!-- CONTRIUTORS -->
## Contributors
The following people have contributed to the project:

* [Shen Shu](https://shushengacademy.com/zh-hans/) [![wakatime](https://wakatime.com/badge/github/ShenShu2016/uwcssa_ca.svg)](https://wakatime.com/badge/github/ShenShu2016/uwcssa_ca)
* [Kerun Pan](https://github.com/KerunPan)
* [Shikai(Zoe) Jin](https://github.com/shikaijin) [![wakatime](https://wakatime.com/badge/github/shikaijin/uwcssa_ca.svg)](https://wakatime.com/badge/github/shikaijin/uwcssa_ca)
* [Jinhua Long](https://github.com/lzg187ljh)
* [ChangkuanGao](https://github.com/gao14o)
* [Fanyu Zeng](https://github.com/CokeUltraman) [![wakatime](https://wakatime.com/badge/github/CokeUltraman/uwcssa_ca.svg)](https://wakatime.com/badge/github/CokeUltraman/uwcssa_ca)
* [Heng Wei](https://github.com/theOGcat)
* [Changye Ma](https://github.com/ChangyeMa)
* [Yanhao Wang](https://github.com/DG-xixuan)
* [Chengyue Wei](https://github.com/KevinVVei)
* [Mike Yu](https://github.com/mikezerone)



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Home Page - [@UWCSSA.ca](https://uwcssa.ca)

Project Link: [https://github.com/ShenShu2016/uwcssa_ca](https://github.com/github_username/repo_name)

<!-- Support -->
## Support
Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* 







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/ShenShu2016/uwcssa_ca/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ShenShu2016/uwcssa_ca.svg?style=for-the-badge
[forks-url]: https://github.com/ShenShu2016/uwcssa_ca/network/members
[stars-shield]: https://img.shields.io/github/stars/ShenShu2016/uwcssa_ca.svg?style=for-the-badge
[stars-url]: https://github.com/ShenShu2016/uwcssa_ca/stargazers
[issues-shield]: https://img.shields.io/github/issues/ShenShu2016/uwcssa_ca.svg?style=for-the-badge
[issues-url]: https://github.com/ShenShu2016/uwcssa_ca/issues
[license-shield]: https://img.shields.io/github/license/ShenShu2016/uwcssa_ca.svg?style=for-the-badge
[license-url]: https://github.com/ShenShu2016/uwcssa_ca/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/shenshu

[webdevplaylist]: https://github.com/ShenShu2016/uwcssa_ca

