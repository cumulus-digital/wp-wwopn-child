import { ReactComponent as Icon } from '../../../static/icons/3d.svg';
if (wp && wp.blockEditor) {
	const { addFilter } = wp.hooks;
	const { createHigherOrderComponent } = wp.compose;
	const { Fragment} = wp.element;
	const { InspectorControls } = wp.blockEditor;
	const { SelectControl, ColorPicker, ColorPalette, PanelBody, ToggleControl } = wp.components;

	const affectedBlocks = [
		'core/paragraph',
		'core/heading',
		'kadence/advancedheading'
	];

	const t3dOptions = {
		direction: [ 'left', 'right' ],
		length: [ 'short', 'medium', 'long' ]
	};

	// Add support for extra stuff
	function handleRegister(settings, name) {
		if ( ! affectedBlocks.includes(name)) {
			return settings;
		}
		settings.supports = Object.assign({}, settings.supports, {
			customClassName: true
		});
		settings.attributes = Object.assign({}, settings.attributes, {
			t3dEnabled: {
				type: 'boolean',
				default: false
			},
			t3dDirection: {
				'type': 'string',
				default: t3dOptions.direction[0]
			},
			t3dLength: {
				type: 'string',
				default: t3dOptions.length[0]
			},
			t3dCustomColor: {
				type: 'string',
				default: '#000000'
			},
			t3dStroke: {
				type: 'boolean',
				default: false
			},
		});
		return settings;
	}
	addFilter(
		'blocks.registerBlockType',
		'wwopn/t3d/registerBlockType',
		handleRegister
	);

	const injectControl = createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			if ( ! affectedBlocks.includes(props.name)) {
				return (<BlockEdit { ...props } />);
			}

			const { setAttributes } = props;

			function updateT3d(attributes) {
				let newAttr = Object.assign({}, props.attributes, attributes);
				setAttributes(newAttr);
			}

			let icon = Icon();
			icon.props.style = {width: "1.5em"};

			return (
				<Fragment>
					<InspectorControls>
						<PanelBody
							title="3D Text"
							icon={ icon }
							initialOpen={ false }
						>
							<ToggleControl
								label="Enable 3D Text"
								checked={ props.attributes.t3dEnabled }
								onChange={() => {
									updateT3d({ t3dEnabled: ! props.attributes.t3dEnabled });
								}}
							/>
							{props.attributes.t3dEnabled &&
								<>
									<ColorPalette
										colors={wp.data.select( "core/editor" ).getEditorSettings().colors}
										value={props.attributes.t3dCustomColor}
										onChange={(value) => updateT3d({ t3dCustomColor: value })}
									/>
									<SelectControl
										label="Extrude Direction"
										value={props.attributes.t3dDirection}
										onChange={(newDirection) => {
											updateT3d({ t3dDirection: newDirection });
										}}
										options={t3dOptions.direction.map(function(val) {
											return {
												label: val.charAt(0).toUpperCase() + val.slice(1),
												value: val
											};
										})}
									/>
									<SelectControl
										label="Length"
										help='Length correlates to type size.'
										value={props.attributes.t3dLength}
										onChange={(newLength) => {
											updateT3d({ t3dLength: newLength });
										}}
										options={t3dOptions.length.map(function(val) {
											return {
												label: val.charAt(0).toUpperCase() + val.slice(1),
												value: val
											};
										})}
									/>
									<ToggleControl
										label="Enable Stroke"
										checked={ props.attributes.t3dStroke }
										onChange={() => {
											updateT3d({ t3dStroke: ! props.attributes.t3dStroke });
										}}
									/>
								</>
							}
						</PanelBody>
					</InspectorControls>
					<BlockEdit { ...props } />
				</Fragment>
			)
		}
	}, 'injectControl');
	addFilter(
		'editor.BlockEdit',
		'wwopn/t3d/blockedit',
		injectControl
	);

	const displayControl = createHigherOrderComponent((BlockListBlock) => {
		return (props) => {
			if ( ! affectedBlocks.includes(props.name)) {
				return (<BlockListBlock { ...props } />);
			}

			const { setAttributes } = props;
			const { t3dEnabled, t3dStroke, t3dDirection, t3dLength, t3dCustomColor } = props.attributes;

			let wrapperProps = {};
			let className = '';

			if (t3dEnabled) {
				className = [
					`t3d-direction-${t3dDirection}`,
					`t3d-length-${t3dLength}`
				];
				if (t3dStroke) {
					className.push('t3d-stroke');
				};
				className = className.join(' ');
				if (t3dCustomColor) {
					wrapperProps.style = {
						'--t3d-color': t3dCustomColor
					};
				}
			}

			return (
				<BlockListBlock { ...props } className={className} wrapperProps={wrapperProps} />
			);
		}
	}, 'displayControl');
	addFilter(
		'editor.BlockListBlock',
		'wwopn/t3d/blocklistblock',
		displayControl
	)

	function saveStyles(props, blockType, attributes) {
		if ( ! affectedBlocks.includes(blockType.name)) {
			return props;
		}
		if (attributes.t3dEnabled) {
			let newClasses = [
				`t3d-direction-${attributes.t3dDirection}`,
				`t3d-length-${attributes.t3dLength}`
			];
			if (attributes && attributes.t3dStroke) {
				newClassses.push('t3d-stroke');
			}
			newClasses = newClasses.join(' ');
			function applyClass(props) {
				let classes = newClasses;
				if (props && props.className) {
					props.className = props.className.replace(/t3d\-[\-a-zA-Z]+/g,'');
					classes = props.className + ' ' + classes
				}
				return Object.assign(props, {
					className: classes
				});
			}
			function applyStyle(style) {
				if ( ! style) {
					style = {};
				}
				return Object.assign(style, {
					'--t3d-color': attributes.t3dCustomColor
				});
			}
			props = applyClass(props);
			if (attributes && attributes.t3dCustomColor) {
				props.style = applyStyle(props.style);
			}
			if (props && props.children) {
				React.Children.map(props.children, function(child) {
					if (child && child.props) {
						child.props = applyClass(child.props);
						if (attributes && attributes.t3dCustomColor) {
							child.props.style = applyStyle(child.props.style);
						}
					}
					return child;
				});
			}
		}
		return props;
	}
	addFilter(
		'blocks.getSaveContent.extraProps',
		'wwopn/t3d/extraprops',
		saveStyles
	);

}