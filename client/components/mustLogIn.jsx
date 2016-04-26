import React from 'react';
import AccountsUIWrapper from '/client/components/accountsUIWrapper.jsx';

export default MustLogIn = () => (
	<div className="container">
		<div className="row">
			<div className="center">
				<div className="card mustLogIn--card">
					<div className="card-content">
						<span className="card-title white-text">Can't Access</span>
						<p className="white-text">Sorry, you need to log in before you can access this page.</p>
					</div>
					<div className="card-action">
						<AccountsUIWrapper />
					</div>
				</div>
			</div>
		  </div>
	</div>
);