window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {
    let submitBtn = document.querySelector("#submitBtn")
    let results = document.querySelector("#results")
    let lightOp = document.querySelector("#lightOption")
    let waterOp = document.querySelector("#waterOption")
    let usesInput = document.querySelector("#numUses")
    let hoursInput = document.querySelector("#hoursUsed")
    let error = document.querySelector("#errorText")

    submitBtn.addEventListener("click", showContent)

    function showContent()
    {
        let cost
        let usageType
        let averageUse
        let numUses = usesInput.value
        let hoursUsed = hoursInput.value
        let averageBill
        let calcBill
        let resultText =document.querySelector("#resultsText")
        let status

        error.setAttribute("hidden", true)
        if (!lightOp.checked && !waterOp.checked)
        {
            error.removeAttribute("hidden")
        }
        else
        {
            if (lightOp.checked)
            {
                cost = 0.09
                usageType = "Light"
                averageUse = 0.54
            }
            else if (waterOp.checked)
            {
                cost = 0.0275
                usageType = "Water"
                averageUse = 0.11
            }

            averageBill = averageUse*hoursUsed
            calcBill = hoursUsed*(cost*numUses)

            if (calcBill > averageBill*1.5)
                status = "BAD"
            else if (calcBill > averageBill)
                status = "OK"
            else if (calcBill > averageBill * 0.9)
                status = "GOOD"
            else if (calcBill > averageBill * 0.6)
                status = "GREAT"
            else
                status = "EXCELLENT"

            resultText.innerHTML = `Average Household ${usageType} Bill: $${averageBill.toFixed(2)}<br><br>Calculated ${usageType} Bill: $${calcBill.toFixed(2)}<br><br>Status: ${status}`
            
            results.style.setProperty("display","flex")

            submitBtn.value = "Update"
        }
    }
}


