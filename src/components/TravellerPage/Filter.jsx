import { useState, useEffect } from 'react';
import styles from './Filter.module.css';
import { ViewTours } from './ViewTour';

const Filter = () => {
  const [filter, setFilter] = useState({
    minCost: 0,
    maxCost: 0,
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
    setFiltered(tours.filter(d => {
      let min = parseInt(filter.minCost, 10);
      let max = parseInt(filter.maxCost, 10);

      if ((d.cost >= filter.minCost && d.cost <= filter.maxCost) || d.organization === filter.org || d.city === filter.city) {
        return true;
      }

      return false;
    }));
  }, [filter, tours]);

  const changeHandler = e => {
    setFilter(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    console.log(filtered);
  }, [filtered]);

  return (
    <div className={styles.filterEncompass}>
      <div className={styles.filterSection}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Filter By Cost</h3>
          <label htmlFor="minCost" className={styles.subheading}>Minimum Cost</label>
          <input type="number" className="form-control form-control-lg" placeholder="Min Cost" name="minCost" id="minCost" value={filter.minCost} onChange={changeHandler} style={{ width: "15rem" }} />

          <label htmlFor="maxCost" className={styles.subheading} style={{ marginTop: "1rem" }}>Maximum Cost</label>
          <input type="number" className="form-control form-control-lg" placeholder="Max Cost" name="maxCost" id="maxCost" value={filter.maxCost} onChange={changeHandler} style={{ width: "15rem" }} />
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Filter By City</h3>
          <label htmlFor="city" className={styles.subheading}>City Name</label>
          <input type="text" className="form-control form-control-lg" placeholder="City" name="city" id="city" onChange={changeHandler} value={filter.city} style={{ width: "15rem" }} />
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Filter By Organization</h3>
          <label htmlFor="org" className={styles.subheading}>Agent Organization</label>
          <input type="text" className="form-control form-control-lg" placeholder="Organization" name="org" id="org" onChange={changeHandler} value={filter.org} style={{ width: "15rem" }} />
        </div>
      </div>

      <div className={styles.toursSection}>
        <ViewTours tours = {filtered}/>
      </div>
    </div>
  );
};

export { Filter };
