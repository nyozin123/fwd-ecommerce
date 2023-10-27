
import CategoryCard from './CategoryCard'

const getCategory= async()=>{
const res=await fetch("https://dummyjson.com/products/categories")
const data=await res.json()
return data
}

const Category = async () => {
    const category=await getCategory()
    
  return (
    <div>
  <h3 className="text-lg font-semibold mb-3">Categories</h3>
  <div className="flex flex-wrap flex-row">
    {category.map((ct,index)=>(
      
        <CategoryCard key={ct+index} category={ct}/>
    ))}
  </div>
    </div>
  )
}

export default Category