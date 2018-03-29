export default class UploaderDriver
{
    constructor( wrapper )
    {
        this.wrapper = wrapper;
    }

    click()
    {
        this.wrapper.find( 'Button' ).simulate( 'click' );
        return this;
    }

    clickSecondary()
    {
        this.wrapper.find( 'IconButton' ).simulate( 'click' );
        return this;
    }

    change( value )
    {
        this.wrapper.simulate( 'change', { target: { value } } );
        return this;
    }
}
