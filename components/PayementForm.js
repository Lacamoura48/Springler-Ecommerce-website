import React, {useState, useEffect} from 'react'

function PayementForm({setUnlock}) {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        async function getCountries(){
             fetch('https://restcountries.com/v3.1/all').then((res)=>{
                return res.json()
             }).then((data) => setCountries(data))
             
             
            
        }
        getCountries()
    }, [])

useEffect(()=>{
     if(first != ''
        && last != ''
        && street != ''
        && city != ''
        && country != ''
        && zip != ''){
            setUnlock(false)
        }else {
            setUnlock(true)
        }
}, [first, last, street, city, country, zip])
   

  return (
    <form action=''>
    <h1 className='text-3xl mb-20'>
        Shipping Details
    </h1>
    <div className='flex gap-4 mb-6'>
        <div className='flex flex-col  w-full'>
            <label >First</label>
            <input className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} onChange={(e)=>setFirst(e.target.value)} type="text" name="f-name" />
        </div>
        <div className='flex flex-col  w-full'>
            <label >Last</label>
            <input className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} onChange={(e)=>setLast(e.target.value)} type="text" name="l-name" />
        </div>
    </div>
    <div className='flex flex-col mb-6'>
        <label >Street</label>
        <input type="text" className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} onChange={(e)=>setStreet(e.target.value)} name="address" />
    </div>
    <div className='flex gap-4 mb-16'>
        <div className='flex flex-col'>
            <label >City</label>
            <input type="text" className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} onChange={(e)=>setCity(e.target.value)} name="city" />
        </div>
        <div className='flex flex-col'>
            <label >Country</label>
            <input type="datalist" list='countries' className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} onChange={(e)=>setCountry(e.target.value)} name="country" />
            <datalist id='countries'>
                {countries.map((country, index)=>{
                    return (<option key={index} value={country.name.common}>{country.name.common}</option>)
                })}
            </datalist>
        </div>
        <div className='flex flex-col'>
            <label >Zip</label>
            <input type="text" className={`bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-2 outline-none  w-full`} onChange={(e)=>setZip(e.target.value)} name="zip" />
        </div>
    </div>
  

    <div>
    </div>
    </form>
  )
}

export default PayementForm