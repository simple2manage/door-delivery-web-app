import React from 'react'
import './style.scss'

class LoginHeader extends React.Component {
	render() {
		return (
			<div className="LoginHeaderConatiner">
				<div className="container">
					<div className="flex align-item-center flex-nowrap">
						<div className="header-logo-container flex2">
							<img className="header-logo" src={"../../../resources/images/logo.jpeg"} alt="headerlogo" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginHeader;