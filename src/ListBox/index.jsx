/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React        from 'react';
import PropTypes    from 'prop-types';

import {
    buildOptions,
    updateOptions,
} from './utils';
import {
    buildClassName,
    generateId,
    killFocus,
    mapAria,
} from '../utils';
import styles                                               from './listBox.css';

import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';


class ListBox extends React.Component
{
    static get propTypes()
    {
        return propTypes;
    }
    static get defaultProps()
    {
        return defaultProps;
    }

    constructor( props )
    {
        super();

        this.cache = new CellMeasurerCache( {
            fixedWidth    : true,
            defaultHeight : 100
        } );

        const {
            activeOption,
            children,
            isMultiselect,
            onClickOption,
            onMouseOutOption,
            onMouseOverOption,
            options,
            selection
        } = props;

        let realSelection = selection;
        if ( Array.isArray( selection ) )
        {
            realSelection = isMultiselect ? selection : selection[ 0 ];
        }

        this.renderRow = renderRow.bind( this, updateOptions(
            children || buildOptions( options ),
            {
                activeOption,
                onClickOption,
                onMouseOutOption,
                onMouseOverOption,
                selection : realSelection,
            } ) );
    }

    componentWillReceiveProps( newProps )
    {
        const {
            activeOption,
            children,
            isMultiselect,
            onClickOption,
            onMouseOutOption,
            onMouseOverOption,
            options,
            selection
        } = newProps;

        let realSelection = selection;
        if ( Array.isArray( selection ) )
        {
            realSelection = isMultiselect ? selection : selection[ 0 ];
        }

        this.renderRow = renderRow.bind( this, updateOptions(
            children || buildOptions( options ),
            {
                activeOption,
                onClickOption,
                onMouseOutOption,
                onMouseOverOption,
                selection : realSelection,
            } ) );
    }

    render()
    {
        const {
            aria,
            activeOption,
            children,
            className,
            cssMap,
            isFocusable,
            isMultiselect,
            id = generateId( 'ListBox' ),
            onKeyPress,
            options
        } = this.props;

        const count = Math.max(
            ( children || [] ).length,
            ( options || [] ).length );

        return (
            /* <div
                { ...mapAria( {
                    ...aria,
                    activeDescendant : isFocusable ? activeOption : null,
                    multiSelectable  : isMultiselect,
                    role             : 'listbox',
                } ) }
                className   = { buildClassName( className, cssMap ) }
                id          = { id }
                onKeyPress  = { onKeyPress }
                onMouseDown = { !isFocusable && killFocus }
                tabIndex    = { isFocusable ? '0' : '-1' }>*/
            <AutoSizer>
                { ( { width, height } ) =>
                    <List
                        width = { width }
                        height = { height }
                        deferredMeasurementCache = { this.cache }
                        rowHeight = { this.cache.rowHeight }
                        rowRenderer = { this.renderRow }
                        rowCount = { count }
                        overscanRowCount = { 3 } />
                }
            </AutoSizer>
        // </div>
        );
    }
}

/**
 *
 * @param {*} param0 - props
 * @return {Object}
 */
function renderRow( options, {
    index,
    key,
    parent
} )
{
    return (
        <CellMeasurer
            key = { key }
            cache = { this.cache }
            parent = { parent }
            columnIndex = { 0 }
            rowIndex = { index }
        >
            { options[ index ] }
        </CellMeasurer>
    );
}

const propTypes = {
    aria              : PropTypes.objectOf( PropTypes.string ),
    /**
    *  Highlights option
    */
    activeOption      : PropTypes.string,
    children          : PropTypes.node,
    /**
    *  css class
    */
    className         : PropTypes.string,
    cssMap            : PropTypes.objectOf( PropTypes.string ),
    isFocusable       : PropTypes.bool,
    isMultiselect     : PropTypes.bool,
    /**
    *  ListBox ID
    */
    id                : PropTypes.string,
    /**
    *  Array of strings or objects (to build the options)
    */
    options           : PropTypes.arrayOf( PropTypes.object ),
    /**
     *  onClickOption callback function ( e ) => { ... }
     */
    onClickOption     : PropTypes.func,
    /**
     *  onMouseOutOption callback function ( e ) => { ... }
     */
    onMouseOutOption  : PropTypes.func,
    /**
     *  onMouseOverOption callback function ( e ) => { ... }
     */
    onMouseOverOption : PropTypes.func,
    /**
     *  onKeyPress callback function ( e ) => { ... }
     */
    onKeyPress        : PropTypes.func,
    selection         : PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.arrayOf( PropTypes.string ),
    ] ),
};

const defaultProps = {
    aria              : undefined,
    activeOption      : undefined,
    children          : undefined,
    className         : undefined,
    cssMap            : styles,
    isFocusable       : true,
    isMultiselect     : false,
    id                : undefined,
    options           : undefined,
    onClickOption     : undefined,
    onMouseOutOption  : undefined,
    onMouseOverOption : undefined,
    onKeyPress        : undefined,
    selection         : undefined,
};

export default ListBox;
