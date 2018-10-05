const ERR = {
    FIELDSET_ERR : ( event ) =>
        `Fieldset cannot simulate ${event} because it is disabled`,
};

export default class DatePickerDriver
{
    constructor( wrapper )
    {
        this.wrapper = wrapper;
    }

    mouseOver()
    {
        if ( this.wrapper.props().isDisabled )
        {
            throw new Error( ERR.FIELDSET_ERR( 'mouseOver' ) );
        }

        this.wrapper.simulate( 'mouseenter' );
        return this;
    }

    mouseOut()
    {
        if ( this.wrapper.props().isDisabled )
        {
            throw new Error( ERR.FIELDSET_ERR( 'mouseOut' ) );
        }

        this.wrapper.simulate( 'mouseleave' );
        return this;
    }
}