import React, { useState } from 'react'
import './Sidebar1.css';

const Sidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true);
  const [isDairyEggsOpen, setIsDairyEggsOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isRatingsOpen, setIsRatingsOpen] = useState(true);
  const [isDiscountsOpen, setIsDiscountsOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [priceRange, setPriceRange] = useState(100);

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, name]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== name));
    }
  };
  const toggleAllCategories = () => {
    setIsAllCategoriesOpen(!isAllCategoriesOpen);
  };
  const toggleDairyEggs = () => {
    setIsDairyEggsOpen(!isDairyEggsOpen);
  };
  const toggleBrands = () => {
    setIsBrandsOpen(!isBrandsOpen);
  };
  const toggleRatings = () => {
    setIsRatingsOpen(!isRatingsOpen);
  };
  const toggleSection = (setter) => {
    setter((prev) => !prev);
  };
  const handleReset = () => {
    setSelectedCategories([]);
  };
  const handleRemoveCategory = (category) => {
    setSelectedCategories(selectedCategories.filter((item) => item !== category));
  };
  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
};
  return (
    <div>
        <div className="category-section">
          <div className="category-box">
            <div className="category-header" onClick={toggleAllCategories}>
              <h3>All Categories</h3>
              <span className={`dropdown-icon ${isAllCategoriesOpen ? 'open' : ''}`}>▼</span>
            </div>
            {isAllCategoriesOpen && (
              <>
                <div className="category-header" onClick={toggleDairyEggs}>
                  <h4>Prescription Medication</h4>
                  <span className={`dropdown-icon ${isDairyEggsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isDairyEggsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="allergy medication" checked={selectedCategories.includes("allergy medication")} onChange={handleCategoryChange} />
                      Allergy Medication
                    </label>
                    <label>
                      <input type="checkbox" name="Antibiotics" checked={selectedCategories.includes("Antibiotics")} onChange={handleCategoryChange} />
                      Antibiotics
                    </label>
                    <label>
                      <input type="checkbox" name="antidepressent" checked={selectedCategories.includes("antidepressent")} onChange={handleCategoryChange} />
                      Antidepressent
                    </label>
                    <label>
                      <input type="checkbox" name="yogurt" checked={selectedCategories.includes("Antifungal")} onChange={handleCategoryChange} />
                      Antifungal
                    </label>
                    <label>
                      <input type="checkbox" name="Antiviral" checked={selectedCategories.includes("Antiviral")} onChange={handleCategoryChange} />
                      Antiviral
                    </label>
                    <label>
                      <input type="checkbox" name="Antiviral" checked={selectedCategories.includes("Antiviral")} onChange={handleCategoryChange} />
                      Blood Pressure & Medication
                    </label>
                    <label>
                      <input type="checkbox" name="Antiviral" checked={selectedCategories.includes("Antiviral")} onChange={handleCategoryChange} />
                      Cholestral Medication
                    </label>
                    <label>
                      <input type="checkbox" name="Antiviral" checked={selectedCategories.includes("Antiviral")} onChange={handleCategoryChange} />
                      Diabetese Medication
                    </label>
                    <label>
                      <input type="checkbox" name="Antiviral" checked={selectedCategories.includes("Antiviral")} onChange={handleCategoryChange} />
                      Pain Releif Medication
                    </label>
                    <label>
                      <input type="checkbox" name="Antiviral" checked={selectedCategories.includes("Antiviral")} onChange={handleCategoryChange} />
                      Heart Medication
                    </label>
                  </div>
                )}
                <hr className="black-line" />
                <div className="category-header" onClick={toggleBrands}>
                  <h4>Brands</h4>
                  <span className={`dropdown-icon ${isBrandsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isBrandsOpen && (
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" name="Amul" checked={selectedCategories.includes("Amul")} onChange={handleCategoryChange} />
                      Premier Brand 
                    </label>
                  </div>
                )}
                  <div className="section-gap"></div>
                  <div className="subsection ratings">
                    <div className="category-header" onClick={toggleRatings}>
                      <h4>Ratings</h4>
                      <span className={`dropdown-icon ${isRatingsOpen ? 'open' : ''}`}>▼</span>
                      </div>
                      {isRatingsOpen && (
                        <div className="checkbox-group">
                          <label>
                            <input
                            type="checkbox"
                            name="Above 4"
                            checked={selectedCategories.includes('Above 4')}
                            onChange={handleCategoryChange}
                          />
                          Above 4 <span className="star-icon">★</span>
                         </label>
                         <label>
                          <input type="checkbox"name="Under 3"
                          checked={selectedCategories.includes('Under 3')}
                          onChange={handleCategoryChange}
                          />
                          Under 3 <span className="star-icon">★</span>
                          </label>
                        </div>
                      )}
                  </div>
                    <hr className="black-line" />
                    <div className="category-header" onClick={() => toggleSection(setIsDiscountsOpen)}>
                      <h4>Discount</h4>
                  <span className={`dropdown-icon ${isDiscountsOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isDiscountsOpen && (
                  <div className="checkbox-group">
                    <label><input type="checkbox" name="50% or more" checked={selectedCategories.includes('50% or more')} onChange={handleCategoryChange} /> 50% or more</label>
                    <label><input type="checkbox" name="40% or more" checked={selectedCategories.includes('40% or more')} onChange={handleCategoryChange} /> 40% or more</label>
                    <label><input type="checkbox" name="30% or more" checked={selectedCategories.includes('30% or more')} onChange={handleCategoryChange} /> 30% or more</label>
                    <label><input type="checkbox" name="20% or more" checked={selectedCategories.includes('20% or more')} onChange={handleCategoryChange} /> 20% or more</label>
                    <label><input type="checkbox" name="10% or more" checked={selectedCategories.includes('10% or more')} onChange={handleCategoryChange} /> 10% or more</label>
                    <label><input type="checkbox" name="05% or more" checked={selectedCategories.includes('05% or more')} onChange={handleCategoryChange} /> 05% or more</label>
                  </div>
                )}
                 <hr className="black-line" />
                <div className="category-header" onClick={() => toggleSection(setIsPriceOpen)}>
                  <h4>Price</h4>
                  <span className={`dropdown-icon ${isPriceOpen ? 'open' : ''}`}>▼</span>
                </div>
                {isPriceOpen && (
                                <div>
                                    <div className="price-range-container">
                                        <span>100</span>
                                        <input
                                            type="range"
                                            min="100"
                                            max="500"
                                            value={priceRange}
                                            onChange={handlePriceChange}
                                            className="price-range"
                                        />
                                        <span>500</span>
                                    </div>
                                    <button className="save-btn">Save</button>
                                    <div className="checkbox-group">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="100-500"
                                                checked={selectedCategories.includes('100-500')}
                                                onChange={handleCategoryChange}
                                            />
                                            100-500
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="500-1000"
                                                checked={selectedCategories.includes('500-1000')}
                                                onChange={handleCategoryChange}
                                            />
                                            500-1000
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="1000-2000"
                                                checked={selectedCategories.includes('1000-2000')}
                                                onChange={handleCategoryChange}
                                            />
                                            1000-2000
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="2000-5000"
                                                checked={selectedCategories.includes('2000-5000')}
                                                onChange={handleCategoryChange}
                                            />
                                            2000-5000
                                        </label>
                                    </div>
                                </div>
                            )}
              </>
            )}
          </div>
        </div>
    </div>
  )
}

export default Sidebar