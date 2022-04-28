import React,{useState} from 'react';
import CompanyDetailsComponent from './CompanyDetailsComponent';
// import {Container,Row} from 'react-bootstrap';
import axios from 'axios';


function CompaniesListComponent(props){

    const userId = 1

    const [CompanyList,setCompanyList] = useState([])
    axios.get("http://localhost:52682/api/Companies").then((res)=>{
        setCompanyList(res.data)
    })
    var CompanyDetailsList = []
    console.log(CompanyList)
    
    CompanyList.map((company)=>{
        console.log(company)
        CompanyDetailsList.push(<CompanyDetailsComponent loggedIn={true} watch={false} userId={userId} companyId={company.companyId} companyName={company.companyName} description={company.description} price={company.currentStockPrice}/>)
        return false
})

    return<div>
            <h1>Companies list component</h1>

        {CompanyList.map(company => 
            <CompanyDetailsComponent
                key={company.CompanyCode}
                // onRemove={removetowatch}
                loggedIn={true}
                watch={false}
                companyCode = {company.CompanyCode}
                companyName={company.CompanyName}
                description={company.BriefDesc}
                price={company.CurrentStockPrice} />
        )}
        
        </div>  
        }   
        export default CompaniesListComponent