class Animations
{

    constructor (event_element, event_type, action_element, render)
    {
        this.event_element = event_element
        this.event_type = event_type
        this.action_element = action_elemente
        this.render = render
    }

    // TO GET THE ELEMENT WHO LISTEN TO THE EVENT
    get DomElement()
    {
        return document.querySelectorAll(this.event_element)
    }

    // RENDERING WHEN THE EVENT HAPPENED 
    Event ()
    {
        this.DomElement.addEventListener(this.event_type, this.render)
    }

    // THIS IS THE RENDER 
    render (element_to_render, render)
    {
        element_to_render.innerHTML = render
    }

}
