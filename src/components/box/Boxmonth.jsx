import React, { Component } from 'react';
//Importación de componentes.

/*
* This class represents the box that gives us month information.
*/
export default class Boxmonth extends Component {


    render() {

        return (
            <>

                {/* Earnings (Monthly) Card Example */}
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Earnings (Monthly)
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    $40,000
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )


    }

}