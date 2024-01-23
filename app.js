// React 2
const container = document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React",container);

// React 3
// const div_container = () => {
//     return React.createElement('div',null,'Hey Kalvians! Welcome to react learning',
//         React.createElement('div',null,'Lets rock and roll.')
//     );
// }
// ReactDOM.render(React.createElement(div_container),container)

// React 4
class ReactContainer extends React.Component{
    render(){
        return React.createElement('div',null,'Hey Kalvians.',
        React.createElement('div',null,"Lets rock and roll with classes")
        );
    }   
}
ReactDOM.render(React.createElement(ReactContainer),container)