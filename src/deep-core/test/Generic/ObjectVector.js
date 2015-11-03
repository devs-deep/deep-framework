'use strict';

import chai from 'chai';
import {ObjectVector} from '../../lib.compiled/Generic/ObjectVector';

suite('Generic/ObjectVector', function() {
  var testProto = () => {
    return 'test';
  };
  let firstItemToAdd = new testProto();
  firstItemToAdd.testData = 'firstItemToAdd';
  let secondItemToAdd = new testProto();
  secondItemToAdd.testData = 'secondItemToAdd';
  let thirdItemToAdd = {testData: 'thirdItemToAdd'};
  let objectVector = null;

  test('Class ObjectVector exists in Generic/ObjectVector', function() {
    chai.expect(typeof ObjectVector).to.equal('function');
  });

  test('Check constructor throws exception for invalid input', function() {
    let error = null;
    try {
      new ObjectVector(testProto, firstItemToAdd, secondItemToAdd, thirdItemToAdd);
    } catch (e) {
      error = e;
    }

    chai.assert.instanceOf(error, Error, 'error is an instance of Error');
  });

  test('Check constructor for valid input', function() {
    objectVector = new ObjectVector(testProto, firstItemToAdd, secondItemToAdd);
    chai.expect(objectVector.collection).to.be.eql([firstItemToAdd, secondItemToAdd]);
  });
});