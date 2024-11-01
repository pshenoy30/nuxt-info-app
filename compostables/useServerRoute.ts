export const useServerRoute = <T>() => {
    const pagePath = useRoute().path

    return useFetch<T>(`/api${pagePath}`)
    
}


