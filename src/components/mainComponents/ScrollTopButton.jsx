import React, { Component } from 'react';
//Importación de componentes.

/*
* This class implements the scroll button.
*/

export default class ScrollTopButton extends Component {


    render() {

        return (
            <>
                {/* Scroll to Top Button */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

            </>
        )


    }

}