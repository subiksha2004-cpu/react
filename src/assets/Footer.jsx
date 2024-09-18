const Footer = (props) => {
    console.log(props)
    return (
        <div className="w-full h-[3vh] grad-blue-bg text-white flex justify-center items-center">
            {props.appdata}
        </div>
    )
}

export default Footer
