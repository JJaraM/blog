import * as React from 'react';

export class Nav extends React.Component {

    constructor() {
        super();
        window.addEventListener('scroll', this.handleScroll);
        
    }
   
    componentDidMount() {
        window.addEventListener('hashchange', this.addMargin);
    }

    handleScroll(event) {
        const pos = window.scrollY;
        const cssClass = "fixed-top";
        const element = document.getElementById("main-header");
      
        if (pos > 85) {
            element.classList.add(cssClass);
         } else {
            element.classList.remove(cssClass);
         }

    }

    addMargin(event) {
        //const id = event.oldURL.split('#')[1];
        //document.getElementById(id).classList.add("show-selection");
    }

    render() {
        return (
            <nav id="main-header" className='navbar navbar-expand-lg navbar-dark '>
              { this.props.children }
            </nav>
          );
    }
}