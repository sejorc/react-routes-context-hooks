import React, { Component } from 'react';
//Importación de componentes.

/*
* This class implements the header of page.
*/

export default class Pageheadin extends Component {


    render() {

        return (
            <>
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate
                        Report</a>
                </div>
            </>
        )


    }

}