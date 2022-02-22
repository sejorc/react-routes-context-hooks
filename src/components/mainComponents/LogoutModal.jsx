import React, { Component } from 'react';
import { Link } from 'react-router-dom'


/*
* This class implements the exit option.
*/
export default class LogoutModal extends Component {


    render() {

        return (
            <>
                <div
                    className="modal fade"
                    id="logoutModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel" data-backdrop="false">Ready to Leave?</h5>
                                <button
                                    className="close"
                                    type="button"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Select "Logout" below if you are ready to end your current session.
                            </div>
                            <div className="modal-footer">
                                <button
                                
                                    className="btn btn-secondary"
                                    type="button"
                                    data-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <Link to="/" className="btn btn-primary" data-backdrop="false" href="/">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )


    }

}