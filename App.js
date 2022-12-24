
    const styles={
        backgroundColor:"red",
        width:"100%",
        height:"100px",
        margin:"0px 0px"
        

    }
    const styles2={
        width:"100%",
        margin:"0px 0px",
        fontColor:"navyblue",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:"150px"
    }
    const styles3={
        backgroundColor:"green",
        width:"100%",
        height:"100px",
        margin:"0px 0px",
       
    }
const red = React.createElement("h1",{
    id:"red",
    style:styles
},"");
const white = React.createElement("h2",{
    id:"white",
    style:styles2
},"INDIA");
const green = React.createElement("h2",{
    id:"green",
    style:styles3
},"");
const childcontainer= React.createElement("div",{},white);
const container = React.createElement("div",{},[red,childcontainer,green]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
