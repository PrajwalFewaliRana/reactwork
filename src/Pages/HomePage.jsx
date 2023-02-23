import React from 'react'
import axios from "axios";
import { useState ,useEffect } from "react";
import ContentLoader from "react-content-loader";
import CardComponent from "../components/CardComponent";


const HomePage = () => {
    const [responseData, setResponseData] = useState([]);
    const [showItems, setShowItems] = useState(3);
    const [isLoading, setIsLoading] = useState(true);

      
  useEffect(() => {
    const API_FETCH_LINK = "https://jsonplaceholder.typicode.com/posts";
    axios.get(API_FETCH_LINK).then((res) => {
      const myData = res.data;
      setResponseData(myData);
      setIsLoading(false);
    });
  }, [])

  return (
    <>
     <div className='gridTemplate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    
      {isLoading &&
       <>
         <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
           <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
           <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
           <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
           <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
         </ContentLoader>
         <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
           <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
           <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
           <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
           <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
         </ContentLoader>
         <ContentLoader viewBox="0 0 500 280" height={280} width={500}>
           <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
           <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
           <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
           <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
         </ContentLoader>
     
        </>
       }
         {responseData.slice(0, showItems).map((item) => (
            <CardComponent
                Key = {item.id}
                imgUrl={`https://picsum.photos/id/${item.id}/500/500`}
                title={item.title}
                text={item.body}
                btnText="Read More"
                link="/blog/slug"
                userId = {item.userId}
            />
          ))}
    
     </div>
       <button
        onClick={() => setShowItems(showItems + 3)}
        className="bg-purple-800 px-10 py-2 mt-4 text-white rounded w-full"
        >
         Load More Data
        </button>
  </>
 )
}

export default HomePage