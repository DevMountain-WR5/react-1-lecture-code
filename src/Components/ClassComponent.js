//Import the React package, and destructure the Component class
import React, {Component} from 'react';

//Create a JavaScript class, giving it the name you gave the file, have it extend the Component class.
class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            testUsername: 'Matt',
            name: '',
            image: '',
            friends: []
        }
    }

    //This function is tied to the event found on the first input element, and changes the value of this.state.name
    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    //This function is tied to the event found on the second input element, and changes the value of this.state.image
    handleImageChange = (event) => {
        this.setState({image: event.target.value});
    }

    //This function is responsible for taking the user inputs for name and image and adding those to the friends array as an object.
    addFriend = () => {
        //This part of the function creates an object with values from this.state.name and this.state.image (what the user has typed into those inputs).
        const newFriend = {
            name: this.state.name,
            image: this.state.image
        }

        //This part of the function creates a copy of the existing friends array found on this.state.friends, and then adds the newFriend object to it
        const copyFriendArr = [...this.state.friends, newFriend];

        //This part of the function changes the state of friends to be our updated copy(copyFriendArr above), and clears the inputs by setting this.state.name and this.state.image to empty strings
        this.setState({
            friends: copyFriendArr,
            name: '',
            image: ''
        })
    }

    //render is required for class components to return a display
    render(){
        //console logs for state changes should be placed render to show updating state values
        // console.log(this.state.name)
        // console.log(this.state.image)
        // console.log(this.state.friends)

        //Map is able to return JSX, allowing for dynamic creation of display for values found in an array. This ensures that each of our friends in the friends array will be displayed the same way.
        const mappedFriends = this.state.friends.map((element, index) => {
            return (
                <div key={index}>
                    <img src={element.image} alt={element.name}/>
                    <p>{element.name}</p>
                </div>
            )
        })
        return (
            <section>
                <h1>{this.state.testUsername}'s Friend List</h1>
                {/* In React, we use event attributes, and pass the event object when we need it, like seen in our two input elements */}
                <input value={this.state.name} onChange={(event) => this.handleNameChange(event)}/>
                <input value={this.state.image} onChange={(event) => this.handleImageChange(event)}/>
                <button onClick={this.addFriend}>Add Friend</button>
                {mappedFriends}
            </section>
        )
    }
}

//export makes the component available to other places in your code
export default ClassComponent;