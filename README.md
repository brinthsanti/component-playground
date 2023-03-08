
> Button

-> For different type of button get type as a prop and add the class for it upfront. eg: button.primary, button.secondary

> Collapse Panel

-> Add two div one for header and other for body
-> Receive title as prop for header content and children for body content
-> Add a toggle for body 

> Accordion

-> build collapse panel first
-> Wrap it around component named Collapse or Accordion
-> Add a state to track active Item
-> pass the activeItem and setActiveItem through
   context to collapse panel
-> Manipulate the children to add id prop through
React.Children.map(children, (childe, index) => 
 React.cloneElement(child, {
    id
 })
)
-> update the toggle conditon in Collapse panel

> Carousel

> add track and handles div
> Make all the childs of track as inline block and box-sizing as border box
> calculate the width of the track depending on
 the width of its children
> Make the container overflow as hidden
> Add state to track container width and set the
child of track's with as container width
> Add handles using Array(childCount).fill('') and pass the index as it is in the click handler
> add transform state to move the divs of tracks by transform: translateX(-{transform}px)
> In the click handler setTransform(index * containerWidth)

For responsiveness add resize event and change the client width and set transform to intial state.

> Stopwatch

> add a paragragh and handle div with background black
> give paragraph a font size of 80px and align to center;
> inside the handle add three button start, stop and reset
> add two states isRunning and time
> Add an effect with isrunning and time as dependency and increment by 1000 ms 
> If isRunning is true start the time. if its false clear the timer. Dont forget
clear each interval in the cleanup function

> ms to seconds = Math.floor((time % 60000) / 1000);
> ms to minutes = Math.floor((time % (60 * 60000) ) / 60000);
> ms to hour = Math.floor((time % (24 * 60 * 60000))/(60*60000));

> Timer
> add a paragragh and handle div with background black
> give paragraph a font size of 80px and align to center;
> inside the handle add three button start, stop and reset
> add two states isRunning and time
> Add an effect with isrunning and time as dependency. and decrement time by 1000 ms
> If isRunning is true start the time. if its false clear the timer. Dont forget
clear each interval in the cleanup function

> ms to seconds = Math.floor((time % 60000) / 1000);
> ms to minutes = Math.floor((time % (60 * 60000) ) / 60000);
> ms to hour = Math.floor((time % (24 * 60 * 60000))/(60*60000));