let Customer = function () {
    this.setName=function (name) {
        this.name = name;
    };
    this.getName=function () {
        return this.name;
    };
    this.setCmnd = function (cmnd) {
        this.cmnd = cmnd;
    };
    this.getCmnd = function () {
        return this.cmnd;
    };
    this.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    this.getBirthday = function () {
        return this.birthday;
    };
    this.setEmail = function (email) {
        this.email = email;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.setAddress = function (address) {
        this.address = address;
    };
    this.getAddress = function () {
        return this.address;
    };
    this.setTypeServicer = function (typeServicer) {
        this.typeService = typeServicer;
    };
    this.getTypeServicer = function () {
        return this.typeService;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    };
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    };
    this.setDisCount = function (disCount) {
        this.disCount = disCount;
    };
    this.getDisCount = function () {
        return this.disCount;
    };
    this.setQuantityIncluded = function (quantityIncluded) {
        this.quantityIncluded = quantityIncluded;
    };
    this.getQuantityIncluded = function () {
        return this.quantityIncluded;
    };
    this.setRentDay = function (rentDay) {
        this.rentDay = rentDay;
    };
    this.getRentDay = function () {
        return this.rentDay;
    };
    this.totalPay =function () {
        let money = 0;
        if (this.getTypeServicer()==="Villa"){
            money = 500;
        }else if (this.getTypeServicer() ==="House"){
            money = 300;
        }else if (this.getTypeServicer() === "Room"){
            money = 200;
        }
        return this.getRentDay()*money*(1-this.getDisCount()/100);
    }

};