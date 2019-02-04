(function() {
  
  const users = [];
  
  function User(n) {
    this.name = n;
    this.bills = []
  }

  User.prototype.sayMyName = function sayMyName() {
    return this.name;
  };

  User.prototype.getBills = function getBills() {
    return this.bills;
  };

  function start() {

    const btn = document.getElementById("my_btn");
    const input = document.getElementById("user_name");

    const ux = new User();
    ux.truc = "chose";

    btn.onclick = function() {
        users.push(new User(input.value) || "blank");
        console.log(users);
        console.log(users[users.length - 1].sayMyName());
    };
  }

  window.onload = start;
  
})();
