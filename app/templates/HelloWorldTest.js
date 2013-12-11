describe('HelloWorld', function() {
	var expect = chai.expect;

	var world;

	beforeEach(function() {
		world = new HelloWorld();
	});

	it('should greet', function() {
		expect(world).to.respondTo('greet');
		expect(world.greet()).to.be.a('string').to.be.equal('Hello world');	
	});

});
