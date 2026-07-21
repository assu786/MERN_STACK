function Biryani(props) {
    return (
        <>
            <h1>Biryani</h1>
            <p>
                {props.name} is a mixed rice dish traditionally made with rice,
                meat (chicken, goat, beef), seafood (prawns or fish), or vegetables,
                and spices. It was present in Mughal-era {props.k}.
            </p>
            <img src="https://wallpapers.com/images/hd/chicken-biryani-flat-lay-e40a845inmda1dac.jpg" width="100px" height="100px"/>
        </>
    );
}

export default Biryani;