export default function cityGrid() {
  const [city, setCity] = useState('Los Angeles');

  const [LosAngelesContentVisible, setLosAngelesContentVisible] = useState(false);
  const [otherCityContentVisible, setOtherCityContentVisible] = useState(false);

  useEffect(() => {
    city === 'Los Angeles' ? setLosAngelesContentVisible(true) : setLosAnglesContentVisible(false)
    city === 'othercity1' ? setOtherCityContentVisible(true) : setOtherCityContentVisible(false)
   ...etc
}

const handleOnChange = (e) => {
  setCity(e.target.value)
}
return (
  <div>
    <div>
      <select>
        <option value="Los Angeles" onClick={handleOnChange}/>
        <option value="othercity1" onClick={handleOnChange}/>
        <option value="othercity2" onClick={handleOnChange}/>
        <option value="othercity3" onClick={handleOnChange}/>
      <select>
    </div>
    <div>
      {LosAngelesContentVisible &&
        <div>
          <ReactComponentWithApiData city={"Los Angeles"} />
        </div>
      }
      {othercityContentVisible &&
        <div>
          <ReactComponentWithApiData city={"othercity1"} />
        </div>
      }
      ...etc
    </div>
  </div>
  );
}