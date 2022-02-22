import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NotFoundPage extends Component {


    render() {

        return (
            <>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
                <link href="css/NotFoundStyles.css" rel="stylesheet" type="text/css" />

                <div className="mainbox">
                    <div className="err">4</div>
                    <i className="far fa-question-circle fa-spin"></i>
                    <div className="err2">4</div>
                    <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to="/">home</Link> and try from there.</p></div>
                </div>

            </>
        )


    }

}