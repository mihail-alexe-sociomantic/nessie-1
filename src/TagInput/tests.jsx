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
        wrapper      = shallow( <TagInput /> );
        instance     = wrapper.instance();
        ( { cssMap } = instance.props );
    } );

    describe( 'constructor( props )', () =>
    {
        test( 'should have name TagInput', () =>
        {
            expect( instance.constructor.name ).toBe( 'TagInput' );
        } );
    } );

    describe( 'render()', () =>
    {
        test( 'should contain exactly one input', () =>
        {
            expect( wrapper.find( `.${cssMap.input}` ) ).toHaveLength( 1 );
        } );
    } );

    test( 'should have Tag components when passed as children', () =>
    {
        wrapper.setProps( {
            children : [
                <Tag label = "TagLabel 1" />,
                <Tag label = "TagLabel 2" />,
            ],
        } );

        expect( wrapper.find( Tag ) ).toHaveLength( 2 );
    } );

    test( 'should have Tag components when passed as tags prop', () =>
    {
        wrapper.setProps( {
            tags : [ 'TagLabelString 1', 'TagLabelString 2' ],
        } );

        expect( wrapper.find( Tag ) ).toHaveLength( 2 );
    } );

    describe( 'readOnly state', () =>
    {
        beforeEach( () =>
        {
            wrapper.setProps( { isReadOnly: true } );
        } );

        test( 'input should receive readonly', () =>
        {
            expect( wrapper.find( `.${cssMap.input}` ).prop( 'readOnly' ) )
                .toBeTruthy();
        } );
    } );

    describe( 'disabled state', () =>
    {
        beforeEach( () =>
        {
            wrapper.setProps( { isDisabled: true } );
        } );

        test( 'input should receive isDisabled as "disabled"', () =>
        {
            expect( wrapper.find( `.${cssMap.input}` ).prop( 'disabled' ) )
                .toBeTruthy();
        } );
    } );
} );


