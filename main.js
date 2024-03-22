const getYearDiff = (diff) => {
    return Math.floor(Math.abs(diff / (1000 * 60 * 60 * 24 * 365)));
}

const getMonthDiff = (diff) => {
    return Math.floor(Math.abs(diff / (1000 * 60 * 60 * 24 * 30)));
}

const terms = document.getElementsByClassName("terms")

for(let i=0; i<terms.length; i++) {
    const term = terms[i]
    const spans = term.getElementsByTagName("span")
    
    if(spans && spans.length == 2) {
        const term_date = spans[0].textContent.split(" ~ ")

        const start_date_arr = term_date[0].split("/")
        const start_date = new Date(`${start_date_arr[1]}-${start_date_arr[0]}-01`)
        
        let end_date = null
        if(term_date[1] === "current") {
            end_date = new Date()
        } else {
            const end_date_arr = term_date[1].split("/")
            end_date = new Date(`${end_date_arr[1]}-${end_date_arr[0]}-01`)
        }

        let date_diff = end_date - start_date

        const years = getYearDiff(date_diff)

        date_diff -= years * (1000 * 60 * 60 * 24 * 365)

        const months = getMonthDiff(date_diff)

        let duration = null
        if(years == 0) {
            duration = `${months} months`
        } else {
            if(months == 0) {
                duration = `${years} years`
            } else {
                duration = `${years} years  ${months} months`
            }
        }
        
        if (spans[1].className == "duration"){
            spans[1].textContent = duration
        }
    }
}