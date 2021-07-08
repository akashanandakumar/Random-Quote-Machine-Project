function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuotes, setRandomQuotes] = React.useState([]);
    const [color,setColor] = React.useState("#E0FFFF")

    React.useEffect(() => {
        async function fetchData(){

            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);

            let randomIndex = Math.floor(Math.random() * data.length);

            setRandomQuotes(data[randomIndex])
        }

        fetchData(); 

    }, [])


    const  getNewQuote = () => {

        const colors = [
            "#FAEBD7", 
            "#00FFFF",
            "#7FFFD4",
            "#0000FF",
            "#696969",
            "#A52A2A",
            "#5F9EA0",
            "#7FFF00",
            "#008B8B",
            "#2F4F4F",
        ];

        let randomColorIndex = Math.floor(Math.random() * colors.length);
        let randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuotes(quotes[randomIndex])
        setColor(colors[randomColorIndex])
    }

    return (
        <div style={{backgroundColor: color , minHeight: "100vh" }}>
            <div class ="container pt-5" style={{width: "50%"}}>
                <div class = "jumbotron">
                    <div class = "card">

                        <div class = "card-header" >

                            <h2 style = {{color : "#008080"}}>Motivational Quotes </h2>

                        </div>

                        <div class = "card-body">
                            { randomQuotes ? (
                                
                                <>

                                <p class = "class-text" style={{fontFamily:  "cursive"}}>
                                   &quot; {randomQuotes.text} &quot;
                                </p>

                                <h5 class="card-title" >- {randomQuotes.author || "NO Author"}</h5>

                                </>

                            ) : (

                            <h2>Loading</h2>

                            )}

                                <div class="row">

                                    <button onClick = {getNewQuote} class="btn btn-primary" >
                                        New Quote
                                    </button>
                              
                                </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))