import React, { useState } from 'react';
import CompanyDetailsComponent from './CompanyDetailsComponent';
// import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';

// axios.defaults.headers.get['Access-Control-Allow-Credentials']='*'

function WatchListComponent(props) {

    let removetowatch = (companyId) => {
        axios.delete("http://localhost:52682/api/watchList", { data: { userId: 1, companyId: companyId } }).then((res) => {
            setCompanyList(res.data)
            console.log(res)
        })
            .catch(res => console.log(res))
        alert("Removed from List Successfully!")
    }

    const [CompanyList, setCompanyList] = useState([])
    useEffect(() => {
        console.log("Sending Request");
        axios.get("http://localhost:52682/api/watchList/1").then((res) => {
            setCompanyList([...res.data])
        }).catch(res => console.log(res))
    }, []);




    if (CompanyList.length === 0) {
        return <div>
                <h2>My Companies List</h2>
                <h3>No Company Stock Prices added to Stock List</h3>
            </div>
    }
    else {

        return <div>
             <h1>Watch list component</h1>

            {CompanyList.map(company => 
                <CompanyDetailsComponent
                    key={company.CompanyCode}
                    onRemove={removetowatch}
                    loggedIn={true}
                    watch={true}
                    companyCode = {company.CompanyCode}
                    companyName={company.CompanyName}
                    description={company.BriefDesc}
                    price={company.CurrentStockPrice} />
            )}
           
        </div>
    }
}

export default WatchListComponent