import React from 'react';

function SignIn()
{
    return(
        <div class="bg">                    
            
            <form class="login">
                <div class="title">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/real-estate-logo%2C-real-estate-company-logo-design-template-76b76635e2fba3814172a98727dbd013_screen.jpg?ts=1687806073" alt="React"/>
                    <h4>Welcome to Real Estate</h4>
                </div>
                
                
                <label>First Name</label>
                <input type="text"/>

                <label>Password</label>
                <input type="password"/>

                <button>Sign In</button>
                <p>If you don't have account Sign Up</p>
            </form>
        </div>
    );
}

export default SignIn;