describe( 'TagInputDriver', () =>
{
    let wrapper;
    let driver;

    beforeEach( () =>
    {
        wrapper  = mount( <TagInput /> );
        driver   = wrapper.driver();
    } );

    describe( 'blur()', () =>
    {
        test( 'should call blur exactly once', () =>
        {
            const onBlur = jest.fn();
            wrapper.setProps( {
                onBlur,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.blur();
            expect( onBlur ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t blur since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.blur() ).toThrow( expectedError );
            } );

            test( 'should not trigger onBlur when isDisabled', () =>
            {
                const onBlur = jest.fn();
                wrapper.setProps( { onBlur, isDisabled: true } );

                try
                {
                    driver.blur();
                }
                catch ( error )
                {
                    expect( onBlur ).not.toBeCalled();
                }
            } );
        } );


        describe( 'isReadOnly', () =>
        {
            test( 'throws the expected error when isReadOnly', () =>
            {
                const expectedError =
                    'Input can\'t blur since it is read only';
                wrapper.setProps( { isReadOnly: true } );

                expect( () => driver.blur() ).toThrow( expectedError );
            } );

            test( 'should not trigger onBlur when isReadOnly', () =>
            {
                const onBlur = jest.fn();
                wrapper.setProps( { onBlur, isReadOnly: true } );

                try
                {
                    driver.blur();
                }
                catch ( error )
                {
                    expect( onBlur ).not.toBeCalled();
                }
            } );
        } );
    } );


    describe( 'focus()', () =>
    {
        test( 'should call focus exactly once', () =>
        {
            const onFocus = jest.fn();
            wrapper.setProps( {
                onFocus,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.focus();
            expect( onFocus ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t focus since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.focus() ).toThrow( expectedError );
            } );

            test( 'should not trigger onFocus when isDisabled', () =>
            {
                const onFocus = jest.fn();
                wrapper.setProps( { onFocus, isDisabled: true } );

                try
                {
                    driver.focus();
                }
                catch ( error )
                {
                    expect( onFocus ).not.toBeCalled();
                }
            } );
        } );


        describe( 'isReadOnly', () =>
        {
            test( 'throws the expected error when isReadOnly', () =>
            {
                const expectedError =
                    'Input can\'t focus since it is read only';
                wrapper.setProps( { isReadOnly: true } );

                expect( () => driver.focus() ).toThrow( expectedError );
            } );

            test( 'should not trigger onFocus when isReadOnly', () =>
            {
                const onFocus = jest.fn();
                wrapper.setProps( { onFocus, isReadOnly: true } );

                try
                {
                    driver.focus();
                }
                catch ( error )
                {
                    expect( onFocus ).not.toBeCalled();
                }
            } );
        } );
    } );


    describe( 'change()', () =>
    {
        test( 'should call change exactly once', () =>
        {
            const onChange = jest.fn();
            wrapper.setProps( {
                onChange,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.change();
            expect( onChange ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t change since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.change() ).toThrow( expectedError );
            } );

            test( 'should not trigger onChange when isDisabled', () =>
            {
                const onChange = jest.fn();
                wrapper.setProps( { onChange, isDisabled: true } );

                try
                {
                    driver.change();
                }
                catch ( error )
                {
                    expect( onChange ).not.toBeCalled();
                }
            } );
        } );


        describe( 'isReadOnly', () =>
        {
            test( 'throws the expected error when isReadOnly', () =>
            {
                const expectedError =
                    'Input can\'t change since it is read only';
                wrapper.setProps( { isReadOnly: true } );

                expect( () => driver.change() ).toThrow( expectedError );
            } );

            test( 'should not trigger onChange when isReadOnly', () =>
            {
                const onChange = jest.fn();
                wrapper.setProps( { onChange, isReadOnly: true } );

                try
                {
                    driver.change();
                }
                catch ( error )
                {
                    expect( onChange ).not.toBeCalled();
                }
            } );
        } );
    } );


    describe( 'clickCloseTagByIndex( index )', () =>
    {
        test( 'should call onClickClose exactly once', () =>
        {
            const onClickClose = jest.fn();
            wrapper.setProps( {
                onClickClose,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.clickCloseTagByIndex( 1 );
            expect( onClickClose ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t clickCloseTagByIndex since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.clickCloseTagByIndex() )
                    .toThrow( expectedError );
            } );

            test( 'should not trigger onClickClose when isDisabled', () =>
            {
                const onClickClose = jest.fn();
                wrapper.setProps( { onClickClose, isDisabled: true } );

                try
                {
                    driver.clickCloseTagByIndex();
                }
                catch ( error )
                {
                    expect( onClickClose ).not.toBeCalled();
                }
            } );
        } );


        describe( 'isReadOnly', () =>
        {
            test( 'throws the expected error when isReadOnly', () =>
            {
                const expectedError =
                    'Input can\'t clickCloseTagByIndex since it is read only';
                wrapper.setProps( { isReadOnly: true } );

                expect( () => driver.clickCloseTagByIndex() )
                    .toThrow( expectedError );
            } );

            test( 'should not trigger onClickClose when isReadOnly', () =>
            {
                const onClickClose = jest.fn();
                wrapper.setProps( { onClickClose, isReadOnly: true } );

                try
                {
                    driver.clickCloseTagByIndex();
                }
                catch ( error )
                {
                    expect( onClickClose ).not.toBeCalled();
                }
            } );
        } );
    } );

    describe( 'clickCloseTagByLabel( label )', () =>
    {
        test( 'should call onClickClose exactly once', () =>
        {
            const onClickClose = jest.fn();
            wrapper.setProps( {
                onClickClose,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.clickCloseTagByLabel( 'TagLabel 1' );
            expect( onClickClose ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t clickCloseTagByLabel since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.clickCloseTagByLabel() )
                    .toThrow( expectedError );
            } );

            test( 'should not trigger onClickClose when isDisabled', () =>
            {
                const onClickClose = jest.fn();
                wrapper.setProps( {
                    onClickClose,
                    isDisabled : true,
                    children   : [
                        <Tag label = "TagLabel 1" />,
                        <Tag label = "TagLabel 2" />,
                    ],
                } );

                try
                {
                    driver.clickCloseTagByLabel( 'TagLabel 2' );
                }
                catch ( error )
                {
                    expect( onClickClose ).not.toBeCalled();
                }
            } );
        } );


        describe( 'isReadOnly', () =>
        {
            test( 'throws the expected error when isReadOnly', () =>
            {
                const expectedError =
                    'Input can\'t clickCloseTagByLabel since it is read only';
                wrapper.setProps( { isReadOnly: true } );

                expect( () => driver.clickCloseTagByLabel() )
                    .toThrow( expectedError );
            } );

            test( 'should not trigger onClickClose when isReadOnly', () =>
            {
                const onClickClose = jest.fn();
                wrapper.setProps( {
                    onClickClose,
                    isReadOnly : true,
                    children   : [
                        <Tag label = "TagLabel 1" />,
                        <Tag label = "TagLabel 2" />,
                    ],
                } );

                try
                {
                    driver.clickCloseTagByLabel( 'TagLabel 2' );
                }
                catch ( error )
                {
                    expect( onClickClose ).not.toBeCalled();
                }
            } );
        } );
    } );


    describe( 'keyPress()', () =>
    {
        test( 'should trigger onKeyPress callback prop once', () =>
        {
            const onKeyPress = jest.fn();
            wrapper.setProps( {
                onKeyPress,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.keyPress();
            expect( onKeyPress ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t keyPress since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.keyPress() ).toThrow( expectedError );
            } );

            test( 'should not trigger onKeyPress when isDisabled', () =>
            {
                const onKeyPress = jest.fn();
                wrapper.setProps( { onKeyPress, isDisabled: true } );

                try
                {
                    driver.keyPress();
                }
                catch ( error )
                {
                    expect( onKeyPress ).not.toBeCalled();
                }
            } );
        } );


        describe( 'isReadOnly', () =>
        {
            test( 'throws the expected error when isReadOnly', () =>
            {
                const expectedError =
                    'Input can\'t keyPress since it is read only';
                wrapper.setProps( { isReadOnly: true } );

                expect( () => driver.keyPress() ).toThrow( expectedError );
            } );

            test( 'should not trigger onKeyPress when isReadOnly', () =>
            {
                const onKeyPress = jest.fn();
                wrapper.setProps( { onKeyPress, isReadOnly: true } );

                try
                {
                    driver.keyPress();
                }
                catch ( error )
                {
                    expect( onKeyPress ).not.toBeCalled();
                }
            } );
        } );
    } );


    describe( 'keyUp()', () =>
    {
        test( 'should trigger onKeyUp callback prop once', () =>
        {
            const onKeyUp = jest.fn();
            wrapper.setProps( {
                onKeyUp,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.keyUp();
            expect( onKeyUp ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t keyUp since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.keyUp() ).toThrow( expectedError );
            } );

            test( 'should not trigger onKeyUp when isDisabled', () =>
            {
                const onKeyUp = jest.fn();
                wrapper.setProps( { onKeyUp, isDisabled: true } );

                try
                {
                    driver.keyUp();
                }
                catch ( error )
                {
                    expect( onKeyUp ).not.toBeCalled();
                }
            } );
        } );


        describe( 'isReadOnly', () =>
        {
            test( 'throws the expected error when isReadOnly', () =>
            {
                const expectedError =
                    'Input can\'t keyUp since it is read only';
                wrapper.setProps( { isReadOnly: true } );

                expect( () => driver.keyUp() ).toThrow( expectedError );
            } );

            test( 'should not trigger onKeyUp when isReadOnly', () =>
            {
                const onKeyUp = jest.fn();
                wrapper.setProps( { onKeyUp, isReadOnly: true } );

                try
                {
                    driver.keyUp();
                }
                catch ( error )
                {
                    expect( onKeyUp ).not.toBeCalled();
                }
            } );
        } );
    } );


    describe( 'keyDown()', () =>
    {
        test( 'should trigger onKeyDown callback prop once', () =>
        {
            const onKeyDown = jest.fn();
            wrapper.setProps( {
                onKeyDown,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.keyDown();
            expect( onKeyDown ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t keyDown since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.keyDown() ).toThrow( expectedError );
            } );

            test( 'should not trigger onKeyDown when isDisabled', () =>
            {
                const onKeyDown = jest.fn();
                wrapper.setProps( { onKeyDown, isDisabled: true } );

                try
                {
                    driver.keyDown();
                }
                catch ( error )
                {
                    expect( onKeyDown ).not.toBeCalled();
                }
            } );
        } );


        describe( 'isReadOnly', () =>
        {
            test( 'throws the expected error when isReadOnly', () =>
            {
                const expectedError =
                    'Input can\'t keyDown since it is read only';
                wrapper.setProps( { isReadOnly: true } );

                expect( () => driver.keyDown() ).toThrow( expectedError );
            } );

            test( 'should not trigger onKeyDown when isReadOnly', () =>
            {
                const onKeyDown = jest.fn();
                wrapper.setProps( { onKeyDown, isReadOnly: true } );

                try
                {
                    driver.keyDown();
                }
                catch ( error )
                {
                    expect( onKeyDown ).not.toBeCalled();
                }
            } );
        } );
    } );


    describe( 'mouseOut()', () =>
    {
        test( 'should call onMouseOut exactly once', () =>
        {
            const onMouseOut = jest.fn();
            wrapper.setProps( {
                onMouseOut,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.mouseOut();
            expect( onMouseOut ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t mouseOut since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.mouseOut() ).toThrow( expectedError );
            } );

            test( 'should not trigger onMouseOut when isDisabled', () =>
            {
                const onMouseOut = jest.fn();
                wrapper.setProps( { onMouseOut, isDisabled: true } );

                try
                {
                    driver.mouseOut();
                }
                catch ( error )
                {
                    expect( onMouseOut ).not.toBeCalled();
                }
            } );
        } );
    } );


    describe( 'mouseOver()', () =>
    {
        test( 'should call onMouseOver exactly once', () =>
        {
            const onMouseOver = jest.fn();
            wrapper.setProps( {
                onMouseOver,
                children : [
                    <Tag label = "TagLabel 1" />,
                    <Tag label = "TagLabel 2" />,
                ],
            } );

            driver.mouseOver();
            expect( onMouseOver ).toBeCalledTimes( 1 );
        } );


        describe( 'isDisabled', () =>
        {
            test( 'throws the expected error when isDisabled', () =>
            {
                const expectedError =
                    'Input can\'t mouseOver since it is disabled';
                wrapper.setProps( { isDisabled: true } );

                expect( () => driver.mouseOver() ).toThrow( expectedError );
            } );

            test( 'should not trigger onMouseOver when isDisabled', () =>
            {
                const onMouseOver = jest.fn();
                wrapper.setProps( { onMouseOver, isDisabled: true } );

                try
                {
                    driver.mouseOver();
                }
                catch ( error )
                {
                    expect( onMouseOver ).not.toBeCalled();
                }
            } );
        } );
    } );
} );
