import * as React from 'react';

export class Nav extends React.Component {
   
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
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

    render() {
        return (
            <nav id="main-header" className={`navbar navbar-expand-lg`}>
              { this.props.children }
            </nav>
          );
    }
}