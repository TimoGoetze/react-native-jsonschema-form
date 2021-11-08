import React, {useRef} from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import ReactNativeForm, {defaultProps, FormContext} from 'rjsf-native';
import schema from './schema.json';

const uiSchema = {
	toggle: {
		'ui:widget': 'radio',
	},
	description: {
		'ui:widget': 'textarea',
	},
	password: {
		'ui:widget': 'password',
	},
	percentage: {
		'ui:widget': 'range',
	},
	multiselect: {
		'ui:widget': 'checkboxes',
	},
	/*"ui:title": "",*/ // Hide schema title
	/*"ui:description": "",*/ //hide schema description
};

const TEST_THEME_COLORFULL = {
	primaryColor: "red",
	highlightColor: "green",
	borderColor: "black",
	textColor: "purple",
	placeholderTextColor: "yellow",
	errorColor: "red",
};

export default () => {
	const form = useRef(null);
	const scrollViewRef = useRef(null);
	
	return (
		<FormContext.Provider
			value={{
				...defaultProps,
				/*theme: TEST_THEME_COLORFULL*/
			}}
		>
			<ScrollView
				style={styles.container}
				ref={scrollViewRef}
				onScroll={event => {
					console.log(event.nativeEvent.contentOffset.y);
				}}
			>
				<View style={styles.spacer}/>
				<ReactNativeForm
					ref={form}
					onError={(e) => {
						if (scrollViewRef?.current) {
							scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
						}
						console.log(e);
					}}
					schema={schema}
					uiSchema={uiSchema}
					onSubmit={(f) => console.log(f.formData)}>
					<Button
						title="Submit"
						onPress={() => {
							if (form.current) {
								form.current.submit();
							}
						}}
					/>
				</ReactNativeForm>
				<View style={styles.spacer}/>
			</ScrollView>
		</FormContext.Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	},
	spacer: {
		height: 100,
	},
});
