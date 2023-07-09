import React from 'react';

function Friend({ friendData }) {
	return (
		<li>
			<div>
				<img alt="Some person's face" src={friendData.image} />
				<div>
					<h2>{friendData.name}</h2>
					<p>
						You owe {friendData.name} ${friendData.balance}
					</p>
				</div>
				<button className='button'>Select</button>
			</div>
		</li>
	);
}

export default Friend;
