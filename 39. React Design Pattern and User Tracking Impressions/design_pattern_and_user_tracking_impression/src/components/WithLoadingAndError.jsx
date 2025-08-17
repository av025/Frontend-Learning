import { useEffect, useState } from "react";

function WithLoadingAndError(Component, url) { 

  return function WrapperComponent(props) {

      const [data, setData] = useState(null);
      const [loading, setLoading] = useState(false);

  async function fetchUrl() {
    try {
      setLoading(false);
      const response = await fetch(url);
      const data =  await response.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchUrl();
}, []); 

if(loading) {
    return <div>Loading Data from the Network</div>
}

return <Component {...props} data={data} />;
}  
}

export default WithLoadingAndError;

//! Example of Higher Order Component