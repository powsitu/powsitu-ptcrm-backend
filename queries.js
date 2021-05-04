const {
  checkin,
  feedback,
  image,
  place,
  reservation,
  training,
  trainingType,
  user
} = require("./models");

async function getUsersWithCheckin() {
  const list = await checkin.findAll({
    include: {
      model: user
    }
  });

  return list.map(list => list.get({ plain: true}));
}

//getUsersWithCheckin().then(lists => console.log(lists));

async function getAUserWithReservationsAndType(id) {
  const list = await user.findByPk(id, {
    include: [
      {
        model: reservation,
        attributes: ["id"],
        include: {
          model: training,
          attributes: ["date"],
          include: {
            model: trainingType,
            attributes: ["name"]
          }
        }
      }
    ]
  });

  return list.get({ plain: true});
}

getAUserWithReservationsAndType(1).then(user => console.log(user));