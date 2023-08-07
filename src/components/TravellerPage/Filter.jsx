import { useState } from 'react';
import styles from './Filter.module.css';
import { useEffect } from 'react';

const Filter = () => {
    const [filter, setFilter] = useState({
        minCost: "",
        maxCost: "",
        org: "",
        city: ""
    });

    const [tours, setTours] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://localhost:7064/api/Tours");
            if (response.ok) {
              const data = await response.json();
              setTours(data);
            } else {
              console.error("Error fetching tours:", response.statusText);
            }
          } catch (e) {
            console.log(e);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        setFiltered(tours.filter((d) => {
            let min = parseInt(filter.minCost, 10);
            let max = parseInt(filter.maxCost, 10); 

            if(d.cost >= min && d.cost <= max && d.organization == filter.org && d.city == filter.city){
                return true;
            }

            return false;
        }));
      }, [filter]);

      useEffect(() => {
        console.log(filtered);
      }, [filter]);
      

    const changeHandler = (e) => {
        setFilter(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return(
        <div className={styles.filterEncompass}>
            <div className={styles.filterSection}>
                <div className = {styles.column}>
                    <h3 className = {styles.heading}>Filter By Cost</h3>
                    <label for="minCost" className = {styles.subheading}>Minimum Cost</label>
                    <input type="number" class="form-control form-control-lg" placeholder="Min Cost" name = "minCost" id = "minCost" value = {filter.minCost} onChange = {changeHandler} style = {{width: "15rem"}}></input>

                    <label for="maxCost" className = {styles.subheading} style = {{marginTop: "1rem"}}>Maximum Cost</label>
                    <input type="number" class="form-control form-control-lg" placeholder="Max Cost" name = "maxCost" id = "maxCost" value = {filter.maxCost} onChange = {changeHandler} style = {{width: "15rem"}}></input>
                </div>

                <div className = {styles.column}>
                    <h3 className = {styles.heading}>Filter By City</h3>
                    <label for="city" className = {styles.subheading}>City Name</label>
                    <input type="text" class="form-control form-control-lg" placeholder="City" name = "city" id = "city" onChange = {changeHandler} value = {filter.city} style = {{width: "15rem"}}></input>
                </div>

                <div className = {styles.column}>
                    <h3 className = {styles.heading}>Filter By Organization</h3>
                    <label for="org" className = {styles.subheading}>Agent Organization</label>
                    <input type="text" class="form-control form-control-lg" placeholder="City" name = "org" id = "org" onChange = {changeHandler} value = {filter.org} style = {{width: "15rem"}}></input>
                </div>
            </div>
        </div>
    );
}

export {Filter};