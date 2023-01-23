@DTCI-54
Feature: API Testing

	@TEST_DTCI-49 @TESTSET_DTCI-53 @API @Regression @Smoke
	Scenario: Test Create request scenario
		Given POST Request
		 Then The response status code should be 201
	@TEST_DTCI-50 @TESTSET_DTCI-53 @API @Regression @Smoke
	Scenario: Test Put Request Scenraio
		Given PUT Request
		 Then The response status code should be 200
	@TEST_DTCI-51 @TESTSET_DTCI-53 @Regression
	Scenario: Test Get Request Scenraio
		Given GET Request
		 Then The response status code for GET should be 200
	@TEST_DTCI-52 @TESTSET_DTCI-53 @Smoke
	Scenario: Test DEL Request Scenraio
		Given DEL Request
		 Then The response status code for DEL should be 204
