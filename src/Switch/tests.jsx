/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/
/* eslint-disable no-magic-numbers */

import React        from 'react';
import { mount }    from 'enzyme';

import Switch       from './index';

describe( 'Switch', () =>
{
    let wrapper;

    beforeEach( () =>
    {
        wrapper = mount( <Switch /> );
    } );

    it( 'should have .switch__default as default className', () =>
    {
        expect( wrapper.find( '.switch__default' ) ).to.have.length( 1 );
    } );

    it( 'should contain an Switch component', () =>
    {
        expect( wrapper.find( Switch ) ).to.have.length( 1 );
    } );

    it( 'should have .disabled className when isDisabled is true',
        () =>
        {
            wrapper.setProps( {
                isDisabled : true
            } );

            expect( wrapper.find( '.switch__disabled' ) ).to.have.length( 1 );
        } );

    describe( 'mouseOut', () =>
    {
        it( 'should trigger onMouseOut callback function', () =>
        {
            const onMouseOut = sinon.spy();

            wrapper.setProps( {
                onMouseOut
            } );

            wrapper.driver().mouseOut();

            expect( onMouseOut.calledOnce ).to.be.true;
        } );
    } );

    describe( 'mouseOver', () =>
    {
        it( 'should trigger onMouseOver callback function', () =>
        {
            const onMouseOver = sinon.spy();

            wrapper.setProps( {
                onMouseOver
            } );

            wrapper.driver().mouseOver();

            expect( onMouseOver.calledOnce ).to.be.true;
        } );
    } );

    describe( 'blur', () =>
    {
        it( 'should trigger onBlur callback function', () =>
        {
            const onBlur = sinon.spy();

            wrapper.setProps( {
                onBlur
            } );

            wrapper.driver().blur();

            expect( onBlur.calledOnce ).to.be.true;
        } );
    } );

    describe( 'focus', () =>
    {
        it( 'should trigger onFocus callback function', () =>
        {
            const onFocus = sinon.spy();

            wrapper.setProps( {
                onFocus
            } );

            wrapper.driver().focus();

            expect( onFocus.calledOnce ).to.be.true;
        } );
    } );
} );
