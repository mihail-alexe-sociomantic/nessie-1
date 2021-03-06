/*
 * Copyright (c) 2017-2018 dunnhumby Germany GmbH.
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 *
 */

import React              from 'react';
import PropTypes          from 'prop-types';

import { buildClassName } from '../utils';
import styles             from './text.css';

const Text = ( {
    allCaps,
    children,
    className,
    color,
    cssMap,
    letterSpacing,
    lineHeight,
    noWrap,
    onClick,
    overflowIsHidden,
    role,
    size,
    text,
    textAlign,
    textRef,
    variant,
} ) => (
    <div
        className = { buildClassName( className, cssMap, {
            allCaps,
            overflowHidden : overflowIsHidden,
            noWrap,
            role,
            size,
            textAlign,
            variant,
        } ) }
        onClick = { onClick }
        style   = { { color, letterSpacing, lineHeight } }
        ref     = { textRef }>
        { children || text }
    </div>
);

Text.propTypes =
{
    /**
     *  Capitalize text
     */
    allCaps          : PropTypes.bool,
    /**
     *  Text content (JSX node; overrides text prop)
     */
    children         : PropTypes.node,
    /**
     *  Extra CSS class name
     */
    className        : PropTypes.string,
    /**
     *  Text Color
     */
    color            : PropTypes.string,
    /**
     *  CSS class map
     */
    cssMap           : PropTypes.objectOf( PropTypes.string ),
    /**
     * Letter Spacing for the text
     */
    letterSpacing    : PropTypes.string,
    /**
     * Line Height for the text
     */
    lineHeight       : PropTypes.string,
    /**
     *  Don’t wrap text to the next line
     */
    noWrap           : PropTypes.bool,
    /**
     *  OnClick callback function: ( e ) => { ... }
     */
    onClick          : PropTypes.func,
    /**
     *  Clip overflow
     */
    overflowIsHidden : PropTypes.bool,
    /**
     *  Role (style) to apply to text
     */
    role             : PropTypes.oneOf( [
        'critical',
        'default',
        'link',
        'promoted',
        'subtle',
    ] ),
    /**
     *  Size to apply to text
     */
    size : PropTypes.oneOf( [
        'XXXL',
        'XXL',
        'XL',
        'L',
        'M',
        'S',
        'XS',
        'XXS',
    ] ),
    /**
     *  Text string
     */
    text      : PropTypes.string,
    /**
     * Text alignment
     */
    textAlign : PropTypes.oneOf( [ 'left', 'center', 'right' ] ),
    /**
     *  Callback that receives ref to the text div: ref => ...
     */
    textRef   : PropTypes.func,
    /**
     *  Style to apply to text
     */
    variant   : PropTypes.oneOf( [
        'Light',
        'LightIt',
        'Regular',
        'RegularIt',
        'SemiBold',
        'SemiBoldIt',
        'Bold',
        'BoldIt',
        'ExtraBold',
        'ExtraBoldIt',
    ] ),
};

Text.defaultProps =
{
    allCaps          : false,
    color            : undefined,
    cssMap           : styles,
    letterSpacing    : undefined,
    lineHeight       : undefined,
    noWrap           : false,
    onClick          : undefined,
    overflowIsHidden : false,
    role             : 'default',
    size             : 'M',
    text             : undefined,
    textAlign        : undefined,
    textRef          : undefined,
    variant          : 'Regular',
};

export default Text;
