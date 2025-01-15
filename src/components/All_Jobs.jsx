import React, { useEffect, useState } from "react";
import axios, { all } from 'axios';
import './All_Jobs.css'
function AllJobs(){
    const [alldata,setalldata] = useState([]);
    const [page,setPage] = useState(1);
    // const []
    async function showalljobs(){
        const data = await axios.get('http://localhost:5000/alljobs');
        setalldata(data.data.Job_Data);
        console.log(data);
    }
    function selectPageHandler(selectedPage){
        if (selectedPage>=1 && selectedPage<=alldata.length/5 && selectedPage!=page){
            setPage(selectedPage);
        }
        
    }
    useEffect(()=>{
        showalljobs();
    },[]);
    return(
        <>
         <div className="alljobs-main-header">
           
            <div className="alljobs-heading-parent">
                Explore Jobs
            </div>

            <div className="filterandjoddetails">
                <div className="alljobs-filters">

                </div>
                <div className="alljobs-jobsetails">    
                  <div className="alljobs-jobsdetailscards">
                    

                    {
                        alldata.slice(page*5-5,page*5).map((jobs,index)=>{
                            return(
                                <div className="alljobs-parent">
                                <div className="alljobs-cards">
                        <div className="alljobs-details">
                            <div>Company Name:- {jobs.CompanyName}</div>
                            <div>Salary:- {jobs.Salary}{" "}{"Lakh"}</div>
                            <div>Location:- {jobs.Location}</div>
                            <div>Type Of Job:- {jobs.TypeofJob}</div>
                        </div>
                        <div className="alljobs-buttons">
                            <div className="alljobs-scorebutton">
                                <button>Check Your Job Score</button>
                            </div>
                            <div className="alljobs-apply">
                                <button>Apply</button>
                            </div>
                        </div>
                    </div>
                    </div>
                            )
                           
                        })
                    }
                    </div>
                </div>
            </div>
            <div className="pagination">
            <span
            className={page>1?"":"pagination_disable"}
             onClick={()=>selectPageHandler(page-1)}>←</span>
            {
               [...Array(alldata.length/5)].map((_,i)=>{
                 return <span className={page===i+1?"paginationselected":""}
                  onClick={()=>selectPageHandler(i+1)} key={i}>{i+1}</span>
               })
            }
            <span
             className={page<alldata.length/5?"":"pagination_disable"}
             onClick={()=>selectPageHandler(page+1)}>→</span>
            </div>
         </div>
        </>
    )
}
export default AllJobs;