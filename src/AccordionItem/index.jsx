import React                          from 'react';
import PropTypes                      from 'prop-types';


import { buildClassName, generateId } from '../utils';
import styles                         from './accordionItem.css';
import AccordionItemHeader            from './AccordionItemHeader';
import AccordionItemContent           from './AccordionItemContent';

const AccordionItem = ( {
    children,
    className,
    cssMap,
    hasError,
    headerText,
    id = generateId( 'AccordionItem' ),
    isDisabled,
    isOpen,
    onClick,
    onMouseOver,
    onMouseOut
} ) => (
    <div
        className = { buildClassName( className, cssMap, {
            disabled : isDisabled,
            error    : !isDisabled && hasError
        } ) }>
        <AccordionItemHeader
            headerText  = { headerText }
            id          = { id }
            idContent   = { `${id}-content` }
            isDisabled  = { isDisabled }
            isOpen      = { !isDisabled && isOpen }
            onClick     = { onClick }
            onMouseOver = { onMouseOver }
            onMouseOut  = { onMouseOut } />
        { ( !isDisabled && isOpen ) &&
            <AccordionItemContent
                id         = { `${id}-content` }
                idHeader   = { id } >
                { children }
            </AccordionItemContent>
        }
    </div>
);

AccordionItem.propTypes =
{
    /**
     *  Accordion Item content
     */
    children    : PropTypes.node,
    /**
     *  CSS class name
     */
    className   : PropTypes.string,
    /**
     *  CSS class map
     */
    cssMap      : PropTypes.objectOf( PropTypes.string ),
    /**
     *  Display as error/invalid
     */
    hasError    : PropTypes.bool,
    /**
     *  Accordion Item title
     */
    headerText  : PropTypes.string,
    /**
     *  id of the header
     */
    id          : PropTypes.string,
    /**
     *  Display as disabled/read-only
     */
    isDisabled  : PropTypes.bool,
    /**
     *  Accordion item expanded
     */
    isOpen      : PropTypes.bool,
    /**
     *  Button click callback function: ( e ) => { ... }
     */
    onClick     : PropTypes.func,
    /**
     *  Mouse over callback function: ( e ) => { ... }
     */
    onMouseOver : PropTypes.func,
    /**
     *  Mouse out callback function: ( e ) => { ... }
     */
    onMouseOut  : PropTypes.func
};

AccordionItem.defaultProps =
{
    children    : undefined,
    className   : undefined,
    cssMap      : styles,
    hasError    : false,
    headerText  : undefined,
    id          : undefined,
    isDisbled   : false,
    isOpen      : false,
    onClick     : undefined,
    onMouseOver : undefined,
    onMouseOut  : undefined
};

export default AccordionItem;