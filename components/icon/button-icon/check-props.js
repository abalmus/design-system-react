/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */
/* eslint-disable import/no-mutable-exports */

import sunsetProperty from '../../../utilities/warning/sunset-property';

let checkProps = function () {};

if (process.env.NODE_ENV !== 'production') {
	checkProps = function (COMPONENT, props) {
		/* eslint-disable max-len */
		sunsetProperty(
			COMPONENT,
			props.assistiveText,
			'assistiveText',
			'The wrapping span and assistive text has been removed from this component in order to make it a more pure "higher-level component" of `UtilityIcon`.'
		);
	};
}

export default checkProps;
