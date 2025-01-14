import React, { useEffect, useState } from "react";
import axios, { all } from 'axios';
import './All_Jobs.css'
function AllJobs(){
    const [alldata,setalldata] = useState([]);
    const [totalPages,settotalPages] = useState(0);
    async function showalljobs(){
        const data = await axios.get('http://localhost:5000/alljobs');
        setalldata(data.data.Job_Data);
        console.log(data);
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
                        alldata.map((jobs,index)=>{
                            return(
                                <div className="alljobs-parent">
                                <div className="alljobs-cards">
                        <div className="alljobs-details">
                            <div>Company Name:-</div>
                            <div>Salary:-</div>
                            <div>Location:-</div>
                            <div>Type Of Job:-</div>
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
         </div>
        </>
    )
}
export default AllJobs;