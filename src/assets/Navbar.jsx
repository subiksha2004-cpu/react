const Navbar = ({ data }) => {

    console.log(data)
    return (
        <div className="w-full h-[3vh] grad-blue-bg text-white flex justify-center items-center gap-4">
            {data.Appname} {data.Appdata}
        </div>
    )
}

export default Navbar;
