const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => drivers.slice(0, 2)

const returnLastTwoDrivers = () => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return fareMultiplier => (integer * 5)
}

function fareDoubler(fareMultiplier) {
    return (fareMultiplier * 2)
}

function fareTripler(fareMultiplier) {
    return (fareMultiplier * 3)
}

function selectDifferentDrivers(driversArray, driversFunction) {
    if (driversFunction === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(driversArray);
  } else if (driversFunction === returnLastTwoDrivers) {
    return returnLastTwoDrivers(driversArray);
  }
}