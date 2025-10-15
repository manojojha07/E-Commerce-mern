import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Input } from 'postcss';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const  {products , search , showSearch} = useContext(ShopContext);
  const [ showFilter, SetShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category , setCategory] = useState([]);
  const [subCategory , setSubCategory] = useState([]);
  const [sortType , setSortType] = useState('relavent');


  
  console.log(products);
  

  useEffect(() => {
     setFilterProducts(products);
  },[]);

const toggleSubCategory = (e) => {
  const value = e.target.value;
  if (subCategory.includes(value)) {
    setSubCategory(prev => prev.filter(item => item !== value));
  } else {
    setSubCategory(prev => [...prev, value]);
  }
};



const toggleCategory = (e) => {
  const value = e.target.value;
  if (category.includes(value)) {
    setCategory(prev => prev.filter(item => item !== value));
  } else {
    setCategory(prev => [...prev, value]);
  }
}


const applyFilter = () => {
  let ProductsCopy = products.slice();

  if(showSearch && search){
    ProductsCopy = ProductsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }
  if(category.length > 0){
    ProductsCopy = ProductsCopy.filter(item => category.includes(item.category));
  }
  if(subCategory.length > 0){
    ProductsCopy = ProductsCopy.filter(item => subCategory.includes(item.subCategory));
  }

  setFilterProducts(ProductsCopy);
}

const sortProduct = () => {
  let fbCopy = filterProducts.slice();
  switch(sortType){
    case 'low-high' : setFilterProducts(fbCopy.sort((a,b) => (a.price - b.price)));
    break;

    case 'high-low' : setFilterProducts(fbCopy.sort((a,b) => (b.price - a.price)));
    break;
    default:applyFilter();
    break;
  }
}
   
useEffect(() => {
sortProduct();
},[sortType])

useEffect(() => {
  applyFilter()
},[category , subCategory , search , showSearch , products]);

  return (
    <div  className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
     {/* filter  option here */}
     <div className="min-w-60">
      <p onClick={() => SetShowFilter(!showFilter)} className='my-2 text-xl gap-2 cursor-pointer items-center flex'>FILTERS
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ""}`} src={assets.dropdown_icon} alt="" />
      </p>
      {/* Category Filters */}
      <div className={` border rounded-lg border-gray-400 sm:block pl-5 py-4 mt-6 ${showFilter ? " " : "hidden"}`}>
        <p className="mb-3 text-lg font-medium">Categories</p>
        <div className="flex flex-col gap-2 font-light text-sm  text-gray-700">
          <p className="flex gap-2">
            <input className='w-4' type="checkbox" value={'men'}   onChange={toggleCategory}/>Men
          </p>
          <p className="flex gap-2">
            <input className='w-4' type="checkbox" value={'women'}   onChange={toggleCategory} />Women
          </p>
          <p className="flex gap-2">
            <input className='w-4' type="checkbox" value={'kids'}  onChange={toggleCategory}/>Kids
          </p>
        </div>
      </div>
      {/* type of category box  */}
            <div className={` border rounded-lg border-gray-400 sm:block pl-5 py-4 mt-6 ${showFilter ? " " : "hidden"}`}>
        <p className="mb-3 text-lg font-medium">Type</p>
        <div className="flex flex-col gap-2 font-light text-sm text-gray-700">
  <p className="flex gap-2">
    <input className='w-4' type="checkbox" value={'topwere'} onChange={toggleSubCategory} />Topwear
  </p>
  <p className="flex gap-2">
        <input className='w-4' type="checkbox" value={"winterwear"} onChange={toggleSubCategory} />Winterwear
  </p>
  <p className="flex gap-2">
    <input className='w-4' type="checkbox" value={"bottomwear"} onChange={toggleSubCategory} />Bottomwear
  </p>
</div>

      </div>
     </div>
     {/* Right side products */}
     <div className="flex-1">
      <div className="flex justify-between outline-none p-1 text-base sm:text-2xl mb-4">
        <Title className='' text1={`ALL`}  text2={`COLLECTION`}/>
        {/* Product sorted here */}
        <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-400 text-sm px-3 outline-none '>
          <option value="relavent">Sort by : relavent</option>
          <option value="low-high">Sort by : Low  to High</option>
          <option value="high-low">Sort by : High to Low</option>
        </select>
      </div>
      {/* map  Products  */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {
          filterProducts.map((item, index) => (
           <ProductItem key={index} name={item.name} image={item.image}
           id={item._id} price={item.price}/>
          ))
        }
      </div>
     </div>
     
    </div>
  )
}

export default Collection
