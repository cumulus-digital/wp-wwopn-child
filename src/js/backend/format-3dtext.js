const { addFilter } = wp.hooks;
const { createHigherOrderComponent, withState } = wp.compose;
const { Fragment} = wp.element;
const { BlockControls, getBlock } = wp.blockEditor;
const { SelectControl, Toolbar, Button, Popover, ToggleControl } = wp.components;
import { ReactComponent as Icon } from '../../../static/icons/3d.svg';

const affectedBlocks = [
    'core/paragraph',
    'core/heading',
    'kadence/advancedheading',
];

let colors = [
    'brand',
    'highlight',
    'accent',
    'black'
]

const tdOptions = {
    direction: [
        'left',
        'right'
    ],
    color: [
        ...colors
    ],
    length: [
        'short',
        'medium',
        'long'
    ]
};

const withControl = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if ( ! affectedBlocks.includes(props.name)) {
            return (<BlockEdit { ...props } />);
        }

        let defaults = {
            tdEnabled: false,
            tdDirection: tdOptions.direction[0],
            tdColor: tdOptions.color[0],
            tdLength: tdOptions.length[0]
        };

        //const { tdEnabled, tdExtColor, tdDirection, tdLength} = props.attributes;
        const { setAttributes } = props;

        // We may begin with classes set but 3d text isn't enabled
        const className = props.attributes.className;
        if (className && className.includes('t3d-') && ! props.tdEnabled) {
            setAttributes({
                tdEnabled: true
            });
        }

        function getClass(type) {
            var regex = new RegExp(
                `t3d\-${type}\-([a-z]+)`
            )
            if (className) {
                let match = className.match(regex);
                if (match && match.length) {
                    return match[1];
                }
            }
            return false;
        }

        function getCurrent() {
            let ret = defaults;
            if (className && className.includes('t3d-')) {
                ret.tdEnabled = true;
                ret.tdColor = getClass('color');
                ret.tdDirection = getClass('direction');
                ret.tdLength = getClass('length');
            }
            return ret;
        }

        let tdColor = getClass('color');
        let tdDirection = getClass('direction');
        let tdLength = getClass('length');

        if (tdColor) {
            setAttributes({
                tdColor: tdColor
            });
        }
        if (tdDirection) {
            setAttributes({
                tdDirection: tdDirection
            });
        }
        if (tdLength) {
            setAttributes({
                tdLength: tdLength
            });
        }

        function updateClass(update) {
            let resolved = Object.assign(getCurrent(), update);
            console.log('resolved', resolved);
            let classes = props.attributes.className ?
                props.attributes.className.split(' ') : [];
            if (classes.length) {
                classes = classes.filter( c => ! c.includes(`t3d-`) );
            }
            if (resolved.tdEnabled) {
                classes.push(
                    `t3d-color-${resolved.tdColor}`,
                    `t3d-direction-${resolved.tdDirection}`,
                    `t3d-length-${resolved.tdLength}`
                );
            }
            setAttributes({
                className: classes.join(' '),
                tdEnabled: resolved.tdEnabled,
                tdColor: resolved.tdColor,
                tdDirection: resolved.tdDirection,
                tdLength: resolved.tdLength
            });
        }

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <BlockControls>
                    <Toolbar>
                        <Button
                            icon={<Icon style={{height: '1em'}} />}
                            label="3D Text"
                            onClick={() => {
                                setAttributes({
                                    popoverVisible: ! props.attributes.popoverVisible
                                });
                                updateClass();
                            }}
                        />
                        {props.attributes.popoverVisible &&
                            <Popover
                                onFocusOutside={() => {
                                    setAttributes({
                                        popoverVisible: false
                                    });
                                }}
                                focusOnMount="container"
                            >
                                <div style={{padding: '1em'}}>
                                    <ToggleControl
                                        label="Enable 3D Text"
                                        checked={ props.attributes.tdEnabled }
                                        onChange={() => {
                                            updateClass({
                                                tdEnabled: ! props.attributes.tdEnabled
                                            });
                                        }}
                                    />
                                    {props.attributes.tdEnabled &&
                                        <div>
                                            <SelectControl
                                                label="Extrude Color"
                                                value={props.attributes.tdColor}
                                                onChange={(selectedColor) => {
                                                    updateClass({
                                                        tdColor: selectedColor
                                                    });
                                                }}
                                                options={tdOptions.color.map(function(val) {
                                                    return {
                                                        label: val.charAt(0).toUpperCase() + val.slice(1),
                                                        value: val
                                                    };
                                                })}
                                            />
                                            <SelectControl
                                                label="Extrude Direction"
                                                value={props.attributes.tdDirection}
                                                onChange={(selectedDirection) => {
                                                    updateClass({
                                                        tdDirection: selectedDirection
                                                    });
                                                }}
                                                options={tdOptions.direction.map(function(val) {
                                                    return {
                                                        label: val.charAt(0).toUpperCase() + val.slice(1),
                                                        value: val
                                                    };
                                                })}
                                            />
                                            <SelectControl
                                                label="Length"
                                                value={props.attributes.tdLength}
                                                onChange={(selectedLength) => {
                                                    updateClass({
                                                        tdLength: selectedLength
                                                    });
                                                }}
                                                options={tdOptions.length.map(function(val) {
                                                    return {
                                                        label: val.charAt(0).toUpperCase() + val.slice(1),
                                                        value: val
                                                    };
                                                })}
                                            />
                                        </div>
                                    }
                                </div>
                            </Popover>
                        }
                    </Toolbar>
                </BlockControls>
            </Fragment>
        )
    }
});
addFilter(
    'editor.BlockEdit',
    'wwopn/blockedit/t3d',
    withControl
);
