
## install angular:
>npm install -g @angular/cli@latest

>ng new my-app --style=scss --routing=true

>cd my-app

>ng serve --open

>ng g m path/moduleName --routing=true 

>ng g c componentName --module=moduleName --export=true --skip-tests=true 

>ng g class

>ng g [s|d|p|g] path/name

## Bootstrap:

npm install bootstrap

Note that starting with ng-bootstrap 12 (with bootstrap 5 support), @popperjs/core is defined as a peer dependency, so be sure to include it in your package.json.

>npm install @popperjs/core

```
  Bootstrap style -  Solution 0: import bootstrap css and js index.html
  Bootstrap style - Solution 1:
  "styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    ou
    "./node_modules/bootstrap/scss/bootstrap.scss",
    "src/styles.scss"
  ],
  Bootstrap style -  Solution 2: in custom.scss: @import '~bootstrap/scss/bootstrap';

  Popper -  Solution 0: import popper.js index.html
  Popper - Solution 1:
  "scripts": [
    Only if u want to use things like dropdown, etc...
    "./node_modules/@popperjs/core/dist/umd/popper.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
  or
  "scripts": [
    Only if u want to use things like dropdown, etc...
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
  ]
  Popper - Solution 2:
  Use NGBootstrap Widget Library in Angular
```

The goal of ng-bootstrap is to completely replace JavaScript implementation for components.

# NGBootstrap Widget Library in Angular

>ng add @angular/localize

>ng add @ng-bootstrap/ng-bootstrap

>  or 

>npm install --save @ng-bootstrap/ng-bootstrap

Import the NgbModule module and declare inside the imports array:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now you can use any of the given below NG Bootstrap widget in your Angular project.

+ Tab
+ Modal
+ Alert
+ Tooltip
+ Carousel
+ Collapse
+ Accordion
+ Pagination
+ Date-picker


# Bootstrap-icons

> npm i bootstrap-icons --save

```
into custom.scss
@import "~bootstrap-icons/font/bootstrap-icons.css";
```

```
in any html
<i class="bi bi-star-fill" style="font-size: 30px;color: green;text-shadow: 1px 1px 1px #ccc;"></i>
---
.green {
  color: green;
  text-shadow: 1px 1px 1px #ccc;
  font-size: 2.5em;
}
<a href="#"> <i class="bi bi-instagram green" ></i></a>
---
.link {
     cursor: pointer;
}
<span class="link">  <i class="bi bi-instagram green" ></i></span>
---
Rounded icon:
i.bi {
  display: inline-block;
  border-radius: 50px;
  box-shadow: 0px 0px 2px #6b6b6b;
  padding: 0.2em 0.3em;
}
squared icon:
i.bi {
  display: inline-block;
  border-radius: 10px 10px;
  box-shadow: 0px 0px 2px #6b6b6b;
  padding: 0.2em 0.3em;
}
<i class="bi bi-twitter"></i>
```

> USING SVG

WE can copy an icon into root this way:

```
"assets": [
      "src/favicon.ico",
      "src/assets",
      {
        "glob": "arrow-up-left.svg", <= copy the arrow-up-left.svg
        "input": "./node_modules/bootstrap-icons/",
        "output": "/b-icons/"
      }
    ],
```
And use it that way : 
```
 <svg class="bi" width="32" height="32" fill="currentColor">
      <use xlink:href="bootstrap-icons.svg#heart-fill"/>
  </svg>
```
WE can copy all icon into assets this way:

```
"assets": [
      "src/favicon.ico",
      "src/assets",
      {
        "glob": "*.svg", <= copy all .svg
        "input": "./node_modules/bootstrap-icons/",
        "output": "/b-icons/"
      }
    ],
```
And use it that way : 
```
 <svg class="bi" width="32" height="32" fill="currentColor">
      <use xlink:href="bootstrap-icons.svg#heart-fill"/>
  </svg>
```

# ngx-bootstrap-icons

This Angular module allows you to use the Bootstrap Icons in your angular application without additional dependencies.

>npm i ngx-bootstrap-icons --save

> check the doc: https://www.npmjs.com/package/ngx-bootstrap-icons


# Font Awesome5 icons

  - Using webfont: deprecated and has vulnerability

>npm install @fortawesome/fontawesome-free-webfonts


Afterwards, You can easily use any Font Awesome5 icons in your project.

Just visit [Font Awesome5 website](https://fontawesome.com/icons) and search for any free icon you’d like to use in your project.

```
"styles": [
      "node_modules/bootstrap/scss/bootstrap.scss",
      "src/styles.scss",
      "node_modules/@fortawesome/fontawesome-free-webfonts/css/fontawesome.css",
      "node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-regular.css",
      "node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-brands.css",
      "node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-solid.css"              
]
```

---
- Without webfont:

```
using add:
ng add @fortawesome/angular-fontawesome@<version>
or
npm i @fortawesome/angular-fontawesome
```

```
using npm
$ npm install @fortawesome/fontawesome-svg-core
$ npm install @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
# See Compatibility table below to choose a correct version
$ npm install @fortawesome/angular-fontawesome@<version>

```


image 1:
![image 1](note/fontawesome-icons.jpg)

Copy the icon code from FontAwesome5 website.

image 2:
![image 1](note/fontawesome-icons2.jpg)

Go to your any app.component.html file and paste the given below code.
```
<i class="fab fa-angular"></i>
```

>ng serve --open

Docs:
> https://github.com/FortAwesome/angular-fontawesome/blob/HEAD/docs/usage.md


## HostListener
see AppComponent

## :Host