import {useState, useEffect} from "react";
const Article = () => {
    const [one, setOne] = useState([]);
    useEffect(() => {
        // const url = "data/data.json";
        const url = "https://np-project-33535-default-rtdb.europe-west1.firebasedatabase.app/article/learn.json"
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            setOne(data);
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
      }, []);
      console.log(one);
    return(
        <div>{one.content}<br/>{one.content}<br/>{one.content}<br/>{one.content}<br/>{one.content}<br/>{one.content}<br/>{one.content}<br/>{one.content}<br/>{one.content}<br/></div>
    )
}
export default Article;