import React from 'react';
import './LoginPage.css';

import { Link } from 'react-router-dom';



export default function  LoginPage(props){

	return(
		<body>
		    <nav role="navigation">Nav</nav>
		    <main role="main">
		        <header role="banner">
		            <h1>Sky Candy Curriculum Database</h1>
		        </header>

		       <section>
		        <header>
		            <h3>Log In</h3>
		        </header>
		        <form class='login-form'>
		            <div>
		              <label for="username">Email</label>
		              <input type="text" name='username' id='username' />
		            </div>
		            <div>
		              <label for="password">Password</label>
		              <input type="password" name='password' id='password' />
		            </div>
		            <Link to = '/main'>
		            <button type='submit'>Access Curriculum!</button>
		            </Link>
		        </form>
		      </section>
		    </main>
		    <footer role="content-info">Footer</footer>
		</body>
	)
}