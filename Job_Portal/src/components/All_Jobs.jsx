import React, { useEffect, useState ,useContext} from "react";
import axios  from "axios";
import { UserContext } from "../Context/Context";
import './All_Jobs.css'
function AllJobs() {
    const [alldata, setalldata] = useState([]);
    const [page, setPage] = useState(1);
   const contextdata = useContext(UserContext);
   const [userskills,setuserskills] = useState({});
    async function showalljobs() {
        const data = await axios.get('http://localhost:5000/alljobs');
        console.log(typeof (data.data.Job_Data));
        setalldata(data.data.Job_Data);
    }
    function selectPageHandler(selectedPage) {
        if (selectedPage >= 1 && selectedPage <= alldata.length / 5 && selectedPage != page) {
            setPage(selectedPage);
        }

    }
    async function getuserskills(){
       try{
        const result = await axios.post('http://localhost:5000/userskills',{
            Email:"alicejohn@gmail.com"
        })
        console.log("The result is",typeof(result));
        setuserskills(result);
       }
       catch(err){
        console.log(err.message);
       }
        
    }
    function checkyourjobscore(index){
        console.log('Skills', userskills.data.skills);  // Returning the skiils object 
        console.log(alldata[index].JobDescription);
        console.log(contextdata.useremail);
    }
    useEffect(() => {
        getuserskills();
        showalljobs();
    }, []);
    return (
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
                                alldata.slice(page * 5 - 5, page * 5).map((jobs, index) => {
                                    return (
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
                                                        <button onClick={()=>checkyourjobscore(index)}>Check Your Job Score</button>
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
                        className={page > 1 ? "" : "pagination_disable"}
                        onClick={() => selectPageHandler(page - 1)}>←</span>
                    {
                        alldata.length > 0 &&
                        [...Array(Math.ceil(alldata.length / 5))].map((_, i) => {
                            return (
                                <span
                                    className={page === i + 1 ? "paginationselected" : ""}
                                    onClick={() => selectPageHandler(i + 1)}
                                    key={i}
                                >
                                    {i + 1}
                                </span>
                            );
                        })
                    }
                    <span
                        className={page < alldata.length / 5 ? "" : "pagination_disable"}
                        onClick={() => selectPageHandler(page + 1)}>→</span>
                </div>
            </div>
        </>
    )
}
export default AllJobs;