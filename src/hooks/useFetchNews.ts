import React from "react";
import { StringLiteral } from "typescript";


const useFetchNews = () => {
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines",
                    {
                        params: {
                            category: "technology",
                            country: "ng",
                            apiKey: process.env.REACT_APP_NEWS_API_KEY,
                        },
                    }
                );
                setNews(response.data.articles);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    return news, loading, error
}