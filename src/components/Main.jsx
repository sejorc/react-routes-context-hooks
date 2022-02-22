import { React } from "react";
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>

            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            <link href="css/loginStyles.css" rel="stylesheet" type="text/css" />
            <link href="css/backgroundLogin.css" rel="stylesheet" type="text/css" />


            <div class="ripple-background">
                <div class="circle xxlarge shade1"></div>
                <div class="circle xlarge shade2"></div>
                <div class="circle large shade3"></div>
                <div class="circle mediun shade4"></div>
                <div class="circle small shade5"></div>
            </div>

            <div className="wrapper fadeInDown">

                <div id="formContent">

                    <div className="fadeIn first">
                        <h1>Welcome</h1>
                    </div>

                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="name" required="true" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" /><br />
                        <Link to="/Dashboard" value="Log In" >Log In</Link>
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>

        </>
    )

};

export default Main;