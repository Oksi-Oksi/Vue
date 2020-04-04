<template>
	<div>
		<header>
			<div class="container header_container">
				<nav class="navbar navbar-expand-lg">  
					<router-link to="/"><img class="logo" src="../../public/images/logo.png" alt="logo"/></router-link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
 						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse " id="navbarSupportedContent">     
						<ul class="navbar-nav">
						 	<li class="nav-item">
						    <router-link class="nav-link home_link" data-value="home" to="/">Home
						    	<img src="../../public/images/chev-right.png" alt="chevron-right">
						    </router-link>      
						  </li>  
						  <li class="nav-item">
						    <router-link class="nav-link account_link" data-value="account" to="Myaccount">My account</router-link>    
						  </li>
						</ul> 
						<ul class="navbar-nav account_info_links">
						 	<li class="profile-item">
						    <router-link class="nav-link upgrade_link" data-value="home" to="#">Upgrade Now
						    	<img src="../../public/images/bell.png" alt="bell">    
						    </router-link>  
						  </li>  
						  <li class="nav-item">
						    <img src="../../public/images/avatar.png" alt="avatar"> 
						    <select class="profile_select">
						    	<option>Jushawn</option>
						    </select>   
						  </li>
						</ul> 
					</div>
				</nav>
			</div>
		</header>
	</div>
</template>



<script>
export default {
  name: 'Header'
}
</script>
