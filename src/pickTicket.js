import tickets from './assets/tickets';

function getTicketPrice (numberOfTickets, ticketName, zoneIndex = 0) {
  return {
    ticketName: tickets[ticketName][zoneIndex].name,
    unitPrice: Number(tickets[ticketName][zoneIndex].price).toFixed(2),
    totalValue: (tickets[ticketName][zoneIndex].price * numberOfTickets).toFixed(2),
    quantity: numberOfTickets
  };
}

function getWeekTicketPrice ({persons, days, rides, short, zone}) {
    let weekTickets = Math.floor(days / 7);
    let remainingDays = days - weekTickets * 7;
    let remainingDaysTicket = 0;
    let totalValue = Number(tickets.week[0].price * weekTickets * persons);
    
    if(remainingDays) {
      remainingDaysTicket = findBestTicket({persons, days: remainingDays, rides, short, zone}, false)
      totalValue += Number(remainingDaysTicket.totalValue)
    }
    
    return {
      ticketName: tickets.week[0].name,
      unitPrice: tickets.week[0].price,
      totalValue,
      quantity: weekTickets * persons,
      remainingDaysTicket,
    };
}

let getBestTicketOption = (options) => {
  let filteredOptions = Object.entries(options).filter(option => option[1].quantity)
  let bestTicketOption = filteredOptions.sort((a,b) => a[1].totalValue - b[1].totalValue)[0][1]
  let bestTicketOptionObject = {
    ticketName: bestTicketOption.ticketName,
    unitPrice: bestTicketOption.unitPrice,
    totalValue: bestTicketOption.totalValue,
    quantity: bestTicketOption.quantity,
  }
  if(bestTicketOption.remainingDaysTicket) {
    bestTicketOptionObject.remainingDaysTicket = bestTicketOption.remainingDaysTicket;
  }
  return bestTicketOptionObject
}

function findBestTicket ({persons, days, rides, short, zone}, checkWeekTicket) {
  console.log({persons, days, rides, short, zone}, checkWeekTicket)

  let zones = ["AB", "BC", "ABC"];
  let zoneIndex = zones.findIndex(zoneName => zoneName === zone);
    
  let numberOfSingleTickets = persons * days * rides;
  let numberOfFourTickets = Math.ceil(persons * days * rides / 4);
  let numberOfSingleDayTickets = persons * days;
  let numberOfGroupTickets = days * Math.ceil(persons / 5);
  let ticketOptions = {};
  
  if(checkWeekTicket) {
    ticketOptions.week = getWeekTicketPrice({persons, days, rides, short, zone});
  }

  if(short) {
    ticketOptions.shortSingle = getTicketPrice(numberOfSingleTickets, "shortSingle")
    ticketOptions.shortFour = getTicketPrice(numberOfFourTickets, "shortFour")
  }
  
  ticketOptions.single = getTicketPrice(numberOfSingleTickets, "single", zoneIndex)
  ticketOptions.singleFour = getTicketPrice(numberOfFourTickets, "singleFour", zoneIndex)
  ticketOptions.singleDay = getTicketPrice(numberOfSingleDayTickets, "singleDay", zoneIndex)
  ticketOptions.groupDay = getTicketPrice(numberOfGroupTickets, "groupDay", zoneIndex)
  
  return getBestTicketOption(ticketOptions)
}

export {findBestTicket};