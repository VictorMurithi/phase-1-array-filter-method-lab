function findMatching(drivers,name){
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers,letter){
    return drivers.filter(driver => driver.startsWith(letter))
}
function matchName(drivers,name){
    return drivers.filter(driver=>driver.name === name)
}