import React, { Component } from 'react';
import './links.css';

class Links extends Component {
	render() {
		return (
			<div className="icons">
                <a href="mailto:vtn1989@gmail.com" title="Contact Email">
                	<i className="fa fa-envelope-o"></i>
                </a>
                <a href="https://www.linkedin.com/in/vtn1989" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                	<i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://github.com/ulukfuni" target="_blank" rel="noopener noreferrer" title="GitHub">
                	<i className="fa fa-github-square"></i>
                </a>
                <a href="https://drive.google.com/open?id=10m10Tp4sbOW8gjXWbzO6oqZknuznjoeg" title="Resume">
                	<i className="fa fa-file-o"></i>
                </a>
            </div>
		);
	}
}


export default Links;