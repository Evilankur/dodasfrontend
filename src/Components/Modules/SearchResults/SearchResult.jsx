import Image from 'next/image';
import React, { useState } from 'react';



const SearchResult = ({ searchData }) => {
const [Limit, setLimit] = useState(6);

    

    const CollectionNames = Array.from(new Set(searchData.map(item => item._source.orgName)));
    return (
        <div className='text-start flex-start w-[818px]'>
            <div>
            <h1 className='text-[#91929D] text-lg my-2'>COLLECTIONS</h1>
            {
                CollectionNames.map((title,i) => <p className='font-semibold my-2' key={i}>{ title}</p>)  
            }

            
            </div>
            
            <div>
            <h1 className='text-[#91929D] text-lg my-2'>ASSETS</h1>
                {
                    searchData.slice(0,Limit).map((data,i) => <div className='flex my-2 gap-2 items-center font-semibold' key={i}>
                        <Image width={40} height={40} className='rounded-md' alt='asset-img' src={data._source.imageURL}/>
                        <p>{data._source.token_name }</p>

                    </div>)
                }
            </div>

        </div>
    );
};

export default SearchResult;
