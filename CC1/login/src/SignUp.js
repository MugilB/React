import React from 'react';

function SignUp()
{
    return(
        <div class="bg">           
                
            
            <form class="login">
                
                <h4>Sign Up</h4>
                <label>User Name</label>
                <input type="text"/>

                                
                <label>E-Mail</label>
                <input type="email"/>


                <label>Password</label>
                <input type="password"/>

                <label>Confirm Password</label>
                <input type="password"/>
                
                <button>Sign Up</button>
       
            </form>
        </div>
    );
}


export default SignUp;