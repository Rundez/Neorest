import React, { useState, } from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Text, Container, Content } from 'native-base';
import { ActionConst, Actions, Modal, Router, Scene } from 'react-native-router-flux';

import Bottom from './components/Bottom'
import Wallview from './components/Wallview'
import Activities from './components/Activities'
import New from './components/New'



const App = () => {
	return (
		<Router>
			<Modal hideNavBar>
				<Scene key="root">
					<Scene key="tabbar"
						tabs={true}
						tabBarStyle={style.tabBarStyle}
						hideNavBar
					>
						<Scene key="Posts" >
							<Scene key="wall"
								component={Wallview}
								title="Posts"
								initial
							/>
						</Scene>
						<Scene key="Activities" >
							<Scene key="activities"
								component={Activities}
								title="Activities"
							/>
						</Scene>
					</Scene>
				</Scene>
				<Scene
					key="New"
					component={New}
				/>
			</Modal>
		</Router>
	)
};


let style = StyleSheet.create({
	tabBarStyle: {
		borderTopWidth: .5,
		borderColor: '#b7b7b7',
		backgroundColor: 'white',
		opacity: 1,
		height: 40,

	}
});
export default App;
