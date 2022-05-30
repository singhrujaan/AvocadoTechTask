import * as React from "react";
import { useGetpostsQuery } from ".././services/postsApi";
import PostComponent from "./PostComponent";

export default function AllPosts() {
  const { data, error, isLoading } = useGetpostsQuery();
  
  return (
    <div className="mx-5">
      {error && <div>Something went Wrong</div>}
      {isLoading ? (
        <div>Loading data from api ... </div>
      ) : (
        data && (
          <div>
            <div className="text-xl font-semibold my-8"> Api fetching using RTK query</div>
            {data.map((item, index) => {
              return (<div key={index}>
                  <PostComponent api={"rtk"} item= {item} />
                  
              </div>)
            })}
          </div>
        )
      )}
    </div>
  );
}
