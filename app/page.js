
import ForYouProducts from "@/components/ForYouProducts";
import Category from "@/components/HomePage/Category";

import PopularProduct from "@/components/HomePage/PopularProducts";


export default function Home() {
 
  return (
    
    
    <main >
    
    
      <div className="container mx-auto -z-0">
      
      
        <h1 className="text-red-500">Home Page</h1>
        <br />
        <Category />
        <PopularProduct/>
        <ForYouProducts/>
      </div>
    </main>
    
    
  );
}
