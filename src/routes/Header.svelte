<script>
	import { page } from '$app/stores';
</script>

	<se-header app-title="Test Advisor" project="Project name">
		<div slot="end">
			<se-link url="http://google.com" option="external" style="display:inline-block;">External Link to Google</se-link>
			<se-dropdown alignment="right">
				<se-button slot="trigger" option="inherit" >
					<se-icon slot="icon" size="medium" color="primary">user_standard</se-icon>
					Test User
				</se-button>
				<se-list option="dropdown">
					<se-list-item item="Logout" id="test-button-label"></se-list-item>
				</se-list>
			</se-dropdown>
		</div>
		<se-sidemenu id="main-sidemenu" link="www.se.com/en/partners">
			<se-sidemenu-item item="Project" active="true" id="side-project">
				<se-block>
					<se-block-header>some block design</se-block-header>
					<se-block-content>
						<se-container option="card" display="block">
							<se-block>
								<se-block-header>
									H3 Buttons and Form
									<div slot="end">
										<se-icon option="button" color="alternative">other_vertical</se-icon>
									</div>
								</se-block-header>
								<se-block-content>
									<se-chip color="standard" value="Std Chip"></se-chip>
									<se-chip color="standard" value="Std Chip"></se-chip>
									<div style="background-color: #9fa0a4;">
										<se-chip color="alternative" value="Alt Chip"></se-chip>
										<se-chip color="alternative" disabled="true" value="Alt Chip"></se-chip>
									</div>
								</se-block-content>
								<se-block-content>
									<se-icon size="nano" color="anthracitegrey">airconditioner_hot_heating</se-icon>
									<se-icon size="small" color="lightgrey">airconditioner_hot_heating</se-icon>
									<se-icon size="medium" color="lifegreen">other_vertical</se-icon>
									<se-icon size="large" color="lifegreen">airconditioner_hot_heating</se-icon>
									<se-icon size="xtralarge" color="lightgreen">airconditioner_hot_heating</se-icon>
								</se-block-content>
							</se-block>
						</se-container>
					</se-block-content>
					<se-block-footer>
						<se-button onclick="openSidemenuSnackbar()" option="raised" color="primary">Open Snackbar</se-button>
					</se-block-footer>
				</se-block>
			</se-sidemenu-item>
			<se-sidemenu-item item="About" id="side-about">
				<se-about app-title="Test Advisor" version="1.2.3"
					image-url="url('https://schneider-electric.box.com/shared/static/7hp8f04wj8lclpxn8jonti616lvim3zl.jpg')">
				</se-about>
			</se-sidemenu-item>
			<se-sidemenu-item item="Close" id="side-close"></se-sidemenu-item>
		</se-sidemenu>
	</se-header>
	<se-tab option="anchor">
		<se-tab-item href="/" >Home</se-tab-item>
		<se-tab-item href="/dashboard" >Dashboard</se-tab-item>
		<se-tab-item href="/icons" >Icons</se-tab-item>
	</se-tab>
	<se-tabbar/>
