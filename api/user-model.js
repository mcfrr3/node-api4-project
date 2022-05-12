module.exports = {
  add,
  getAll,
  getByIndex,
};

const users = [];

async function getAll() {
  return users;
}

async function getByIndex(i) {
  return users[i];
}

async function add(user) {
  users.push(user);
  return user;
}

async function find(user) {
  users.filter(user => {
    
  })
}