var Registration = require('../lib/registration');


describe("Registration", function(){

    describe("A valid application", function(){
        var regResult = {};
        before(function(){
            regResult = Registration.applyForMembership({email: "rob@tekpub.com"});
        });
        it("is successful", function(){
            regResult.success.should.equal(true);
        });
        it("creates a user");
        it("creates a log entre");
        it("sets the usert's status to aproved");
    });

    describe("an empty or null email", function(){
        it("is not successful");
        it("tells user that email is required");
    });

    describe("an empty or null password", function(){
        it("is not successful");
        it("tells user that password is required");
    });

    describe("password and confirm mismatch", function(){
        it("is not successful");
        it("tells user that password don't match");
    });

    describe("email already exists", function(){
        it("is not successful");
        it("tells user that email already exists");
    });



});