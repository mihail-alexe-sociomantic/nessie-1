/* eslint-env node, mocha */
/* global expect */
/* eslint-disable no-magic-numbers, no-multi-str, no-unused-expressions */

import React              from 'react';
import { mount, shallow } from 'enzyme';

import { Tag }            from '../index';

import TagInput           from './index';


describe( 'TagInput', () =>
{
    let wrapper;
    let instance;
    let cssMap;

    beforeEach( () =>
    {
        wrapper  = shallow( <TagInput /> );
        instance = wrapper.instance();
        cssMap   = instance.props.cssMap;
    } );

    describe( 'constructor( props )', () =>
    {
        it( 'should have name TagInput', () =>
        {
            expect( instance.constructor.name ).to.equal( 'TagInput' );
        } );
    } );

    describe( 'render()', () =>
    {
        it( 'should contain exactly one input', () =>
        {
            expect( wrapper.find( `.${cssMap.input}` ) ).to.have.length( 1 );
        } );
    } );

    it( 'should have Tag components when passed as children', () =>
    {
        wrapper.setProps( { children : [
            <Tag label = "TagLabel 1" />,
            <Tag label = "TagLabel 2" />
        ] } );

        expect( wrapper.find( Tag ) ).to.have.length( 2 );
    } );

    it( 'should have Tag components when passed as tags prop', () =>
    {
        wrapper.setProps( {
            tags : [ 'TagLabelString 1', 'TagLabelString 2' ],
        } );

        expect( wrapper.find( Tag ) ).to.have.length( 2 );
    } );

    it( 'should trigger onKeyPress callbacks when key pressed', () =>
    {
        const onKeyPress = sinon.spy();
        wrapper.setProps( { onKeyPress } );

        wrapper.find( `.${cssMap.input}` ).simulate( 'keyPress' );
        expect( onKeyPress.called ).to.be.true;
    } );

    describe( 'readOnly state', () =>
    {
        beforeEach( () =>
        {
            wrapper.setProps( { isReadOnly: true } );
        } );

        it( 'input should receive readonly', () =>
        {
            expect( wrapper.find( `.${cssMap.input}` ).prop( 'readOnly' ) )
                .to.be.true;
        } );
    } );

    describe( 'disabled state', () =>
    {
        beforeEach( () =>
        {
            wrapper.setProps( { isDisabled: true } );
        } );

        it( 'input should receive isDisabled', () =>
        {
            expect( wrapper.find( `.${cssMap.input}` ).prop( 'disabled' ) )
                .to.be.true;
        } );
    } );
} );


describe( 'TagInputDriver', () =>
{
    let wrapper;
    let instance;
    let cssMap;

    beforeEach( () =>
    {
        wrapper  = mount( <TagInput /> );
        instance = wrapper.instance();
        cssMap   = instance.props.cssMap;
    } );

    describe( 'height', () =>
    {
        it( 'should get "height" prop', () =>
        {
            wrapper.setProps( {
                height : '25vh'
            } );

            expect( wrapper.driver().getHeight() ).to.equal( '25vh' );
        } );

        it( 'should set "height" when passed as prop ', () =>
        {
            wrapper.driver().setHeight( '86px' );

            expect( wrapper.driver().getHeight() ).to.equal( '86px' );
        } );
    } );


    describe( 'mouseOut()', () =>
    {
        it( 'should call onMouseOut once', () =>
        {
            const onMouseOut = sinon.spy();
            wrapper.setProps( {
                onMouseOut,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />
                ]
            } );

            wrapper.find( `.${cssMap.input}` ).simulate( 'mouseOut' );

            expect( onMouseOut.calledOnce ).to.be.true;
        } );
    } );


    describe( 'mouseOver()', () =>
    {
        it( 'should call onMouseOver once', () =>
        {
            const onMouseOver = sinon.spy();
            wrapper.setProps( {
                onMouseOver,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />
                ]
            } );

            wrapper.find( `.${cssMap.input}` ).simulate( 'mouseOver' );

            expect( onMouseOver.calledOnce ).to.be.true;
        } );
    } );


    describe( 'clickClose()', () =>
    {
        it( 'should call onClickClose once', () =>
        {
            const onClickClose = sinon.spy();
            wrapper.setProps( {
                onClickClose,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />
                ]
            } );

            wrapper.driver().clickClose();

            expect( onClickClose.calledOnce ).to.be.true;
        } );
    } );
} );
