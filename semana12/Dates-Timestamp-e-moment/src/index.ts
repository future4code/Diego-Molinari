import moment from 'moment';
moment.locale('pt-br');

type event = {
  name: string;
  description: string;
  initDate: moment.Moment;
  endDate: moment.Moment;
};

let allEvents: event[] = [
  {
    name: `Aniversário do Pai`,
    description: `Festa aqui em casa`,
    initDate: moment(`29/09/2020 19:00`, `DD/MM/YYYY HH:mm`),
    endDate: moment(`29/09/2020 23:00`, `DD/MM/YYYY HH:mm`),
  },

  {
    name: `Futebol de sexta`,
    description: `Jogo de Futebol dos amigos`,
    initDate: moment(`28/08/2020 19:00`, `DD/MM/YYYY HH:mm`),
    endDate: moment(`28/08/2020 21:00`, `DD/MM/YYYY HH:mm`),
  },
];

function showEvents() {
  allEvents.map((event) => {
    const eventDuration: number = event.endDate.diff(event.initDate, 'minutes');
    let daysLeft = event.initDate.diff(moment(), 'days');
    console.log(`
    Nome: ${event.name}
    Horário de início: ${event.initDate.format(
      'dddd, DD [de] MMMM [de] YYYY, HH[h]mm',
    )}
    Horário de fim: ${event.endDate.format('DD [de] MMMM [de] YYYY, HH[h]mm')}
    Descrição: ${event.description} 
    Duração: ${eventDuration} minutos
    Dias até o evento: ${daysLeft}
    
    `);
  });
}

function createEvent() {
  let correctEvent = false;
  let correctDates = false;
  let newEvent: event = {
    name: process.argv[2],
    description: process.argv[3],
    initDate: moment(process.argv[4], 'DD/MM/YYYY HH:mm'),
    endDate: moment(process.argv[5], 'DD/MM/YYYY HH:mm'),
  };
  if (
    !newEvent.name ||
    !newEvent.description ||
    !newEvent.initDate ||
    !newEvent.endDate
  ) {
    console.log(
      'Para adicionar um novo evento escreva o mesmo no seguinte formado: nome_do_evento descrição_do_evento xx/xx/xxxx00:00 xx/xx/xxxx00:00',
    );
  } else {
    correctEvent = true;
  }
  if (newEvent.endDate.diff(newEvent.initDate, 'seconds') < 0) {
    console.log(
      'Erro ao criar o evento, a data final é anterior a data inicial',
    );
  } else {
    correctDates = true;
  }
  if (correctEvent && correctDates) {
    allEvents.push(newEvent);
  }
}
createEvent();
showEvents();
