'use strict';
/* Controllers */
function AppCtrl($scope)
{
	/*
	 <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.web.nest.nexsan.com/">
	 <soapenv:Header/>
	 <soapenv:Body>
	 <ser:siteIsConfigured>
	 <parameters></parameters>
	 </ser:siteIsConfigured>
	 </soapenv:Body>
	 </soapenv:Envelope>

	 */
	$scope.test = function()
	{

		var xmlData = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.web.nest.nexsan.com/"><soapenv:Header/><soapenv:Body><ser:siteIsConfigured><parameters></parameters></ser:siteIsConfigured></soapenv:Body></soapenv:Envelope>';
		$.ajax(
			'http://172.21.12.163:80/noauth/WebService/',
			{
				complete: function(jqXHR, textStatus)
				{
					var test = true;
				},
				processData:false,
				type: 'POST',
				dataType: 'xml',
				contentType: 'text/xml; charset="utf-8"',
				data: xmlData
			}
		);
		return;
		$.soap({
			url: 'http://172.21.12.163:80/noauth/WebService/',
			method: 'siteIsConfigured',
			appendMethodToURL: false,
			SOAPAction:'post',

			params: {
				name: 'Remy Blom',
				msg: 'Hi!'
			},

			success: function (soapResponse) {
				// do stuff with soapResponse
				// if you want to have the response as JSON use soapResponse.toJSON();
				// or soapResponse.toString() to get XML string
				// or soapResponse.toXML() to get XML DOM
				var test = true;
			},
			error: function (SOAPResponse) {
				// show error
				var test = true;
			},
			enableLogging: true
		});
	};
}
function HomeController()
{
	var test = 5;
	test += 2;
}
HomeController.$inject = [];
angular.module('myApp.controllers', [])
	.controller('MyCtrl1', [function ()
	{

	}])
	.controller('MyCtrl2', [function ()
	{
	}]);