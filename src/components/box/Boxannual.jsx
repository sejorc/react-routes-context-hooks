import React, { Component } from 'react';
//Importación de componentes.


/*
* This class represents the box that gives us annual information.
*/
export default class Boxannual extends Component {

    render() {

        return (
            <>
                {/* Earnings (anual) Card Example */}
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Earnings (Annual)
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    $215,000
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )


    }

}