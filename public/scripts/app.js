
const App = () => {
    const authState = ReactRedux.useSelector(state => state.authState);
    React.useEffect(() => {
        console.log(authState); 
    })
    return (
        <h2>Hi Raghavan</h2>
    )
}