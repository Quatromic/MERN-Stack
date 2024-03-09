import { useEffect, useState } from "react"

const Footer = () => {
    const [quote,setQuote] = useState([])

    useEffect(() => {
        const quoteFetcher = async () => {
            await fetch('https://api.quotable.io/random')
                .then(response => response.json())
                .then(data => {
                    setQuote(prevQuote => [...prevQuote,data])
                })
                .catch(error => console.log(error))
        }   
        const caller = async () => {
            const quote = await quoteFetcher()
        }
        caller()
    },[])

    //_id,author,authorSlug,content,dateAdded,dateModified,tags(array)
    const Quote = () => {
        let currentQuote
        if(quote.length > 0){
            currentQuote = quote[0]
            return (
                <footer>
                    <p><u>{currentQuote.author}</u> - <i>{currentQuote.tags[0]}</i></p>
                    <p>{currentQuote.content}</p>
                    <hr/>
                </footer>
            )
        }
        else{
            return (
                <footer>
                    <p>Loading Quote</p>
                </footer>
            )
        }
    }
    return (
        <Quote/>
    )
}

export default Footer