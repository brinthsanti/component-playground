
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


> Pagination

> Add a handle div inside pagination div
> Add prev and next button inside handle div
> render button between prev and next button by calculating from totalPages and itemsPerPage props.
> Add a state named page with default as 1
> Add a click handler to button and pass the index after incrementing by 1.
> In the handler change the page with the passed argument and  check the
 passed value is between 1 to totalPage/itemsPerPage
> For prev and next handles use the click handle by passing the page as parameter
by increment and vice versa.
> get an onclick prop and invoke by passing current page in click handler

>> slicing with page formula [..].slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)

> Infinite Scroll

> Add a state lastElement to track the last element
> Add a ternary in the div container to pass lastElement as callback ref (ref={index === products.length - 1 ? setLastElement : null})
> Add an effect to instantiate interscetion observer and pass the lastElement to observe
> Add a condtion if its is intersecting make another api call or change respective state
 

> Menu

> Frame the menu constant with array of object containing children property eg:
   const menu = [
     {
       label: 'First',
       children: [
         {
           label: 'First one'
         },
       ]
     },
     {
       label: 'Second'
     },
   ]

> Write a recursive function to render menu items eg:
   function renderMenu(menu){
      return menu.map((menu)=>{
        return <div className='menu'>
            <span>{menu.label}</span>
            {
              menu.children && 
              <div style={{paddingLeft: '10px'}}>
                {renderMenu(menu.children)}
              </div>
            }
        </div>
      })
   }

> Progress

   >Add container with class name progress and give background color and border radius 10px

   > Add div with class name track and give background color, min height and inherit border radius from parent

   > get width as prop and apply it to the track through style prop


> Rate

> Add a state to track the current index
> Receive a prop for number of stars
> Render number of stars with Array(noOfStars).fill('').map((-,index)=> <div className='star'/>) and give them display inline-block
> Add onMouseEnter and onMouseLeave event and setState with index as ()=>setState(index)
> dynamically calculate the background color with index like if(index <= state) return 'teal';



> Tab

 > Get a config as array of objects with label, id, children in it
 > Add a nav element and render the tab header with config labels
 > add a state named active to track active tab
 > Add click handler to nav child to set active tab
 > set a border bottom to nav child with the active and index
 > determine the children to show by querying the config with active state

> Drawer

> Add drawer div positon fixed with width 500px and height 100vh and alight to right
> add a state named translate with 100 as default
> set the translate value to transform property of drawer with translateX in percentage
> add a header div with title and cancel button
> In cancel button add handler and set translate to 100 on click

> Tooltip

> Add  div named tooltip_container and inside that create tooltip div with react portal
> add a state to set opacity with default value of 1;
> Add MouseEnter and MouseLeave event to set opactity to 1 to 0 or viceversa
> add PosRef and tooltipRef to track the positon
> On MouseEnter get the left, right and width of the tooltip by e.getBoundingClientRect()
> and set top and left as below inside the handler
    posRef.current.top = top - tooltipRef.current.clientHeight -10;
    posRef.current.left = left + width/3;

> Autocomplete