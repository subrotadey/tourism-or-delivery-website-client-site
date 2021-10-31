import { useEffect, useState } from "react"

const useData = () => {
    const [services, setServices] = useState([])
    const [dataLoading, setDataLoading] = useState(true)
    useEffect(() => {
        // setDataLoading(true)
        fetch('https://agile-wildwood-80919.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        // setDataLoading(false)
    }, [])
    return {
        services
    };
}
export default useData;