import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {
  paragraphs = [
    {
      title: 'About Me',
      content: [
        `Hello, I'm Sergiusz Kot. I am young energetic person who looks for a position of software tester.
        I would like to develop my skills in this area.`
      ]
    },
    {
      title: 'Skills',
      content: [
        `Experience and knowledge of Windows, Linux, JavaScript, jQuery, SQL, HTML, CSS,
        Bootstrap, Photoshop, Adobe XD, command line tools and scripting`,
        `Knowledge of debug consoles of common browsers`,
        `Excellent eye for details`,
        `High communication skills`,
        `Analytical thinking ability`,
        `Ability to learn new software quickly`
      ]
    },
    {
      title: 'Expierence',
      content: [
        `Feb 2019 - May 2019
        PRO-INTERNET Gdańsk - Service technician
        Fiber optic networks, LAN/WAN services, routers and switches set up`,
        `Sep 2017 - Apr 2018
        INONET Gdańsk - FTTH technician
        Installation of Internet Network and television services`
      ]
    },
    {
      title: 'Education',
      content: [
        `2018 - currently
        Państwowa Wyższa Szkoła Zawodowa, Elbląg - Information technology`,
        `2013 - 2017
        Zespół Szkół Mechanicznych, Elbląg - Information technology`
      ]
    },
    {
      title: 'Certificates',
      content: [
        `Codeacademy - SQL, HTML, CSS, Responsive Design, JavaScript, Sass`,
        `OKE Łomża - Diploma in Information Technology`,
        `English B1 (writing, reading, speaking)`,
        `Programming, technology news, playing chess, volleyball, speed skating, cycling`
      ]
    },
    {
      title: '',
      content: ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
