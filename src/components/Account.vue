<template>
	<div>
		<section class="account_section">
			<div class="container account_container">
				<div class="account_body">
					<div class="row">
						<div class="col">
							<nav class="navbar navbar-expand-lg account_nav">  
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
				 						<span class="navbar-toggler-icon"></span>
								</button>
								<div class="collapse navbar-collapse" id="navbarSupportedContent">     
									<ul class="navbar-nav account_nav">
										<li class="nav-item">
										   <router-link class="nav-link active" to="#">Profile
										   </router-link>      
										</li>  
										<li class="nav-item">
										   <router-link class="nav-link" to="#">Password</router-link>    
										</li>
										<li class="nav-item">
										   <router-link class="nav-link" to="#">Billing</router-link>    
										</li>
										<li class="nav-item">
										   <router-link class="nav-link" to="#">Notifications</router-link>    
										</li>
									<span class="magic_line"></span>
									</ul> 
								</div>
							</nav>
						</div>
					</div>
					<div class="row report_row">
						<div class="report_btn">
							<button>report changes</button>
						</div>
					</div>
					<div class="row">
						<div class="account_form_div">
							<div class="col">
								<div class="account_title_div">
									<img src="../../public/images/av.png" alt="av">
									<span class="av_title">Account</span>
								</div>
								<div class="avatar_info d-flex">
									<div>
										<img src="../../public/images/user_avatar.png" alt="User Avatar">
									</div>
									<div class="av_update_div">
										<h6 class="avatar_name">Your Avatar</h6>
										<button class="update_btn">Update</button>
									</div>
									<div class="import_div">
										<div>
											<img src="../../public/images/twitter.png">
											<span class="import_av">Import from Twitter</span>
										</div>
										<div>
											<img src="../../public/images/gravatar.png" height="12" width="12">
											<span class="import_av">Import from Gravatar</span>
										</div>
									</div>
								</div>
								<form class="account_form">
									<div class="row name_inp">
										<div>
											<label for="name">First Name</label>
											<input id="name" type="text" name="name">
										</div>
										<div>
											<label for="lastname">Last Name</label>
											<input id="lastname" type="text" name="lastname">
										</div>
									</div>
									<div class="row email_inp">
										<div>
											<label for="email">Email Address</label>
											<input id="email" type="email" name="email">
										</div>
									</div>
									<div class="row phone_inp">
										<div>
											<label for="phone">Phone Number</label>
											<input id="phone" type="number" name="phone">
										</div>
										<div>
											<label for="month">Birthday</label>
											<input id="month" type="number" name="month">
											<input id="day" type="number" name="day">
											<input id="year" type="number" name="year">
										</div>
									</div>
									<div class="row save_btn">
										<button>Save Changes</button>
									</div>	
								</form>
							</div>
						</div>
						<div class="address_form_div">
							<div class="col">
								<div class="row add_row">
									<div class="address_title_div">
										<img src="../../public/images/location.png" alt="av">
										<span class="av_title">Address</span>
										<div class="added_add_info">You have 2 addresses</div>
									</div>
									<div class="add_btn">
										<button><img src="../../public/images/plus.png"></button>
									</div>
								</div>
								<form class="address_form">
									<div class="row radio_inp_row ">
										<div class="radio_inp">
											<label class="radio_label">Home
												<input type="radio" name="home">
												<span class="checkmark"></span>
											</label>
											<label class="radio_label">Business
												<input type="radio" name="home">
												<span class="checkmark"></span>
											</label>
										</div>
										<div class="delete">
											<img src="../../public/images/trash.png" alt="trash">
											Delete
										</div>
								   </div>
									<div class="row add1_inp">
										<div>
											<label class="txt_label">Address</label>
											<input class="big_inp" type="text" name="address1">
										</div>
									</div>
									<div class="row add2_inp">
										<div>
											<label class="txt_label" for="address2">Address 2</label>
											<input class="big_inp" type="text" name="address2">
										</div>
									</div>
									<div class="row city_inp">
										<div>
											<label class="txt_label">City</label>
											<input class="med_inp" type="text" name="city">
										</div>
										<div>
											<label class="txt_label">Country</label>
											<input class="med_inp" type="text" name="country">
										</div>
									</div>
									<div class="row post_inp bottom_border">
										<div>
											<label class="txt_label">Post Code</label>
											<input class="small_inp" type="number" name="postcode">
										</div>
										<div>
											<label class="txt_label">Country / Region</label>
											<select class="region_select">
												<option>United States</option>
												<option>Canada</option>
											</select>
										</div>
									</div>
									<div class="row radio_inp_row ">
										<div class="radio_inp">
											<label class="radio_label">Home
												<input type="radio" name="home">
												<span class="checkmark"></span>
											</label>
											<label class="radio_label">Business
												<input type="radio" name="home">
												<span class="checkmark"></span>
											</label>
										</div>
										<div class="delete">
											<img src="../../public/images/trash.png" alt="trash">
											Delete
										</div>
									</div>
									<div class="row add1_inp">
										<div>
											<label class="txt_label">Address</label>
											<input class="big_inp" type="text" name="address1">
										</div>
									</div>
									<div class="row add2_inp">
										<div>
											<label class="txt_label">Address 2</label>
											<input class="big_inp" type="text" name="address2">
										</div>
									</div>
									<div class="row city_inp">
										<div>
											<label class="txt_label">City</label>
											<input class="med_inp" type="text" name="city">
										</div>
										<div>
											<label class="txt_label">Country</label>
											<input class="med_inp" type="text" name="country">
										</div>
									</div>
									<div class="row post_inp_two">
										<div>
											<label class="txt_label">Post Code</label>
											<input class="small_inp" type="number" name="postcode">
										</div>
										<div>
											<label class="txt_label">Country / Region</label>
											<select class="region_select">
												<option>United States</option>
												<option>Canada</option>
											</select>
										</div>
									</div>
									<div class="row save_btn">
										<button>Save Changes</button>
									</div>
							  </form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
  name: 'Account'
}
</script>

