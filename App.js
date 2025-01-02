import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
// const parent=React.createElement('div',{id:"parent"},
//     React.createElement('div',{id:"child"},
//         React.createElement('h1',{id:"heading"},"Hello World from React")))
// console.log(parent)    //object



// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);


//JSX is a html like syntax
//JSX(transplied before reaches JS engine done by parcel(babel))


//jsx -> react.createElement -> react element -> render(html element)
const jsxheading=(<h1 className="heading">Namaste react JSX</h1>);
const root=ReactDOM.createRoot(document.getElementById('root'));


//React Component 
//Class Based Component
//Functional Component - best practice (Function that returns a piece of JSX or React element)
const title= (
        <h2 className="title">Title JSX in Functional Component</h2>);


const HeadingComponent=() => {
    return (
        <div id="container">
            {title}
            <h1 className="header">JSX in Functional Component</h1>
        </div>
    
);
}
/*food ordering app

header -> navigation component
footer -> copyrights, disclaimer
body -> serach component ,restaurantcontiner(restaurantcard rating,price,cusines,delivery time)
*/

//data

//data




//props just arguments to funcion,we can pass data dynamically using props.

const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
        },
        {
            path:"/about",
            element:<About/>,
        },
    ]
);


const AppLayout=()=>{
    return (
        <div className="app">
           <Header/>
           <Body/>
        </div>
    );
};




root.render(<AppLayout/>);

//config driven UI- driven by config(data comes from backend)

