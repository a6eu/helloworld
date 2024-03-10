import axios from 'axios';

const useFetchData = async (url, setList, setTotal, setLoading) => {
    setLoading(true);
    try {
        const response = await axios.get(url);
        setList(response.data.results);
        setTotal(response.data.count);
        console.log('response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        setLoading(false);
    }
};

export default useFetchData;
