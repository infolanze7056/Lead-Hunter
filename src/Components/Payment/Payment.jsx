import React, {useState} from "react";

function Payment() {

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
  
    const handleCheckboxChange1 = () => {
      setChecked1(!checked1);
      setChecked2(false);
      // You can perform any other actions here
      console.log("Checkbox 1 checked:", !checked1);
    };
  
    const handleCheckboxChange2 = () => {
      setChecked2(!checked2);
      setChecked1(false);
      // You can perform any other actions here
      console.log("Checkbox 2 checked:", !checked2);
    };

  return (
    <div className="font-family">
      <div className="lg:px-36 md:px-20 px-5 py-20">
        <div className="grid grid-cols-2 max-w-xl mx-auto text-center border rounded-lg shadow-md">
            <div className="border-e p-10">
                <div className="text-3xl font-semibold">99 <sub>/ INR</sub></div>
                <div className="pt-2">
                    <input
                      checked={checked1} 
                      onChange={handleCheckboxChange1}
                      type="checkbox" />
                </div>
            </div>
            <div className="p-10">
                <div className="text-3xl font-semibold">999 <sub>/ INR</sub></div>
                <div className="pt-2">
                    <input 
                      checked={checked2} 
                      onChange={handleCheckboxChange2} 
                      type="checkbox" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
