var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItems groceryItems = {['Apples', 'Oranges']} />
  </div>
);

var Apples = () => (
  <li>Apples!</li>
)

var Oranges = () => (
  <li>Oranges!</li>
)


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryListItems = (props) => {

  return (
    <ul>
      {props.groceryItems.map(groceryItem => 
        <GroceryListItem groceryItem={groceryItem} />
      )}
    </ul>
  )
};

ReactDOM.render(<GroceryList />, document.getElementById('app'));